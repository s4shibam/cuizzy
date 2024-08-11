const aboutDetails = [
  `Welcome to Cuizzy, the premier destination for free coding quizzes! Our goal is to provide you with a fun and challenging way to test your coding knowledge and skills. We offer a wide range of quizzes covering various programming languages, algorithms, data structures, and more. `,

  `At Cuizzy, we believe that learning to code should be accessible to everyone, which is why we offer all of our quizzes for free. Whether you're a beginner or an experienced programmer, our quizzes are designed to help you improve your skills and stay up-to-date with the latest trends in the coding domain.`,

  `We offer a variety of quizzes that are designed to challenge you at every level. From multiple-choice questions to coding challenges, our quizzes are designed to test your knowledge in a fun and engaging way. Cuizzy provide immediate feedback on users answers, helping them to learn and improve their knowledge. For that reason Cuizzy can be used for educational purposes or just for entertainment. And most interestingly all of these features are accessible for free. In addition to providing free coding quizzes, Cuizzy also offers a wealth of resources for coders of all levels. Our website features helpful tutorials, tips and tricks, and guides to help you improve your coding skills. We believe that everyone should have access to quality coding education, regardless of their experience or financial situation.`,

  `Our team of expert coders and educators work tirelessly to create and curate high-quality quizzes and resources that are both challenging and informative. Our quizzes are updated regularly to reflect the latest trends and technologies in the coding domain, so you can be sure that you're learning the most up-to-date information.`,

  `Thank you for choosing Cuizzy as your go-to source for free coding quizzes and resources. We hope you enjoy learning and growing with us!`
];

function About() {
  return (
    <div className="mx-auto flex w-[85%] animate-reveal flex-col items-center justify-center">
      <h1 className="page-heading">About Cuizzy</h1>

      <div className="card flex !w-full max-w-4xl flex-col gap-10 p-6 text-justify font-medium dark:text-red-300 sm:w-3/5 sm:text-xl">
        {aboutDetails.map((para, index2) => (
          <p
            key={index2}
            className="indent-10 first-letter:text-xl dark:text-gray-300 sm:first-letter:text-2xl"
          >
            {para}
          </p>
        ))}
      </div>

      <span className="mt-14 block font-semibold tracking-wide">
        Developed with 💚 by &nbsp;
        <a
          className="cursor-pointer hover:underline"
          href="https://www.s4shibam.com"
          rel="noreferrer"
          target="_blank"
        >
          Shibam Saha.
        </a>
      </span>

      <div className=" mt-8 inline-flex w-full items-center justify-center">
        <hr className="my-8 h-1 w-64 rounded border-0 bg-primary dark:bg-secondary" />
        <div className="absolute left-1/2 -translate-x-1/2 bg-light px-4 dark:bg-dark">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-700 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
