import Image from "next/image";
import Nav from "./nav";
import Hero from "./hero";
import CTA_Sekce from "./cta_sekce";
import Co_te_ceka from "./co_te_ceka";
import Porovnani from "./porovnani";
import Nejoblibenejsi from "./nejoblibenejsi";
import Bike_card from "./BikeCard";
import FAQ from "./faq";
import Footer from "./footer";
import Footer2 from "./footer2";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <CTA_Sekce></CTA_Sekce>
      <Co_te_ceka></Co_te_ceka>
      <Porovnani></Porovnani>
      <Nejoblibenejsi></Nejoblibenejsi>
      <Bike_card></Bike_card>  
      <FAQ></FAQ>  
      <Footer></Footer>
      <Footer2></Footer2>
    </div>
  );
}
