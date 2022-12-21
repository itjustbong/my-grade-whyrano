import { gradeServerToClient } from '../Grade/Grade.dto';
import { GradeInfoClientType } from '../Grade/Grade.type';
import { postGetMyGrade } from './http/http';

class GradeService {
  private gradeInfo: GradeInfoClientType[] | undefined;
  static instance: GradeService;

  constructor() {
    if (GradeService.instance) return GradeService.instance;
    GradeService.instance = this;
    this.gradeInfo = [];
  }

  set(grades: GradeInfoClientType[]) {
    console.log(grades);
    this.gradeInfo = grades || [];
  }

  get() {
    return this.gradeInfo;
  }

  async fetchData(user: { studentId: string; password: string }) {
    const gradeResult = await postGetMyGrade({
      student_id: user.studentId,
      password: user.password,
    });
    const result = gradeServerToClient(gradeResult);
    this.set(result);
    return result;
  }

  clear() {
    this.gradeInfo = [];
  }
}

export { GradeService };
