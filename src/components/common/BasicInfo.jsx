import { CountUpAnimation } from '..';

const reasons = [
  {
    image: 'help',
    heading: 'Wide Range of Topics',
    description:
      'We provide a diverse selection of quizzes on a wide range of topics. Whatever computer science topics you are looking for, want to improve your general knowledge, or have a particular interest, you can find quizzes that cater to your needs.'
  },
  {
    image: 'smart_display',
    heading: 'Video Content',
    description:
      'We also provide video content to help you learn topics. As video is an effective way to enhance your learning experience and gain a deeper understanding of topics. Our videos are informative, and easy to follow, allowing you to learn at your own pace.'
  },
  {
    image: 'verified_user',
    heading: 'Verified Certificate',
    description:
      'We provide the option to obtain a verified certificate upon completion of a quiz. This certificate validates your knowledge and demonstrates your commitment to learning and self-improvement. This can be used in CVs, resumes to highlight your skills.'
  },
  {
    image: 'schedule',
    heading: 'Flexible Learning Paths',
    description:
      'Create your own learning schedule with our flexible learning paths. Whether you want to take a deep dive into a specific topic or prefer a broader learning approach, our platform allows you to customize your learning journey according to your pace and preferences.'
  }
];

function BasicInfo() {
  return (
    <>
      <div className="my-32 w-full overflow-x-hidden border-y-2 border-black bg-primary py-10 drop-shadow-lg dark:border-white">
        <div className="mx-auto grid w-[calc(100vw-25%)] grid-cols-2 gap-10 md:grid-cols-4">
          <p className="stat">
            <CountUpAnimation end={200} />
            <span className="block text-base md:text-lg">Questions</span>
          </p>
          <p className="stat">
            <CountUpAnimation end={100} />
            <span className="block text-base md:text-lg">Quizzes</span>
          </p>
          <p className="stat">
            <CountUpAnimation end={150} />
            <span className="block text-base md:text-lg">Lectures</span>
          </p>
          <p className="stat">
            <CountUpAnimation end={500} />
            <span className="block text-base md:text-lg">Learners</span>
          </p>
        </div>
      </div>
      <div className="mb-20 w-[85%]">
        <p className="mb-20 text-center text-4xl font-bold uppercase tracking-wider lg:text-5xl">
          Why Cuizzy?
        </p>
        <div className="grid grid-cols-1 place-content-center gap-x-10 gap-y-16 xl:grid-cols-2 2xl:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card mx-auto flex max-w-[500px] flex-col gap-y-4 border-0 border-b-4 !border-b-primary p-8 text-center transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 grid h-fit w-fit place-content-center rounded-full border-2 border-primary bg-secondary p-4 drop-shadow-md">
                <span className="material-symbols-outlined text-5xl text-white">
                  {reason.image}
                </span>
              </div>
              <p className="text-xl font-semibold">{reason.heading}</p>
              <p className="font-medium">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BasicInfo;
