import { Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GradeScratch from '../GradeScratch/GradeScratch.component';
import { Spacer } from '../GradeScratch/GradeScratch.styled';
import Loading from '../Loading/Loading';
import { GradeService } from '../service/service.grade';
import { LoginService } from '../service/service.sign';
import SnowFall from '../SnowFall/SnowFall';
import { BottomFlotingButton, Header } from './Grade.component';
import { gradeServerToClient } from './Grade.dto';
import { GRADE_MOCK_UP } from './Grade.mockup';
import { LogoutText } from './Grade.styled';
import { GradeInfoClientType } from './Grade.type';

const Grade = () => {
  const [openGrade, setOpenGrade] = useState<boolean>(false);
  const [gradeList, setGradeList] = useState<GradeInfoClientType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const gradeTimeOut = useRef<ReturnType<typeof setTimeout> | null>(null);
  const user = new LoginService();
  const grades = new GradeService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isUserLogged()) return navigate('/');
    (async () => {
      setLoading(true);
      const result = await grades.fetchData(user.get());
      if (result === -1) {
        alert('서버의 부하가 있습니다.\n잠시 후 다시 시도해주세요');
      } else {
        setGradeList(result);
      }
      setLoading(false);
    })();
  }, []);

  const onSetterOpenGrade = (e: boolean) => {
    if (gradeTimeOut.current) {
      clearTimeout(gradeTimeOut.current);
      gradeTimeOut.current = null;
      setOpenGrade(false);
    }
    setTimeout(() => setOpenGrade(e), 0);
    gradeTimeOut.current = setTimeout(() => setOpenGrade(false), 6000);
  };

  const onLogout = () => {
    user.clear();
    navigate('/');
  };

  return (
    <div>
      {loading && <Loading />}
      {openGrade && <SnowFall />}
      <Header />
      <BottomFlotingButton />
      {gradeList.map(info => (
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
      <Spacer />
    </div>
  );
};

export default Grade;
