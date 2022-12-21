import { Empty, InputID, InputPW, ButtonLogIn } from './Login.styled';

/* [Todo] 다시 리펙토링 */
export function LoginBox(): JSX.Element {
  return (
    <>
      <form
        id="sign-in"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <InputID />
        <Empty height="1rem" />
        <InputPW />
      </form>
      <Empty height="2rem" />
      <ButtonLogIn />
    </>
  );
}
