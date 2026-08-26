import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchGame, createOrder, validatePromoCode, ApiError } from "@/lib/api";
import { useFetch } from "@/hooks/useFetch";
import type { Nominal } from "@/types";
import { ProductBanner } from "@/components/product/ProductBanner";
import { AccountForm } from "@/components/product/AccountForm";
import { NominalPicker } from "@/components/product/NominalPicker";
import { QuantityStep } from "@/components/product/QuantityStep";
import { PaymentPicker, type PaymentOption } from "@/components/product/PaymentPicker";
import { PromoStep } from "@/components/product/PromoStep";
import { ContactStep } from "@/components/product/ContactStep";
import { OrderSidebar } from "@/components/product/OrderSidebar";

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { data: game, loading, error } = useFetch(() => fetchGame(id!), [id]);

  const [accountId, setAccountId] = useState("");
  const [server, setServer] = useState("");
  const [selected, setSelected] = useState<Nominal | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState<PaymentOption | null>(null);
  const [promo, setPromo] = useState("");
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (loading) {
    return <div className="container py-24 text-center text-muted">Memuat produk…</div>;
  }

  if (error || !game) {
    return (
      <div className="container flex flex-col items-center gap-4 py-24 text-center">
        <p className="text-muted">
          {error ? `Gagal memuat produk: ${error}` : "Produk tidak ditemukan."}
        </p>
        <Link to="/" className="text-crimson-bright underline">
          Kembali ke beranda
        </Link>
      </div>
    );
  }

  const groups = game.nominalGroups ?? [];

  const handleApplyPromo = async () => {
    if (!selected || !promo) return;
    try {
      const subtotal = selected.price * quantity;
      const result = await validatePromoCode(promo, subtotal);
      setPromoMessage(
        result.valid
          ? `Promo diterapkan — potongan Rp ${result.discount_amount.toLocaleString("id-ID")}`
          : (result.message ?? "Kode promo tidak valid.")
      );
    } catch (err) {
      setPromoMessage(err instanceof ApiError ? err.message : "Gagal memeriksa kode promo.");
    }
  };

  const handleSubmit = async () => {
    if (!selected || !payment) return;
    setSubmitting(true);
    setSubmitError(null);

    try {
      const result = await createOrder({
        game_id: game.dbId,
        account_id: accountId,
        server: game.hasServerField ? server : undefined,
        nominal_id: Number(selected.id),
        quantity,
        payment_method_id: Number(payment.id),
        promo_code: promo || undefined,
        email,
        whatsapp,
      });
      alert(`Order berhasil dibuat: ${result.order_number}. Total: Rp ${result.total.toLocaleString("id-ID")}`);
    } catch (err) {
      setSubmitError(err instanceof ApiError ? err.message : "Gagal membuat order.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <ProductBanner game={game} />

      <div className="container grid gap-6 py-8 lg:grid-cols-[1fr,340px]">
        <div className="space-y-4">
          <AccountForm
            accountId={accountId}
            server={server}
            onAccountIdChange={setAccountId}
            onServerChange={setServer}
            hasServer={game.hasServerField}
          />

          <NominalPicker
            groups={groups}
            selectedId={selected?.id ?? null}
            onSelect={setSelected}
          />

          <QuantityStep quantity={quantity} onChange={setQuantity} />

          <PaymentPicker selectedId={payment?.id ?? null} onSelect={setPayment} />

          <PromoStep code={promo} onChange={setPromo} onApply={handleApplyPromo} />
          {promoMessage && <p className="-mt-2 text-xs text-muted">{promoMessage}</p>}

          <ContactStep
            email={email}
            whatsapp={whatsapp}
            onEmailChange={setEmail}
            onWhatsappChange={setWhatsapp}
          />

          {submitError && <p className="text-sm text-crimson-bright">{submitError}</p>}

          <div className="overflow-hidden rounded-lg border border-border">
            <div className="bg-surface2 px-4 py-3">
              <h2 className="font-display text-sm font-semibold">
                Deskripsi {game.name}
              </h2>
            </div>
            <div className="bg-surface p-4 text-sm text-muted">
              Top up {game.name} di Limit ID Store — proses instan, harga
              bersaing, dan pembayaran aman lewat E-Wallet, Virtual Account,
              atau Convenience Store.
            </div>
          </div>
        </div>

        <OrderSidebar
          selected={selected}
          quantity={quantity}
          onSubmit={handleSubmit}
          submitting={submitting}
        />
      </div>
    </div>
  );
}
