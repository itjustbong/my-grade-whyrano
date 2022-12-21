import { Space } from 'antd';
import GradeScratch from '../GradeScratch/GradeScratch.component';
import { Spacer } from '../GradeScratch/GradeScratch.styled';
import { Header } from './Grade.component';
import { gradeServerToClient } from './Grade.dto';
import { GRADE_MOCK_UP } from './Grade.mockup';

const Grade = () => {
  return (
    <div>
      <Header />
      {gradeServerToClient(GRADE_MOCK_UP).map(info => (
        <>
          <GradeScratch subject={info.subject} grade={info.grade} />
          <Spacer />
        </>
      ))}
    </div>
  );
};

export default Grade;
