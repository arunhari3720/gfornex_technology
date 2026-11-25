import FAQ from "../components/FAQ";
import { PageIntro } from "../components/Shared";

export default function FAQPage() {
  return (
    <>
      <PageIntro
        eyebrow="Frequently asked questions"
        title="Answers before we get started."
        description="A few useful details about timelines, pricing, ownership and ongoing support."
      />
      <FAQ />
    </>
  );
}
