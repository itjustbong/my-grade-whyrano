import styled from '@emotion/styled';

const SubjectText = styled.span`
  position: absolute;
  top: 30px;
  width: 100px;
  transform: translateY(-50%);
  right: 0;
  left: 0;
  margin: 0 auto;
  color: black;
  text-align: center;
  font-weight: bold;
  z-index: 999;
  transition: all;
`;

const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export { SubjectText, Container };
