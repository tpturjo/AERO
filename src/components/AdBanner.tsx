import Image from "next/image";
import Link from "next/link";

export type AdItem = {
  title: string;
  image: string;
  alt: string;
  href?: string;
  caption?: string;
  active?: boolean;
};

export default function AdBanner({ title, image, alt, href, caption }: AdItem) {
  const poster = (
    <Image
      src={image}
      alt={alt}
      width={1200}
      height={900}
      className="mx-auto rounded-lg shadow-lg"
      priority
    />
  );

  return (
    <section className="my-0">
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-24 text-center">
        <h2 className="text-3xl font-extrabold text-red-600 mb-6">{title}</h2>
        {href ? (
          <Link href={href} target="_blank" className="hover:opacity-90 transition">
            {poster}
          </Link>
        ) : (
          poster
        )}
        {caption && <p className="mt-4 text-gray-700">{caption}</p>}
      </div>
    </section>
  );
}
