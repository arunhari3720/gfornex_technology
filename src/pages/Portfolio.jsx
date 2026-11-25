import PortfolioSamples from "../components/sections/PortfolioSamples";
import { PageIntro } from "../components/Shared";

export default function Portfolio() {
  return (
    <>
      <PageIntro
        eyebrow="Selected work"
        title="Digital experiences made to work."
        description="Explore sample layouts and project directions across websites, applications, booking systems and dashboards."
      />
      <PortfolioSamples />
    </>
  );
}
