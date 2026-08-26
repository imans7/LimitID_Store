import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchGames } from "@/lib/api";
import { useFetch } from "@/hooks/useFetch";
import type { Category } from "@/types";

const categories: { key: Category; label: string }[] = [
  { key: "topup", label: "Top Up" },
  { key: "voucher", label: "Voucher" },
  { key: "hiburan", label: "Hiburan" },
];

export function Catalog() {
  const [active, setActive] = useState<Category>("topup");
  const {
    data: games,
    loading,
    error,
  } = useFetch(() => fetchGames({ category: active }), [active]);

  return (
    <section className="py-14">
      <div className="container">
        <div className="flex gap-2">
          {categories.map((cat) => {
            const isActive = active === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`rounded-md px-4 py-2 font-display text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-crimson text-white"
                    : "bg-surface text-muted hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {error && (
          <p className="mt-6 text-sm text-crimson-bright">
            Gagal memuat data: {error}. Pastikan backend Laravel jalan di VITE_API_URL.
          </p>
        )}

        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-[152px] animate-pulse rounded-lg border border-border bg-surface" />
            ))}

          {games?.map((game) => (
            <Link
              key={game.id}
              id={game.id}
              to={`/produk/${game.id}`}
              className="group overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-crimson"
            >
              <div
                className={`flex h-28 items-center justify-center bg-gradient-to-br ${game.gradient}`}
              >
                <span className="font-display text-3xl font-bold text-white/90">
                  {game.name.charAt(0)}
                </span>
              </div>
              <div className="p-3">
                <p className="truncate font-display text-sm font-semibold group-hover:text-crimson-bright">
                  {game.name}
                </p>
                <p className="truncate text-xs text-muted">{game.publisher}</p>
              </div>
            </Link>
          ))}

          {!loading && games?.length === 0 && (
            <p className="col-span-full py-10 text-center text-sm text-muted">
              Belum ada produk di kategori ini.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
