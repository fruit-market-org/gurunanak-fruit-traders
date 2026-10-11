import Link from 'next/link';
import FruitArt from '@/components/FruitArt';
import { ArrowIcon } from '@/components/Icons';

export default function NotFound() {
  return (
    <section className="section bg-white">
      <div className="container flex flex-col items-center py-10 text-center sm:py-16">
        <FruitArt art="lemon" title="Lemon" className="w-40 sm:w-52" />
        <span className="eyebrow mt-8">Error 404</span>
        <h1 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
          This page is out of season
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-600">
          The page you were looking for is not here. Head back to the home page, or browse the fruits
          we have on the floor right now.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            Back to home
          </Link>
          <Link href="/products" className="btn-ghost w-full sm:w-auto">
            Browse fruits
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
