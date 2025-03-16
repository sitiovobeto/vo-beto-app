import Image from "next/image";
import { DeliveryZones } from "./DeliveryZones";
import { SearchInput } from "./SearchInput";
import { ShoppingCart } from "./ShoppingCart";

export const PageHeader = () => {
  return (
    <header className="flex flex-col md:flex-row items-center p-4 bg-[--color-primary] shadow-md gap-4 md:justify-between">
      <div className="flex items-center justify-between w-full md:w-auto gap-4">
        <Image src="/images/logo.svg" alt="Logo" width={120} height={40} />
        <DeliveryZones />
      </div>

      <div className="w-full md:w-3/6">
        <SearchInput />
      </div>

      <div className="flex items-center justify-end w-full md:w-auto gap-3">
        <ShoppingCart />
      </div>
    </header>
  );
};
