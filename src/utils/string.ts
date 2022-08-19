/**
 * 문자열의 모든 공백을 제거하는 함수
 * @param str - 문자열
 * @returns
 */
export const removeWhiteSpaceOfString = (str: string) => {
  return str.replace(/\s/g, '');
};
