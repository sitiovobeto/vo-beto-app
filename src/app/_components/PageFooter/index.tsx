import { PaymentSocial } from "./PaymentSocial";

export const PageFooter = () => {
  return (
    <>
      <PaymentSocial />
      <footer className="flex h-16 text-deepMocha items-center justify-center bg-background border-t border-warmBeige">
        <p>© 2025 Sítio Vô Beto - Todos os direitos reservados.</p>
      </footer>
    </>
  );
};
