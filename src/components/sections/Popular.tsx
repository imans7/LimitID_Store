import { Link } from "react-router-dom";
import { Flame } from "lucide-react";
import { fetchPopularGames } from "@/lib/api";
import { useFetch } from "@/hooks/useFetch";

export function Popular() {
  const { data: games, loading, error } = useFetch(fetchPopularGames, []);

  return (
    <section className="border-b border-border py-14">
      <div className="container">
        <div className="flex items-center gap-2">
          <Flame size={20} className="text-crimson-bright" />
          <h2 className="font-display text-2xl font-bold">Populer Sekarang!</h2>
        </div>
        <p className="mt-1 text-sm text-muted">
          Beberapa produk yang paling banyak di-topup saat ini.
        </p>

        {error && (
          <p className="mt-6 text-sm text-crimson-bright">
            Gagal memuat data: {error}. Pastikan backend Laravel jalan di VITE_API_URL.
          </p>
        )}

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-[60px] animate-pulse rounded-lg border border-border bg-surface" />
            ))}

          {games?.map((game) => (
            <Link
              key={game.id}
              to={`/produk/${game.id}`}
              className="group flex items-center gap-3 rounded-lg border border-border bg-surface p-3 transition-colors hover:border-crimson"
            >
              <div
                className={`h-12 w-12 shrink-0 rounded-md bg-gradient-to-br ${game.gradient} flex items-center justify-center font-display text-lg font-bold text-white`}
              >
                {game.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-semibold group-hover:text-crimson-bright">
                  {game.name}
                </p>
                <p className="truncate text-xs text-muted">{game.publisher}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
