import Image from "next/image";

export function BrandLockup({
  inverse = false,
  compact = false,
}: {
  inverse?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className={`relative shrink-0 overflow-hidden bg-[#071014] ring-1 ring-gold/25 ${compact ? "h-14 w-14" : "h-16 w-16"}`}>
        <Image
          src="/images/brand/lumina-summit-emblem-v3.png"
          alt=""
          aria-hidden="true"
          fill
          sizes={compact ? "56px" : "64px"}
          className="object-cover"
        />
      </span>
      <span className={inverse ? "text-cream" : "text-charcoal"}>
        <span className="block whitespace-nowrap font-display text-2xl font-semibold leading-none tracking-tight">
          Lumina <span className={inverse ? "text-gold" : "text-terracotta"}>Summit</span>
        </span>
        <span className="mt-1 block text-[0.5rem] font-semibold uppercase leading-none tracking-[0.36em] opacity-65">
          Growth
        </span>
      </span>
    </span>
  );
}
