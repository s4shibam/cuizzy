function DesignComponent() {
  return (
    <div>
      <div
        className='fixed top-0 right-0 -z-40 h-[100px] w-[200px] bg-gradient-to-b from-primary to-transparent blur-[200px] 2xl:h-[200px] 2xl:w-[400px]'
        alt='bg-gradient'
      />
      <div className='fixed bottom-[30%] left-0 -z-40 h-[150px] w-[100px] bg-gradient-to-r from-primary to-transparent blur-[150px] 2xl:h-[300px] 2xl:w-[150px]' />
    </div>
  );
}

export default DesignComponent;
