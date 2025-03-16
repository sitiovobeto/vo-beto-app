import Image from "next/image";
import { ShoppingCart, Leaf, Truck, Heart } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: "Escolha seus produtos",
      description:
        "Navegue por nossa seleção de produtos rurais frescos e escolha o que deseja receber.",
      image: "/images/choice_of_products.jpg",
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Colhemos produtos frescos",
      description:
        "Nossos agricultores colhem os produtos frescos diretamente da terra para garantir a melhor qualidade.",
      image: "/images/harvest.jpg",
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Receba em casa",
      description:
        "Entregamos em sua casa toda segunda e quinta-feira, garantindo produtos sempre frescos.",
      image: "/images/product_delivery.jpg",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Produtos com carinho",
      description:
        "Todos os nossos produtos são manejados e colhidos com carinho e respeito ao meio ambiente.",
      image: "/images/product_basket.jpg",
    },
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emeraldTeal">
            Como Funciona?
          </h2>
          <p className="text-deepMocha max-w-2xl mx-auto">
            Conheça o processo simples para receber produtos rurais frescos
            diretamente em sua casa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-card rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center bg-primary/10 rounded-full w-12 h-12">
                    {step.icon}
                  </div>
                  <span className="text-sm font-medium text-deepMocha">
                    Passo {index + 1}
                  </span>
                </div>
                <h3 className="text-xl text-deepMocha font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-deepMocha">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
