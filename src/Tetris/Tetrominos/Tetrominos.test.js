import { IMino } from './Tetrominos';

describe('Tetrominos', () => {

    test('vertical I should have coordinates with constant column and 4 vertical linear rows', () => {
        const expected = [[1, 4], [2, 4], [3, 4], [4, 4]]

        const vertical_I = new IMino([1, 4])

        expect(vertical_I.body).toEqual(expected)
    });

});