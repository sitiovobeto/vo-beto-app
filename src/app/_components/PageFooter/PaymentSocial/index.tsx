import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const PaymentSocial = () => {
  return (
    <div className="w-full py-6 bg-background">
      <div className="container flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-6 gap-6">
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-lg font-medium text-deepMocha">
            Formas de pagamento*
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {[
              { src: "/images/visa.svg", alt: "Visa" },
              { src: "/images/mastercard.svg", alt: "Mastercard" },
              { src: "/images/americanexpress.svg", alt: "American Express" },
              { src: "/images/pix.svg", alt: "Pix" },
              { src: "/images/elo.svg", alt: "Elo" },
              { src: "/images/money.svg", alt: "Dinheiro" },
            ].map(({ src, alt }) => (
              <div key={alt} className="rounded-md p-2">
                <Image
                  src={src}
                  alt={alt}
                  width={36}
                  height={24}
                  className="h-6 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-lg font-medium text-deepMocha">Siga-nos</h3>
          <div className="flex justify-center md:justify-start gap-2">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-muted/80 transition-colors rounded-md p-2"
            >
              <Instagram className="h-9 w-9 text-deepMocha" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
