/**
 * 문자열의 모든 공백을 제거하는 함수
 * @param str - 문자열
 * @returns
 */
export const removeWhiteSpaceOfString = (str: string) => {
  return str.replace(/\s/g, '');
};

/**
 * 자릿수에 맞게
 * @param value - 유지할 숫자값
 * @param cipher - 자릿수
 * @param number - 채울 숫자값
 * @returns
 */
export const fillZero = (value: number, cipher: number, number: number) => {
  return value.toString().padStart(cipher, `${number}`);
};
