import { Banner } from "./Banner";
import { DeliveryInfo } from "./DeliveryInfo";
import { HowItWorks } from "./HowItWorks";
import ProductCategories from "./ProductCategories";
import ProductListing from "./ProductListing";

export const PageContent = () => {
  return (
    <>
      <Banner />
      <DeliveryInfo />
      <ProductCategories />
      <ProductListing />
      <HowItWorks />
    </>
  );
};
