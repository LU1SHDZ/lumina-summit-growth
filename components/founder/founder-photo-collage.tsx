import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const founderPhotos = [
  {
    src: "/images/founder/luis-hernandez-portrait.jpg",
    alt: {
      en: "Portrait of Luis Hernandez, founder of Lumina Summit Growth",
      es: "Retrato de Luis Hernandez, fundador de Lumina Summit Growth",
    },
    className: "col-span-7 col-start-1 row-span-8 row-start-1",
    imageClassName: "object-cover object-[center_35%]",
  },
  {
    src: "/images/founder/luis-hernandez-arch.jpg",
    alt: {
      en: "Luis Hernandez standing beneath a stone archway",
      es: "Luis Hernandez de pie bajo un arco de piedra",
    },
    className: "col-span-5 col-start-8 row-span-6 row-start-1",
    imageClassName: "object-cover object-[center_62%]",
  },
  {
    src: "/images/founder/luis-hernandez-campus.jpg",
    alt: {
      en: "Luis Hernandez seated outdoors on a university campus",
      es: "Luis Hernandez sentado al aire libre en un campus universitario",
    },
    className: "col-span-5 col-start-8 row-span-6 row-start-7",
    imageClassName: "object-cover object-[center_52%]",
  },
  {
    src: "/images/founder/luis-hernandez-mcallister.jpg",
    alt: {
      en: "Luis Hernandez standing in front of McAllister Hall",
      es: "Luis Hernandez de pie frente a McAllister Hall",
    },
    className: "col-span-7 col-start-1 row-span-4 row-start-9",
    imageClassName: "object-cover object-[center_58%]",
  },
] as const;

export function FounderPhotoCollage({
  locale = "en",
  size = "compact",
}: {
  locale?: Locale;
  size?: "compact" | "full";
}) {
  const spanish = locale === "es";

  return (
    <figure
      className={`relative grid grid-cols-12 grid-rows-12 gap-2 bg-charcoal p-2 shadow-[12px_12px_0_#C89B3C] ${
        size === "full" ? "h-[34rem] sm:h-[42rem] lg:h-[48rem]" : "h-[30rem] sm:h-[36rem] lg:h-[40rem]"
      }`}
    >
      {founderPhotos.map((photo, index) => (
        <div key={photo.src} className={`relative overflow-hidden ${photo.className}`}>
          <Image
            src={photo.src}
            alt={photo.alt[locale]}
            fill
            loading="eager"
            sizes={size === "full" ? "(min-width: 1024px) 38vw, 90vw" : "(min-width: 1024px) 24vw, 70vw"}
            className={`${photo.imageClassName} transition duration-700 hover:scale-[1.02]`}
          />
          {index === 0 ? <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" /> : null}
        </div>
      ))}

      <figcaption className="pointer-events-none absolute bottom-6 left-6 border-l-2 border-gold bg-charcoal/85 px-4 py-3 text-cream backdrop-blur-sm sm:bottom-8 sm:left-8">
        <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-gold">
          {spanish ? "Fundador" : "Founder"}
        </span>
        <span className="mt-1 block font-display text-2xl leading-none">Luis Hernandez</span>
      </figcaption>
    </figure>
  );
}
