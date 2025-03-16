import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCategories() {
  const categories = [
    {
      name: "Peixes",
      description: "Filé, vivo ou limpo",
      image: "/images/category_fish.png",
      href: "/produtos/peixes",
    },
    {
      name: "Galinha Caipira",
      description: "Galinhas/Frangos e ovos caipiras",
      image: "/images/category_chicken.png",
      href: "/produtos/galinhas",
    },
    {
      name: "Codornas",
      description: "Codornas vivas e ovos",
      image: "/images/category_quail.png",
      href: "/produtos/codornas",
    },
  ];

  return (
    <section className="w-full py-8 bg-background">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emeraldTeal">
          Nossos Produtos
        </h2>
        <p className="text-deepMocha max-w-2xl mx-auto">
          Produtos rurais de qualidade diretamente do produtor
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Card
            key={category.name}
            className="overflow-hidden h-full transition-shadow hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={200}
                height={150}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{category.name}</CardTitle>
              <CardDescription className="text-xs">
                {category.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
