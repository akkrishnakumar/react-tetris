import { IMino } from './Tetrominos';

describe('Tetrominos', () => {

    test('vertical I should have coordinates with constant column and 4 vertical linear rows', () => {
        const expected = [[1, 4], [2, 4], [3, 4], [4, 4]]

        const vertical_I = newIMino()

        expect(vertical_I.body).toEqual(expected)
    });

    const newIMino = (initalPos = [1, 4]) => new IMino(initalPos)

});