import { GradeInfoClientType, GradeInfoServerType } from './Grade.type';

const gradeServerToClient = (
  data: GradeInfoServerType[],
): GradeInfoClientType[] => {
  return data.map(obj => ({ subject: obj.과목명, grade: obj.등급 }));
};

export { gradeServerToClient };
