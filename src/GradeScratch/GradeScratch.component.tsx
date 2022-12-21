import { useRef } from 'react';
import ScratchCard from 'react-scratchcard-v2';

const GradeScratch = () => {
  const ref = useRef<ScratchCard>(null);

  const onClickReset = () => {
    ref.current && ref.current.reset();
  };

  return (
    <div>
      <ScratchCard
        width={320}
        height={226}
        image={'gray'}
        finishPercent={80}
        onComplete={() => console.log('complete')}
      ></ScratchCard>
    </div>
  );
};

export default GradeScratch;
