import { objectArrayDiffBy } from '@src/util/arrayUtils';
describe('objectArrayDiffBy', () => {
  it('차집합 결과 검증', () => {
    // arrange
    type ObjectType1 = {
      id: number;
      name: string;
    };
    type ObjectType2 = {
      email: string;
      no: number;
    };

    const sourceArray: Array<ObjectType1> = [
      { id: 1, name: '홍길동' },
      { id: 2, name: '둘리' },
      { id: 3, name: '고길동' }
    ];
    const compareArray: Array<ObjectType2> = [
      { no: 1, email: 'gildong.hong@email.com' },
      { no: 4, email: 'robin.hood@email.com' }
    ];

    // act
    const result = objectArrayDiffBy(sourceArray, compareArray, 'id', 'no');

    // assert
    expect(result.length).toBe(1);
    expect(result[0]).toEqual(sourceArray[0]);
  });
});
