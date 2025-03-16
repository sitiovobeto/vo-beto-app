import Image from "next/image";

export const Banner = () => {
  return (
    <div className="h-[225px] relative">
      <Image src="/images/banner.svg" alt="Logo" fill />
    </div>
  );
};
