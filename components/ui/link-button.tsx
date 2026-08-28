import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type LinkButtonProps = ComponentProps<typeof Link> & { variant?: "primary" | "light" | "outline"; className?: string };
export function LinkButton({ variant = "primary", className, ...props }: LinkButtonProps) {
  const styles = { primary: "bg-gold text-charcoal hover:bg-cream", light: "bg-cream text-charcoal hover:bg-gold", outline: "border border-current text-current hover:border-gold hover:text-gold" };
  return <Link className={cn("inline-flex items-center justify-center gap-3 px-6 py-4 text-xs font-bold uppercase tracking-[.14em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold", styles[variant], className)} {...props} />;
}
