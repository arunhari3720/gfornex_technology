import ProcessSection from "../components/sections/Process";
import { PageIntro } from "../components/Shared";

export default function Process() {
  return (
    <>
      <PageIntro
        eyebrow="How we work"
        title="A clear path from idea to launch."
        description="A collaborative process that keeps scope, decisions and progress visible at every stage."
      />
      <ProcessSection />
    </>
  );
}
