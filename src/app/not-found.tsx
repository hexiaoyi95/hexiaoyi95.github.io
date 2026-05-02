import Link from 'next/link';
import { FaArrowRight, FaFlagCheckered } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-[70vh]">
      <section className="container mx-auto flex min-h-[70vh] items-center px-4 py-16">
        <div className="track-card max-w-3xl p-8 sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-racer-flare/30 bg-racer-flare/10 text-racer-flare">
            <FaFlagCheckered className="h-6 w-6" />
          </div>
          <p className="eyebrow mt-6">Page Not Found</p>
          <h1 className="mt-3 text-5xl font-black tracking-[-0.06em] text-white">This page is not available.</h1>
          <p className="mt-4 max-w-xl leading-8 text-slate-300">
            The page may have moved during the rebuild. Go back to the homepage or open the blog.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn">
              Homepage
              <FaArrowRight />
            </Link>
            <Link href="/blog" className="btn btn-secondary">
              Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
