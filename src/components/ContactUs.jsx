import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import contact from '../assets/images/Contact.png';
import showAlert from './AlertList';
import Form from './elements/Form';
import TextInput from './elements/TextInput';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    showAlert('success', 'mail-sent');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <div className='contact my-20 w-[85%] max-w-4xl'>
      <p className='mb-14 text-center text-4xl font-semibold uppercase lg:text-5xl'>
        Contact Us!
      </p>
      <Form
        className='frame-BG mx-auto grid items-center md:grid-cols-2'
        onSubmit={(e) => handleSubmit(e)}
      >
        <img
          className='mx-auto hidden drop-shadow-lg md:block'
          src={contact}
          alt='Contact'
        />

        <div className='grid grid-rows-4 gap-2'>
          <TextInput
            type='text'
            required
            placeholder='Enter Name'
            icon='person'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            type='email'
            required
            placeholder='Enter Email ID'
            icon='mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type='text'
            required
            placeholder='Enter Subject'
            icon='title'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <div className='text-input flex w-full items-center rounded-md border border-dullWhite bg-white p-2 outline-none dark:border-gray-600 dark:bg-darkText/60'>
            <textarea
              className='ml-1 w-full resize-none rounded-lg border-none bg-transparent font-medium tracking-wide text-darkText outline-none dark:text-lightText lg:text-xl'
              placeholder='Your Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <span className='material-icons-outlined mx-1 flex cursor-pointer items-center justify-center text-darkText dark:text-lightText md:text-3xl'>
              chat
            </span>
          </div>
          <button className='user-login fill-button mt-8' type='submit'>
            Send
          </button>
        </div>
      </Form>
    </div>
  );
}

export default ContactUs;
