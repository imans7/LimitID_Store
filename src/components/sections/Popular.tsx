import { games } from "@/data/games";
import { Flame } from "lucide-react";

const popular = games.slice(0, 6);

export function Popular() {
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

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {popular.map((game) => (
            <a
              key={game.id}
              href={`#${game.id}`}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
