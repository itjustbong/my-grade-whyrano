import { Space } from 'antd';
import { useRef, useState } from 'react';
import GradeScratch from '../GradeScratch/GradeScratch.component';
import { Spacer } from '../GradeScratch/GradeScratch.styled';
import SnowFall from '../SnowFall/SnowFall';
import { Header } from './Grade.component';
import { gradeServerToClient } from './Grade.dto';
import { GRADE_MOCK_UP } from './Grade.mockup';

const Grade = () => {
  const [openGrade, setOpenGrade] = useState<boolean>(false);
  const gradeTimeOut = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onSetterOpenGrade = (e: boolean) => {
    if (gradeTimeOut.current) {
      clearTimeout(gradeTimeOut.current);
      gradeTimeOut.current = null;
      setOpenGrade(false);
    }
    setTimeout(() => setOpenGrade(e), 0);
    gradeTimeOut.current = setTimeout(() => setOpenGrade(false), 6000);
  };

  return (
    <div>
      {openGrade && <SnowFall />}
      <Header />
      {gradeServerToClient(GRADE_MOCK_UP).map(info => (
        <>
          <GradeScratch
            subject={info.subject}
            grade={info.grade}
            onSetterOpenGrade={onSetterOpenGrade}
          />
          <Spacer />
        </>
      ))}
    </div>
  );
};

export default Grade;
