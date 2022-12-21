import { Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GradeScratch from '../GradeScratch/GradeScratch.component';
import { Spacer } from '../GradeScratch/GradeScratch.styled';
import { LoginService } from '../service/service.sign';
import SnowFall from '../SnowFall/SnowFall';
import { BottomFlotingButton, Header } from './Grade.component';
import { gradeServerToClient } from './Grade.dto';
import { GRADE_MOCK_UP } from './Grade.mockup';
import { LogoutText } from './Grade.styled';

const Grade = () => {
  const [openGrade, setOpenGrade] = useState<boolean>(false);
  const gradeTimeOut = useRef<ReturnType<typeof setTimeout> | null>(null);
  const user = new LoginService();
  const navigate = useNavigate();

  const onSetterOpenGrade = (e: boolean) => {
    if (gradeTimeOut.current) {
      clearTimeout(gradeTimeOut.current);
      gradeTimeOut.current = null;
      setOpenGrade(false);
    }
    setTimeout(() => setOpenGrade(e), 0);
    gradeTimeOut.current = setTimeout(() => setOpenGrade(false), 6000);
  };

  useEffect(() => {
    if (!user.isUserLogged()) return navigate('/');
  }, []);

  const onLogout = () => {
    user.clear();
    navigate('/');
  };

  return (
    <div>
      {openGrade && <SnowFall />}
      <Header />
      <BottomFlotingButton />
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
      <LogoutText onClick={onLogout}>로그아웃</LogoutText>
    </div>
  );
};

export default Grade;
