class LoginInfo {
  private studentId: string | undefined;
  private password: string | undefined;
  static instance: LoginInfo;

  constructor() {
    if (LoginInfo.instance) return LoginInfo.instance;
    LoginInfo.instance = this;
  }

  set(info: { id: string; pw: string }) {
    this.password = info.pw;
    this.studentId = info.id;
  }

  get() {
    return { studentId: this.studentId, password: this.password };
  }

  clear() {
    this.studentId = '';
    this.password = '';
  }
}

export { LoginInfo };
