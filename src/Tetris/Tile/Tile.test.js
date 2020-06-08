import { Tile } from './Tile';

describe('Tile', () => {

    test('should create a clone', () => {
        const expected = new Tile(1, 1)

        const actual = expected.copy()

        expect(expected).not.toStrictEqual(actual)
    });

    test('should toggle occupied', () => {
        const actual = new Tile().toggle()

        expect(actual.isOccupied()).toBeTruthy()
    });

})