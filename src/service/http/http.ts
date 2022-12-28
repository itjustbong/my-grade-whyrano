import http from './http.default';
import { GradePostType } from './http.type';

export const postSignIn = async (data: GradePostType) => {
  try {
    await http.post(`/login`, data);
    return 1;
  } catch (e) {
    return -1;
  }
};

export const postGetMyGrade = async (data: GradePostType) => {
  try {
    const result = await http.post(`/grade?year=2022&semester=2`, data);
    return result.data;
  } catch (e) {
    return -1;
  }
};
