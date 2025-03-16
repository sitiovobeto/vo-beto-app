import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  return (
    <div className="hidden sm:flex items-center max-w-md w-full mx-4">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-deepMocha" />
        <Input
          type="search"
          placeholder="Buscar produtos..."
          className="w-full pl-10 bg-white/90 focus:bg-white"
        />
      </div>
    </div>
  );
};
