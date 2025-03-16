"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, ShoppingCart } from "lucide-react";

const sampleProducts = [
  {
    id: "1",
    name: "Filé de Tilápia",
    category: "Peixes",
    price: "R$ 35,90/kg",
    description: "Filé fresco de tilápia, limpo e sem espinhas",
    image: "/images/fish_fillet.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Peixe Vivo - Tilápia",
    category: "Peixes",
    price: "R$ 12,00/kg",
    description: "Tilápia viva para criação ou consumo",
    image: "/images/live_fish.jpg",
    inStock: true,
    featured: false,
  },
  {
    id: "3",
    name: "Galinha Caipira",
    category: "Galinha Caipira",
    price: "R$ 45,00/unidade",
    description: "Galinha caipira criada solta, alimentação natural",
    image: "/images/free_range_chicken.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Ovos Caipira",
    category: "Galinha Caipira",
    price: "R$ 14,00/dúzia",
    description: "Ovos frescos de galinhas criadas em ambiente natural",
    image: "/images/free_range_eggs.jpg",
    inStock: true,
    featured: false,
  },
  {
    id: "5",
    name: "Codorna Viva",
    category: "Codornas",
    price: "R$ 10,00/unidade",
    description: "Codorna viva para criação ou consumo",
    image: "/images/live_quail.jpg",
    inStock: true,
    featured: false,
  },
  {
    id: "6",
    name: "Ovos de Codorna",
    category: "Codornas",
    price: "R$ 9,00/bandeja",
    description: "Bandeja com 30 ovos de codorna frescos",
    image: "/images/quail_eggs.jpg",
    inStock: true,
    featured: true,
  },
];

export default function ProductListing({ category = "all" }) {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("featured");

  const filteredProducts = sampleProducts
    .filter((product) => category === "all" || product.category === category)
    .filter((product) => {
      if (filter === "all") return true;
      if (filter === "inStock") return product.inStock;
      if (filter === "featured") return product.featured;
      return true;
    })
    .sort((a, b) => {
      if (sort === "featured") {
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
      }
      if (sort === "priceLow") {
        return a.price.localeCompare(b.price);
      }
      if (sort === "priceHigh") {
        return b.price.localeCompare(a.price);
      }
      return 0;
    });

  return (
    <section className="w-full py-8 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emeraldTeal">
              {category === "all" ? "Todos os Produtos" : category}
            </h2>
            <p className="text-deepMocha max-w-2xl mx-auto">
              {filteredProducts.length} produtos encontrados
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-deepMocha max-w-2xl mx-full md:mx-auto" />
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="md:w-[140px] w-full">
                  <SelectValue placeholder="Filtrar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="inStock">Disponíveis</SelectItem>
                  <SelectItem value="featured">Destaques</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="md:w-[140px] w-full">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Destaques</SelectItem>
                <SelectItem value="priceLow">Menor preço</SelectItem>
                <SelectItem value="priceHigh">Maior preço</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden h-full flex flex-col max-w-[260px] mx-auto"
            >
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={260}
                  height={260}
                  className="w-full h-48 object-cover"
                />
                {product.featured && (
                  <Badge className="absolute top-2 right-2 bg-primary">
                    Destaque
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <Badge
                      variant="outline"
                      className="text-muted-foreground border-muted-foreground"
                    >
                      Indisponível
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-base text-deepMocha">
                  {product.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-4 pt-1 flex-grow">
                <p className="text-sm text-deepMocha">{product.description}</p>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <span className="text-sm font-medium">{product.price}</span>
                <Button
                  size="sm"
                  disabled={!product.inStock}
                  className="flex items-center gap-1 bg-emeraldTeal hover:bg-opacity-80"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only sm:inline-block">
                    Comprar
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum produto encontrado.</p>
          </div>
        )}
      </div>
    </section>
  );
}
