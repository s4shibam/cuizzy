import ContactUsForm from '../forms/ContactUsForm';

function ContactUs() {
  return (
    <div className="mb-28 mt-10 w-[85%] max-w-2xl">
      <p className="mb-14 text-center text-4xl font-bold uppercase tracking-wider lg:text-5xl">
        Contact Us
      </p>
      <ContactUsForm />
    </div>
  );
}

export default ContactUs;
