import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const methodBadgeVariants = cva(
  "px-2 py-1 text-xs font-semibold rounded-full inline-block",
  {
    variants: {
      method: {
        GET: "bg-green-100 text-green-800",
        POST: "bg-blue-100 text-blue-800",
        PUT: "bg-yellow-100 text-yellow-800",
        PATCH: "bg-purple-100 text-purple-800",
        DELETE: "bg-red-100 text-red-800",
      },
    },
    defaultVariants: {
      method: "GET",
    },
  }
);

export interface BadgeMethodProps extends VariantProps<typeof methodBadgeVariants> {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  className?: string;
}

export function BadgeMethod({ method, className }: BadgeMethodProps) {
  return <span className={cn(methodBadgeVariants({ method }), className)}>{method}</span>;
}
