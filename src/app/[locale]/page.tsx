
import {setRequestLocale} from "next-intl/server";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Instructor from "@/components/home/Instructor";
import Mission from "@/components/home/Mission";
import Method from "@/components/home/Method";
import Lessons from "@/components/home/Lessons";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Contact from "@/components/home/Contact";

type Props = {
  params: Promise<{locale: string}>;
};

export default async function HomePage({params}: Props) {
  const {locale} = await params;

  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <TrustBar />    
      <Lessons />
      <Instructor />
      <Mission />
      <Method />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <Contact />

    </main>
  );
}
