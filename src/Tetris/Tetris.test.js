import Tetris from "./Tetris"

describe("Tetris", () => {

    let tetris = null

    beforeEach(() => {
        tetris = new Tetris()
    })

    afterEach(() => {
        tetris = null
    })

    test('should have inital score as 0', () => {
        expect(tetris.score).toBe(0)
    });

    test('should have 10x20 playing field', () => {
        expect(tetris.field.length).toBe(200)
    });

    test('should have a vertical I tetromino in the 4th column', () => {
        const expected = [[1, 4], [2, 4], [3, 4], [4, 4]]
        tetris.start()
        
        const tetromino = tetris.field
        .filter(tile => tile.occupied)
        .map(tile => tile.coordinate)
        
        expect(tetromino).toEqual(expected)

    });

})