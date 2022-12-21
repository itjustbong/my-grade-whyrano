import styled from '@emotion/styled';

const InnerText = styled.div`
  position: absolute;
  transform: translateY(-50%);
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 30px;
  width: 100px;
  text-align: center;
  transition: all;
`;

const SubjectText = styled.span`
  font-weight: bold;
  z-index: 999;
  position: absolute;
  transform: translateY(-50%);
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 30px;
  width: 120px;
  text-align: center;
  transition: all;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const GradeText = styled(InnerText)`
  font-size: large;
  color: black;
  font-weight: bold;
`;

const SubjectLabel = styled(InnerText)`
  font-size: large;
  color: gray;
  font-weight: bold;
  text-align: left;
  width: 100%;
  padding-left: 0.25rem;
  top: 10px;
  right: 10px;
  margin: 0;
  font-size: 0.75rem;
`;

const Container = styled.div`
  position: relative;
  width: 320px;
  margin: 0 auto;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid gray;
`;

const Spacer = styled.div`
  height: 1rem;
`;

export { Spacer, SubjectText, Container, GradeText, SubjectLabel };
