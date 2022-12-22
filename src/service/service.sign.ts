import { postSignIn } from './http/http';
import { toast } from 'react-toastify';

class LoginService {
  private studentId: string | undefined | null;
  private password: string | undefined | null;
  static instance: LoginService;

  constructor() {
    if (LoginService.instance) return LoginService.instance;
    LoginService.instance = this;
  }

  async fetchLogin(info: { id: string; pw: string }) {
    const gradeResult: -1 | 1 = await postSignIn({
      student_id: info.id,
      password: info.pw,
    });
    if (gradeResult === 1) {
      this.set({ id: info.id, pw: info.pw });
    } else {
      return toast.error('로그인 정보가 틀렸습니다.');
    }
    return gradeResult;
  }

  set(info: { id: string; pw: string }) {
    this.password = info.pw;
    this.studentId = info.id;
    localStorage.setItem('studentId', info.id);
    localStorage.setItem('password', info.pw);
  }

  get() {
    if (!this.password || !this.studentId) {
      this.studentId = localStorage.getItem('studentId');
      this.password = localStorage.getItem('password');
    }
    return { studentId: this.studentId || '', password: this.password || '' };
  }

  isUserLogged() {
    const userInfo = this.get();
    return !!userInfo.studentId && !!userInfo.password;
  }

  clear() {
    this.studentId = '';
    this.password = '';
    localStorage.removeItem('studentId');
    localStorage.removeItem('password');
  }
}

export { LoginService };
