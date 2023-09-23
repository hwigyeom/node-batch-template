/**
 * 서로 형식이 다른 객체가 들어있는 두 배열에서 특정 키의 값으로 비교하여 양쪽 배열에 모두 존재하는 항목의 배열을 반환합니다.
 * @param sourceArray 비교 대상 기준이 되는 배열
 * @param compareArray 비교할 배열
 * @param sourceObjectKey 비교 대상 배열에 있는 객체에서 비교할 값이 있는 필드키
 * @param compareObjectKey 비교할 배열애 있는 객체에서 비교할 값이 있는 필드키
 */
export function objectArrayDiffBy<T1, T2>(
  sourceArray: Array<T1>,
  compareArray: Array<T2>,
  sourceObjectKey: keyof T1,
  compareObjectKey: keyof T2
): Array<T1> {
  return sourceArray.filter((sourceItem) => {
    return compareArray.some((compareItem) => {
      return <unknown>sourceItem[sourceObjectKey] === <unknown>compareItem[compareObjectKey];
    });
  });
}
