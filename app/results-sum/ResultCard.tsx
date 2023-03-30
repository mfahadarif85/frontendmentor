const ResultCard = () => {
  return (
    <div className='grid grid-cols-2 rounded-xl shadow-2xl'>
      <div className='flex flex-col items-center justify-around rounded-xl bg-blue-600 text-white'>
        <p>Your Result</p>
        <div>
          <p>76</p>
          <p>of 100</p>
        </div>
        <h1>Great</h1>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div>
        <h1>Summary</h1>
        <div>
          <p>Reaction</p>
          <p>80 / 100</p>
        </div>
        <div>
          <p>Memory</p>
          <p>92 / 100</p>
        </div>
        <div>
          <p>Verbal</p>
          <p>61 / 100</p>
        </div>
        <div>
          <p>Visual</p>
          <p>72 / 100</p>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default ResultCard;
