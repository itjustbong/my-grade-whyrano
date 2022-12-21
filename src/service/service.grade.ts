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
    this.gradeInfo = grades || [];
    this.sort();
  }

  get() {
    return this.gradeInfo;
  }

  sort() {
    this.gradeInfo = this.gradeInfo?.sort((a, b) =>
      b.grade.localeCompare(a.grade),
    );
  }

  async fetchData(user: { studentId: string; password: string }) {
    const gradeResult = await postGetMyGrade({
      student_id: user.studentId,
      password: user.password,
    });
    if (gradeResult === -1) return -1;
    const result = gradeServerToClient(gradeResult);
    this.set(result);
    return this.get() || [];
  }

  clear() {
    this.gradeInfo = [];
  }
}

export { GradeService };
