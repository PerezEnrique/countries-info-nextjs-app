import type { ReactNode } from "react";
import type { Country } from "countries.types";

type CardGridProps = {
  items: Country[];
  onNoItem: unknown;
  children: ReactNode;
};

export default function CardGrid({ items, onNoItem, children }: CardGridProps) {
  return (
    <section className="card-grid">
      {!items || (!items.length && onNoItem)}
      {items?.length && children}
    </section>
  );
}
