import { ReactElement, useRef } from 'react';
import ScratchCard from 'react-scratchcard-v2';
import { Container, SubjectText } from './GradeScratch.styled';

type Props = {
  subject: string;
};

const GradeScratch = (props: Props) => {
  const subjectRef = useRef<HTMLElement>(null);

  const onCompleteScratch = () => {
    console.log('cleaned');
    subjectRef.current && subjectRef.current.classList.add('subect-opacity');
  };

  return (
    <Container>
      <SubjectText ref={subjectRef}>{props.subject}</SubjectText>
      <ScratchCard
        height={60}
        width={320}
        image={'img/gray.png'}
        finishPercent={30}
        onComplete={onCompleteScratch}
      ></ScratchCard>
    </Container>
  );
};

export default GradeScratch;
