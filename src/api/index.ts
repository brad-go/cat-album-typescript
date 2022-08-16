const { API_KEY } = process.env;
const API_END_POINT = "https://api.thecatapi.com/v1/images/search";

/**
 * 랜덤으로 고양이의 사진을 가져오는 함수
 * @param limit - optional. 고양이 사진의 개수를 지정하는 매개변수. 없다면 한 장의 사진을 가져옴
 */
export const getImageOfCats = async (limit?: number) => {
  if (!limit) return await request(API_END_POINT);

  let API_URL = API_END_POINT + `?limit=${limit}`;
  if (limit >= 10) API_URL += `&api_key=${API_KEY}`;

  return await request(API_URL);
};

/**
 * 고양이의 종 별로 이미지를 가져오는 함수
 * @param breeds - 종 검색을 필터링하는 데 사용할 수 있는 고유한 4자 ID
 * @param limit - optional. 가져올 고양이 사진의 수. 없다면 한 장
 */
export const getImageOfCatsByBreeds = async (
  breeds: string,
  limit?: number
) => {
  let API_URL = API_END_POINT + `?breed_ids=${breeds}`;
  if (!limit) return await request(API_URL);

  API_URL += `&limit=${limit}`;
  if (limit >= 10) API_URL += `&api_key=${API_KEY}`;

  return await request(API_URL);
};

/**
 * fetch API를 통해 요청을 보내는 함수
 * @param API_URL - 쿼리문
 * @returns
 */
export const request = async (API_URL: string) => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("서버에 문제가 있습니다!");
    return await res.json();
  } catch (e) {
    throw new Error(`무언가 잘못 되었습니다! ${(e as Error).message}`);
  }
};
