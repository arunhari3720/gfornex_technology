import AboutStory from "../components/sections/AboutStory";
import Process from "../components/sections/Process";
import { PageIntro } from "../components/Shared";

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="About Fornex"
        title="Technology built around your business."
        description="We bring strategy, design and engineering together to help businesses create useful digital experiences and grow with confidence."
      />
      <AboutStory />
      <Process />
    </>
  );
}
