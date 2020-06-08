import Tetris from "./Tetris"
import { NullMino } from "./Tetrominos/Tetrominos"

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
        expect(tetris.playGround.length).toBe(200)
    });

    test('should have a vertical I tetromino in the 4th column', () => {
        const expected = [[1, 4], [2, 4], [3, 4], [4, 4]]
        const nextTetris = tetris.progress()

        const tetromino = occupiedTiles(nextTetris)

        expect(tetromino).toEqual(expected)

    });

    test('should stop tetromino when it hits the bottom, should then start with the next tetromino in line', () => {
        let newTetris = tetris.progress()
        const height = tetris.height
        do {
            newTetris = newTetris.progress()
        } while (!newTetris.current.body.some(coord => coord[0] === height))

        expect(newTetris.progress().current.body).toEqual(new NullMino().body)
    });

    test('should stack new tetromino on old one, when the old one is at the bottom', () => {
        const expected = [[13, 4], [14, 4], [15, 4], [16, 4], [17, 4], [18, 4], [19, 4], [20, 4]]
        const newTetris = desendTillNearestBottom(desendTillNearestBottom(tetris))

        const actual = occupiedTiles(newTetris)

        expect(actual).toEqual(expected)
    });

    const desendTillNearestBottom = (tetris) => {
        let newTetris = tetris.progress()
        do {
            newTetris = newTetris.progress()
        } while (!(newTetris.current instanceof NullMino))
        return newTetris
    }

    const occupiedTiles = (tetris) => tetris.playGround
        .filter(tile => tile.isOccupied())
        .map(tile => tile.coordinate)

})