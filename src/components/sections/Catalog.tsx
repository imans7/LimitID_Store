import { useState } from "react";
import { Link } from "react-router-dom";
import { games, type Category } from "@/data/games";

const categories: { key: Category; label: string }[] = [
  { key: "topup", label: "Top Up" },
  { key: "voucher", label: "Voucher" },
  { key: "hiburan", label: "Hiburan" },
];

export function Catalog() {
  const [active, setActive] = useState<Category>("topup");
  const filtered = games.filter((g) => g.category === active);

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

        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {filtered.map((game) => (
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
                <p className="mt-2 font-mono text-xs text-limit">
                  mulai {game.startPrice}
                </p>
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <p className="col-span-full py-10 text-center text-sm text-muted">
              Belum ada produk di kategori ini.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
