import { Tetromino, IMino, NullMino } from "./Tetrominos/Tetrominos"
import { Tile } from "./Tile/Tile"

export default class Tetris {

    private width: number = 10
    private height: number = 20
    private current: Tetromino = new NullMino()
    private next = new IMino([0, 4])

    private _playGround: Array<Tile> = []
    private _score: number = 0

    constructor() {
        for (let row = 1; row <= this.height; row++) {
            for (let col = 1; col <= this.width; col++) {
                this._playGround.push(new Tile(row, col))
            }
        }
    }

    // Getters 
    playGround = (): Array<Tile> => this._playGround
    score = (): number => this._score

    progress = (): Tetris => {
        const tetris = new Tetris()
        tetris._playGround = [...this._playGround]
        //tetris._score = this._score + 1
        tetris.current = this.current instanceof NullMino ? this.next : this.current
        // console.log('tetromino: ', tetris._playGround
        //     .filter(it => it.isOccupied())
        //     .map(it => it.coordinate))
        tetris.moveCurrent('DOWN')
        return tetris
    }

    moveCurrent = (direction: string = 'DOWN') => {
        switch (direction) {
            case 'DOWN':
                this.moveDown()
                break;
            default:
                break;
        }
    }

    private build = () => this._playGround = this._playGround
        .map(tile => this.occupy(tile, this.current))

    private occupy = (target: Tile, by: Tetromino): Tile =>
        this.contains(target, by) ? target.toggle() : target

    private moveDown = () => {
        this.removeCurrent()
        this.current = new IMino([this.current.body[0][0] + 1, this.current.body[0][1]])
        this.build()
    }

    private removeCurrent = () => this._playGround = this._playGround
        .map(tile => this.contains(tile, this.current) && tile.isOccupied() ? tile.toggle() : tile)

    private contains = (tile: Tile, by: Tetromino): boolean =>
        by.body.some(coord => coord[0] === tile.coordinate[0] && coord[1] === tile.coordinate[1])

}