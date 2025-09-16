import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative group">
        <Search className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground/70 transition-colors group-focus-within:text-primary" />
        <input
          className={cn(
            "flex h-16 w-full rounded-2xl border-0 bg-background/80 backdrop-blur-xl pl-12 pr-6 py-4 text-lg font-medium shadow-glass transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:shadow-hero focus-visible:bg-background/90 hover:bg-background/90 hover:shadow-card-hover disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };