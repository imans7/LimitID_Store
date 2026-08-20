import { useState } from "react";
import { Search, Receipt, Trophy, Calculator, LogIn, UserPlus, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navTabs = [
  { key: "topup", label: "Top Up", icon: Zap },
  { key: "cek", label: "Cek Transaksi", icon: Receipt },
  { key: "leaderboard", label: "Leaderboard", icon: Trophy },
  { key: "kalkulator", label: "Kalkulator", icon: Calculator },
];

export function Navbar() {
  const [active, setActive] = useState("topup");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      {/* Top bar: logo, search, auth */}
      <div className="container flex h-16 items-center gap-4">
        <a href="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-crimson text-white">
            L
          </span>
          Limit<span className="text-crimson-bright">ID</span>
        </a>

        <div className="relative hidden flex-1 max-w-xl sm:block">
          <Search
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="text"
            placeholder="Cari Game atau Voucher"
            className="h-10 w-full rounded-md border border-border bg-surface pl-10 pr-4 text-sm text-foreground placeholder:text-muted focus:border-crimson focus:outline-none"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            <LogIn size={16} /> Masuk
          </Button>
          <Button size="sm">
            <UserPlus size={16} /> Daftar
          </Button>
        </div>
      </div>

      {/* Tab bar */}
      <div className="border-t border-border">
        <div className="container flex gap-1 overflow-x-auto">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`relative flex items-center gap-2 whitespace-nowrap px-4 py-3 font-display text-sm font-medium transition-colors ${
                  isActive ? "text-crimson-bright" : "text-muted hover:text-foreground"
                }`}
              >
                <Icon size={16} />
                {tab.label}
                {isActive && (
                  <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-crimson-bright" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
