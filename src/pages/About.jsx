import { Fragment } from 'react';
import aboutImg1 from '../assets/images/About-1.png';
import aboutImg2 from '../assets/images/About-2.png';
import DesignComponent from '../components/DesignComponent';

const aboutDetails = [
  {
    img: aboutImg1,
    paras: [
      `Welcome to Quizzy, the premier destination for free coding quizzes! Our goal is to provide
    you with a fun and challenging way to test your coding knowledge and skills. We offer a
    wide range of quizzes covering various programming languages, algorithms, data structures,
    and more. `,

      `At Quizzy, we believe that learning to code should be accessible to
    everyone, which is why we offer all of our quizzes for free. Whether
    you're a beginner or an experienced programmer, our quizzes are
    designed to help you improve your skills and stay up-to-date with the
    latest trends in the coding domain.`
    ]
  },

  {
    img: aboutImg2,
    paras: [
      `We offer a variety of quizzes that are designed to challenge you at
    every level. From multiple-choice questions to coding challenges, our
    quizzes are designed to test your knowledge in a fun and engaging way.
    We also offer timed quizzes and leader-boards, so you can compete with
    other coders and see how you stack up against the best.`,

      `At Quizzy, we're passionate about coding and we believe that
    everyone should have the opportunity to learn how to code. We strive
    to create an inclusive and welcoming environment for everyone who
    visits our site. Thank you for choosing Quizzy as your go-to source
    for free coding quizzes!`,

      `Quizzy provide immediate feedback on users answers, helping them to
    learn and improve their knowledge. For that reason Quizzy can be used
    for educational purposes or just for entertainment. And most
    interestingly all of these features are accessible for free.`
    ]
  },

  {
    img: aboutImg1,
    paras: [
      `In addition to providing free coding quizzes, Quizzy also offers a
    wealth of resources for coders of all levels. Our website features
    helpful tutorials, tips and tricks, and guides to help you improve
    your coding skills. We believe that everyone should have access to
    quality coding education, regardless of their experience or financial
    situation.`,

      `Our team of expert coders and educators work tirelessly to create and
    curate high-quality quizzes and resources that are both challenging
    and informative. We strive to create a user-friendly experience that
    makes learning to code both fun and accessible. Our quizzes are
    updated regularly to reflect the latest trends and technologies in the
    coding domain, so you can be sure that you're learning the most
    up-to-date information.
    `
    ]
  },

  {
    img: aboutImg2,
    paras: [
      `We value our community of users and we're committed to creating
    an inclusive and welcoming environment for everyone. We encourage you
    to join our community, share your knowledge, and connect with other
    coders from around the world. Whether you're a beginner or an
    experienced coder, we're here to support you every step of the
    way.`,

      `Thank you for choosing Quizzy as your go-to source for free coding 
    quizzes and resources. We hope you enjoy learning and growing with us!
    `
    ]
  }
];

function About() {
  return (
    <div className='about-page mx-auto flex w-[85%] animate-reveal flex-col items-center justify-center'>
      <h1 className='page-heading'>About Quizzy!</h1>

      {aboutDetails.map((aboutDetail, index1) => (
        <Fragment key={index1}>
          <img
            src={aboutDetail.img}
            alt='About'
            className='mt-12 mb-8 w-[80%] max-w-md object-cover'
          />
          <div className='details frame-BG rounded-3xl px-6 py-0 text-lg font-medium text-darkText dark:text-dullWhite sm:text-xl'>
            {aboutDetail.paras.map((para, index2) => (
              <p className='my-6 indent-6' key={index2}>
                {para.toString()}
              </p>
            ))}
          </div>
        </Fragment>
      ))}

      {/* Horizontal Line */}
      <div className=' mt-16 inline-flex w-full items-center justify-center'>
        <hr className='my-8 h-1 w-64 rounded border-0 bg-darkViolet dark:bg-brightViolet' />
        <div className='absolute left-1/2 -translate-x-1/2 bg-lightBG px-4 dark:bg-darkBG'>
          <svg
            aria-hidden='true'
            className='h-5 w-5 text-gray-700 dark:text-gray-300'
            viewBox='0 0 24 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
              fill='currentColor'
            />
          </svg>
        </div>
      </div>
      <DesignComponent />
    </div>
  );
}

export default About;
