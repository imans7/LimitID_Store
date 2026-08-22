import type { Category, GameItem } from "@/types";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000/api";

class ApiError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
  }
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    ...options,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new ApiError(body?.message ?? `Request gagal (${res.status})`, res.status);
  }

  return res.json();
}

// GET /games — daftar game, opsional filter kategori & pencarian
export async function fetchGames(params?: { category?: Category; search?: string }) {
  const query = new URLSearchParams();
  if (params?.category) query.set("category", params.category);
  if (params?.search) query.set("search", params.search);
  const qs = query.toString() ? `?${query.toString()}` : "";

  const { data } = await request<{ data: GameItem[] }>(`/games${qs}`);
  return data;
}

// GET /games/popular — 6 game untuk section "Populer Sekarang"
export async function fetchPopularGames() {
  const { data } = await request<{ data: GameItem[] }>("/games/popular");
  return data;
}

// GET /games/{slug} — detail game + nominalGroups (untuk halaman produk)
export async function fetchGame(slug: string) {
  const { data } = await request<{ data: GameItem }>(`/games/${slug}`);
  return data;
}

// GET /payment-methods — dikelompokkan per group_key (ewallet/va/store)
export interface PaymentMethodGroup {
  key: string;
  title: string;
  options: { id: string; code: string; label: string }[];
}

export async function fetchPaymentMethods() {
  const { data } = await request<{ data: PaymentMethodGroup[] }>("/payment-methods");
  return data;
}

// POST /promo-codes/validate
export async function validatePromoCode(code: string, subtotal: number) {
  return request<{ valid: boolean; discount_amount: number; total: number; message?: string }>(
    "/promo-codes/validate",
    { method: "POST", body: JSON.stringify({ code, subtotal }) }
  );
}

export interface CreateOrderPayload {
  game_id: number;
  account_id: string;
  server?: string;
  nominal_id: number;
  quantity: number;
  payment_method_id: number;
  promo_code?: string;
  email: string;
  whatsapp: string;
}

// POST /orders
export async function createOrder(payload: CreateOrderPayload) {
  return request<{ order_number: string; total: number; status: string }>("/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export { ApiError };
