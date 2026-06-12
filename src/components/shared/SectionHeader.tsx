import FadeInView from "@/components/animations/FadeInView";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <FadeInView
      className={cn(
        "mb-14 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <Badge variant="default" className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-xl leading-relaxed text-slate-600">{description}</p>
      )}
    </FadeInView>
  );
}
