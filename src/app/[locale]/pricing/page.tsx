
import { setRequestLocale } from "next-intl/server";
import Pricing from "./Pricing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <Pricing />;
}
