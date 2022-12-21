import { Input as AntInput } from 'antd';
import styled from '@emotion/styled';

// [Temp] 테스트 중
const SomeComp = styled.div({
  color: 'hotpink',
  backgroundColor: 'darkblue',
});

function Input(): JSX.Element {
  return (
    <SomeComp>
      <AntInput />
    </SomeComp>
  );
}

export { Input };
