import { MainTitle } from "../";
import ContactForm from "./ContactForm";
import ContactWays from "./ContactWays";

const ContactME = () => {
  return (
    <section className="max-w-[800px] h-fit m-auto p-6">
      <div className="space-y-8">
        <MainTitle
          title="CONTACT"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info - Left Column */}
          <ContactWays />
          {/* Contact Form - Right Column */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactME;
