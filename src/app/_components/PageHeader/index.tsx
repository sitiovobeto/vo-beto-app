import Image from "next/image";
import { DeliveryZones } from "./DeliveryZones";
import { SearchInput } from "./SearchInput";
import { ShoppingCart } from "./ShoppingCart";

export const PageHeader = () => {
  return (
    <header className="flex items-center p-4 bg-[--color-primary] shadow-md justify-around">
      <div className="flex items-center gap-7 flex-shrink-0">
        <Image src="/images/logo.svg" alt="Logo" width={150} height={50} />
        <DeliveryZones />
      </div>

      <div className="w-3/6">
        <SearchInput />
      </div>

      <div className="flex items-center gap-3">
        <ShoppingCart />
      </div>
    </header>
  );
};
