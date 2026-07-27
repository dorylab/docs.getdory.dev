import Image from "next/image";
import type { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";
import ProductOilBackdrop from "@/public/product-oil-backdrop.png";

type PaintedProductFrameProps = {
  src: StaticImageData | string;
  alt: string;
  className?: string;
  imageClassName?: string;
  magnifier?: {
    zoom?: number;
    className?: string;
  };
  sizes?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function PaintedProductFrame({
  src,
  alt,
  className,
  imageClassName,
  magnifier,
  sizes = "(max-width: 1023px) calc(100vw - 48px), 700px",
  width = 3024,
  height = 1730,
  priority = false,
}: PaintedProductFrameProps) {
  const magnifierZoom = magnifier?.zoom ?? 2.2;
  const magnifierWidthRatio = 0.68;

  return (
    <figure
      className={cn(
        "relative isolate overflow-hidden rounded-[24px] p-5 pt-9 shadow-[0_18px_46px_rgba(23,22,21,0.1)] sm:p-7 sm:pt-12 dark:shadow-[0_18px_46px_rgba(0,0,0,0.34)]",
        className,
      )}
    >
      <Image
        src={ProductOilBackdrop}
        alt=""
        fill
        aria-hidden="true"
        sizes={sizes}
        className="-z-10 object-cover object-center dark:brightness-[0.42] dark:saturate-[0.78]"
      />
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          {...(typeof src === "string" ? { width, height } : {})}
          priority={priority}
          unoptimized
          sizes={sizes}
          className={cn(
            "h-auto w-full rounded-[14px] shadow-[0_14px_30px_rgba(47,108,255,0.16)] dark:shadow-[0_14px_30px_rgba(0,0,0,0.48)]",
            imageClassName,
          )}
        />
        {magnifier ? (
          <div
            className={cn(
              "pointer-events-none absolute bottom-0 left-0 z-10 aspect-[14/1] w-[68%] overflow-hidden rounded-[10px] rounded-bl-[14px] border border-white/25 bg-[#11100f] shadow-[0_12px_28px_rgba(0,0,0,0.42)] ring-1 ring-black/25",
              magnifier.className,
            )}
            aria-hidden="true"
          >
            <Image
              src={src}
              alt=""
              {...(typeof src === "string" ? { width, height } : {})}
              unoptimized
              sizes={sizes}
              className="absolute -bottom-0.5 left-0 h-auto max-w-none lg:-bottom-1"
              style={{
                width: `${(magnifierZoom / magnifierWidthRatio) * 100}%`,
              }}
            />
          </div>
        ) : null}
      </div>
    </figure>
  );
}
