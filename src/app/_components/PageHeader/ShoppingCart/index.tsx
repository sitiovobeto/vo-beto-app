"use client";

import { ShoppingBasketIcon as Basket, X } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/hooks/store/cart";
import { NumberHelper } from "@/utils";

export function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity, calculatePriceTotal } =
    useCartStore();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative flex items-center gap-2">
          <Basket className="h-6 w-6" />
          <span>Minha cesta</span>
          {totalItems > 0 && (
            <Badge
              className="absolute -top-2 -right-2 px-2 py-1 text-xs"
              variant="destructive"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle> Sua cesta ({totalItems})</SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Basket className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-deepMocha">
                Sua cesta está vazia
              </h3>
              <p className="text-sm text-deepMocha mt-1">
                Adicione produtos para continuar
              </p>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-md">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-deepMocha">{item.name}</h3>
                    <p className="text-sm text-deepMochad">
                      {NumberHelper.formatCurrency(item.price)}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() =>
                          updateQuantity(Number(item.id), item.quantity - 1)
                        }
                      >
                        -
                      </Button>
                      <span className="w-8 text-center text-deepMocha">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() =>
                          updateQuantity(Number(item.id), item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              <Separator className="my-4" />

              <div className="flex items-center justify-between">
                <span className="font-medium text-deepMocha">Total</span>
                <span className="font-bold text-deepMocha">
                  {calculatePriceTotal()}
                </span>
              </div>

              <div className="mt-6 space-y-2">
                <Button className="w-full bg-emeraldTeal">
                  Finalizar compra
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
