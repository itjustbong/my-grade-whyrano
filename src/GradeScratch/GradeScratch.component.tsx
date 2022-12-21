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

const GradeScratch = (props: Props) => {
  const subjectRef = useRef<HTMLElement>(null);

  const onCompleteScratch = () => {
    subjectRef.current && subjectRef.current.classList.add('subect-opacity');
    props.onSetterOpenGrade(true);
  };

  return (
    <Container>
      <SubjectText ref={subjectRef}>{props.subject}</SubjectText>
      <GradeText>{props.grade}</GradeText>
      <SubjectLabel>{props.subject}</SubjectLabel>
      <ScratchCard
        height={60}
        width={320}
        image={'img/gray.png'}
        finishPercent={30}
        brushSize={10}
        onComplete={onCompleteScratch}
      ></ScratchCard>
    </Container>
  );
};

export default GradeScratch;
