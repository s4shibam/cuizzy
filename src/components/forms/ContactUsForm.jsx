import { send as sendEmail } from '@emailjs/browser';
import { useState } from 'react';

import { useAlert } from '../../hooks';
import Form from '../atoms/Form';
import TextInput from '../atoms/TextInput';

function ContactUsForm() {
  const [senderDetails, setSenderDetails] = useState({});
  const [loading, setLoading] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await sendEmail(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          subject: senderDetails?.subject,
          userName: senderDetails?.name,
          message: senderDetails?.message,
          userEmail: senderDetails?.email
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setLoading(false);
      useAlert('success', 'mail-sent');
    } catch (error) {
      console.error(error);
      useAlert('error', error?.text || 'unknown-error');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSenderDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Form className="card mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <TextInput
          required
          icon="account_circle"
          placeholder="Enter Name"
          type="text"
          value={senderDetails?.name}
          onChange={handleInputChange}
        />
        <TextInput
          required
          icon="mark_as_unread"
          placeholder="Enter Email ID"
          type="email"
          value={senderDetails?.email}
          onChange={handleInputChange}
        />
        <TextInput
          required
          icon="subject"
          placeholder="Enter Subject"
          type="text"
          value={senderDetails?.subject}
          onChange={handleInputChange}
        />
        <div className="flex w-full items-center rounded-md border border-black/30 bg-white p-2 outline-none dark:border-white/30 dark:bg-black/50">
          <textarea
            required
            className="ml-1 h-[100px] w-full resize-none rounded-lg border-none bg-transparent font-medium tracking-wide text-black outline-none dark:text-white lg:text-xl"
            placeholder="Your Message"
            value={senderDetails?.message}
            onChange={handleInputChange}
          />
          <span className="material-symbols-outlined mx-1 mb-auto mt-1 flex cursor-pointer items-center justify-center text-black dark:text-white md:text-3xl">
            comment
          </span>
        </div>
        <div className="flex gap-5">
          <button
            className="fill-button mt-1 w-full bg-red-500 hover:bg-red-400"
            disabled={loading}
            onClick={() => setSenderDetails({})}
          >
            Cancel
          </button>
          <button
            className="fill-button mt-1 w-full disabled:opacity-70"
            disabled={loading}
            type="submit"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </Form>
  );
}

export default ContactUsForm;
