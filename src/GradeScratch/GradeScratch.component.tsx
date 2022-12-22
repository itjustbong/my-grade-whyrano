import { useRef } from 'react';
import ScratchCard from 'react-scratchcard-v2';
import {
  Container,
  GradeText,
  SubjectLabel,
  SubjectText,
} from './GradeScratch.styled';

type Props = {
  subject: string;
  grade: string;
  onSetterOpenGrade: (e: boolean) => void;
};

const images = [
  '/img/scratch1.png',
  '/img/scratch2.png',
  '/img/scratch3.png',
  '/img/scratch4.png',
];

const GradeScratch = (props: Props) => {
  const subjectRef = useRef<HTMLElement>(null);

  const onCompleteScratch = () => {
    subjectRef.current && subjectRef.current.classList.add('subect-opacity');
    props.onSetterOpenGrade(true);
  };

  const randImage = () => images[Math.floor(Math.random() * 4)];

  if (props.grade === ' ') {
    return <div></div>;
  }
  return (
    <Container>
      <SubjectText ref={subjectRef}>{props.subject}</SubjectText>
      <GradeText>{props.grade}</GradeText>
      <SubjectLabel>{props.subject}</SubjectLabel>
      <ScratchCard
        height={120}
        width={320}
        image={randImage()}
        finishPercent={30}
        brushSize={10}
        onComplete={onCompleteScratch}
      ></ScratchCard>
    </Container>
  );
};

export default GradeScratch;
