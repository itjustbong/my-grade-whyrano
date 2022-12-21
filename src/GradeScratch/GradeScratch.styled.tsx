import styled from '@emotion/styled';

const InnerText = styled.div`
  position: absolute;
  transform: translateY(-50%);
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 60px;
  width: 100px;
  text-align: center;
  transition: all;
`;

const SubjectText = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  z-index: 999;
  position: absolute;
  transform: translateY(-50%);
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 30px;
  width: 150px;
  text-align: center;
  transition: all;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const GradeText = styled(InnerText)`
  font-size: 2rem;
  color: black;
  font-weight: bold;
`;

const SubjectLabel = styled(InnerText)`
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
  text-align: left;
  width: 100%;
  padding-left: 0.25rem;
  top: 1rem;
  right: 1rem;
  margin: 0;
`;

const Container = styled.div`
  position: relative;
  width: 320px;
  margin: 0 auto;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Spacer = styled.div`
  height: 1rem;
`;

export { Spacer, SubjectText, Container, GradeText, SubjectLabel };
