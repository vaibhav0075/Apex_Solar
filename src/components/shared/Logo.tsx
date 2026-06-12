import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { images } from "@/data/images";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  href?: string;
  priority?: boolean;
}

export default function Logo({
  className,
  imageClassName,
  href = "/",
  priority = false,
}: LogoProps) {
  const image = (
    <Image
      src={images.logo}
      alt="Apex Solar Infra Pvt. Ltd."
      width={560}
      height={186}
      priority={priority}
      className={cn(
        "h-14 w-auto sm:h-16 md:h-[4.25rem] lg:h-[4.75rem]",
        imageClassName
      )}
    />
  );

  if (href) {
    return (
      <Link href={href} className={cn("inline-flex shrink-0 transition-opacity hover:opacity-90", className)}>
        {image}
      </Link>
    );
  }

  return <div className={cn("inline-flex shrink-0", className)}>{image}</div>;
}
