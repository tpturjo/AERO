import AdBanner, { AdItem } from "./AdBanner";
import siteConfig from "../config/index.json";

export default function AdsSection() {
  const ads = (siteConfig as any).ads as AdItem[] | undefined;
  if (!ads?.length) return null;

  return (
    <>
      {ads
        .filter((a) => a.active !== false)
        .map((ad, i) => (
          <AdBanner key={`ad-${i}`} {...ad} />
        ))}
    </>
  );
}
