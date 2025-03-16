"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type City = {
  id: number;
  nome: string;
  estado: string;
  tempoEntrega: string;
};

const CYTIES_DELIVERY: City[] = [
  {
    id: 1,
    nome: "Viçosa",
    estado: "MG",
    tempoEntrega: "1-2 dias úteis",
  },
  {
    id: 2,
    nome: "Teixeiras",
    estado: "MG",
    tempoEntrega: "2-3 dias úteis",
  },
  {
    id: 3,
    nome: "Pedra do Anta",
    estado: "MG",
    tempoEntrega: "2-3 dias úteis",
  },
];

export const DeliveryZones = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 border-dashed text-deepMocha/50 hover:text-deepMocha"
        >
          <MapPin className="h-4 w-4 text-deepMocha" />
          <span className="text-deepMocha">Onde entregamos</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-emeraldTeal">
            Regiões de Entrega
          </DialogTitle>
          <DialogDescription className="text-deepMocha">
            Confira as cidades onde realizamos entregas dos nossos produtos
            rurais.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <h3 className="mb-3 font-medium text-deepMocha">
            Atualmente entregamos em {CYTIES_DELIVERY.length} localidades:
          </h3>

          <ScrollArea className="max-h-[300px] pr-4">
            <div className="space-y-4">
              {CYTIES_DELIVERY.map((city) => (
                <div
                  key={city.id}
                  className="flex items-start gap-3 rounded-lg border p-3 hover:bg-muted/50"
                >
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-deepMocha">
                      {city.nome} - {city.estado}
                    </h4>
                    <p className="text-sm text-deepMocha">
                      Tempo estimado de entrega: {city.tempoEntrega}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="mt-6 rounded-lg bg-muted p-3 text-sm">
            <p className="font-semibold text-deepMocha">
              Não encontrou sua cidade?
            </p>
            <p className="text-deepMocha">
              Entre em contato conosco para verificar a possibilidade de entrega
              em sua região.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            variant="default"
            className="bg-emeraldTeal hover:bg-opacity-80"
            onClick={() => setOpen(false)}
          >
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
