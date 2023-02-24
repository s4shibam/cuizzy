const reasons = [
  {
    image: 'quiz',
    heading: 'Wide Range of Topics',
    description:
      'We provide a diverse selection of quizzes on a wide range of topics. Whatever computer science topics you are looking for, want to improve your general knowledge, or have a particular interest, you can find quizzes that cater to your needs.'
  },
  {
    image: 'laptop_mac',
    heading: 'Video Content',
    description:
      'We also provide video content to help you learn topics. As video is an effective way to enhance your learning experience and gain a deeper understanding of topics. Our videos are informative, and easy to follow, allowing you to learn at your own pace.'
  },
  {
    image: 'badge',
    heading: 'Verified Certificate',
    description:
      'We provide the option to obtain a verified certificate upon completion of a quiz. This certificate validates your knowledge and demonstrates your commitment to learning and self-improvement. This can be used in CVs, resumes to highlight your skills.'
  }
];
function BasicInfo() {
  return (
    <>
      <div className='stats my-20 w-full overflow-x-hidden bg-darkViolet py-10'>
        <div className='mx-auto grid w-[calc(100vw-25%)] grid-cols-2 gap-10 md:grid-cols-4'>
          <p className='stat'>
            200+
            <p className='text-base md:text-lg'>Questions</p>
          </p>
          <p className='stat'>
            100+ <p className='text-base md:text-lg'>Quizzes</p>
          </p>
          <p className='stat'>
            150+ <p className='text-base md:text-lg'>Lectures</p>
          </p>
          <p className='stat'>
            400+ <p className='text-base md:text-lg'>Learners</p>
          </p>
        </div>
      </div>
      <div className='reason mb-20 w-[85%]'>
        <p className='mb-14 text-center text-4xl font-semibold uppercase lg:text-5xl'>
          Why Quizzy?
        </p>
        <div className='grid grid-cols-1 place-content-center gap-x-10 gap-y-14 lg:grid-cols-3'>
          {reasons.map((reason) => (
            <div className='frame-BG mx-auto flex max-w-sm flex-col content-center gap-y-4 border-b-4 border-b-brightViolet p-8 text-center'>
              <div className='icon-wrapper mx-auto grid h-fit w-fit place-content-center rounded-full bg-brightViolet/80 p-4'>
                <span className='icon material-icons-outlined text-5xl text-lightText'>
                  {reason.image}
                </span>
              </div>
              <p className='text-xl font-semibold'>{reason.heading}</p>
              <p className='font-medium'>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BasicInfo;
