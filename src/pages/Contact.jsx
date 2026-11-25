import ContactForm from "../components/ContactForm";
import { PageIntro } from "../components/Shared";

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Start a conversation"
        title="Let’s discuss your project."
        description="Tell us what you are planning. We’ll get back to you with questions and suggested next steps."
      />
      <ContactForm />
    </>
  );
}
