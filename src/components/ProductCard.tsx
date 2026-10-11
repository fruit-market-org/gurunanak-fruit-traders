import FruitArt from './FruitArt';
import type { Product } from '@/constants/site';

const SEASON_STYLES: Record<Product['season'], string> = {
  Summer: 'bg-amber-500/12 text-amber-600',
  Monsoon: 'bg-leaf-100 text-leaf-600',
  Winter: 'bg-brand-50 text-brand-600',
  'Year-round': 'bg-ink-100 text-ink-600',
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-lift">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-cream-100">
        <div
          className="dot-grid pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        />
        {product.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <FruitArt
            art={product.art}
            title={product.name}
            className="relative h-[78%] w-[78%] transition-transform duration-500 group-hover:scale-[1.06]"
          />
        )}
        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider ${
            SEASON_STYLES[product.season]
          }`}
        >
          {product.season}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold leading-snug sm:text-xl">{product.name}</h3>
        {product.localName ? (
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-500">
            {product.localName}
          </p>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-ink-600">{product.description}</p>
      </div>
    </article>
  );
}
