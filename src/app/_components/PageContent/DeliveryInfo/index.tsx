import {
  AiOutlineClockCircle,
  AiOutlineCreditCard,
  AiOutlineTruck,
} from "react-icons/ai";

export const DeliveryInfo = () => {
  return (
    <div className="bg-warmBeige text-white text-sm py-7 px-4 md:px-24 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <AiOutlineClockCircle className="text-deepMocha" size={20} />
        <p className="text-deepMocha ml-2">
          Entregamos toda segunda-feira e quinta-feira
        </p>
      </div>

      <div className="flex items-center mb-4 md:mb-0">
        <AiOutlineTruck className="text-deepMocha" size={20} />
        <p className="text-deepMocha ml-2">Frete grátis a partir de R$ 70,00</p>
      </div>

      <div className="flex items-center">
        <AiOutlineCreditCard className="text-deepMocha" size={20} />
        <p className="text-deepMocha ml-2">Aceitamos cartões, PIX e dinheiro</p>
      </div>
    </div>
  );
};
