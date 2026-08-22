import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { games } from "@/data/games";
import { getNominalGroups, type Nominal } from "@/data/denominations";
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
  const game = games.find((g) => g.id === id);

  const [accountId, setAccountId] = useState("");
  const [server, setServer] = useState("");
  const [selected, setSelected] = useState<Nominal | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState<PaymentOption | null>(null);
  const [promo, setPromo] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const groups = useMemo(() => (game ? getNominalGroups(game.id) : []), [game]);

  if (!game) {
    return (
      <div className="container flex flex-col items-center gap-4 py-24 text-center">
        <p className="text-muted">Produk tidak ditemukan.</p>
        <Link to="/" className="text-crimson-bright underline">
          Kembali ke beranda
        </Link>
      </div>
    );
  }

  const handleSubmit = () => {
    // TODO: sambungkan ke backend/payment gateway.
    // Untuk sekarang cuma placeholder — data yang sudah terkumpul:
    console.log({
      game: game.id,
      accountId,
      server,
      selected,
      quantity,
      payment,
      promo,
      email,
      whatsapp,
    });
    alert("Order dummy terkirim — sambungkan ke backend untuk transaksi asli.");
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
          />

          <NominalPicker
            groups={groups}
            selectedId={selected?.id ?? null}
            onSelect={setSelected}
          />

          <QuantityStep quantity={quantity} onChange={setQuantity} />

          <PaymentPicker selectedId={payment?.id ?? null} onSelect={setPayment} />

          <PromoStep code={promo} onChange={setPromo} onApply={() => {}} />

          <ContactStep
            email={email}
            whatsapp={whatsapp}
            onEmailChange={setEmail}
            onWhatsappChange={setWhatsapp}
          />

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

        <OrderSidebar selected={selected} quantity={quantity} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
