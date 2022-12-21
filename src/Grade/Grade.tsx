import { Space } from 'antd';
import { useState } from 'react';
import GradeScratch from '../GradeScratch/GradeScratch.component';
import { Spacer } from '../GradeScratch/GradeScratch.styled';
import SnowFall from '../SnowFall/SnowFall';
import { Header } from './Grade.component';
import { gradeServerToClient } from './Grade.dto';
import { GRADE_MOCK_UP } from './Grade.mockup';

const Grade = () => {
  const [openGrade, setOpenGrade] = useState<boolean>(false);

  const onSetterOpenGrade = (e: boolean) => {
    setOpenGrade(e);
    // setTimeout(() => setOpenGrade(false), 5000);
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
