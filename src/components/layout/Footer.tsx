export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
        <p className="font-display font-semibold text-foreground">
          Limit<span className="text-crimson-bright">ID</span> Store
        </p>
        <p>© {new Date().getFullYear()} Limit ID Store. Semua transaksi diproses otomatis 24 jam.</p>
      </div>
    </footer>
  );
}
