import ServicesSection from "../components/sections/Services";
import WhatWeBuild from "../components/sections/WhatWeBuild";
import { PageIntro } from "../components/Shared";

export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="Our services"
        title="Digital solutions from idea to launch."
        description="Explore the services and products we build to help your business work smarter, reach customers and scale."
      />
      <ServicesSection />
      <WhatWeBuild />
    </>
  );
}
