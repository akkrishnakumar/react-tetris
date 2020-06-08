import { Tetromino, IMino, NullMino } from "./Tetrominos/Tetrominos"
import { Tile } from "./Tile/Tile"

export default class Tetris {

    private _width: number = 10
    private _height: number = 20
    private _current: Tetromino = new NullMino()
    private _next: Tetromino = new IMino([0, 4])
    private _playGround: Array<Tile> = []
    private _score: number = 0

    constructor() {
        for (let row = 1; row <= this._height; row++) {
            for (let col = 1; col <= this._width; col++) {
                this._playGround.push(new Tile(row, col))
            }
        }
    }

    // Getters 
    get height(): number { return this._height }
    get width(): number { return this._width }
    get current(): Tetromino { return this._current }
    get next(): Tetromino { return this._next }
    get playGround(): Array<Tile> { return this._playGround }
    get score(): number { return this._score }

    progress = (): Tetris => {
        const tetris = new Tetris()
        tetris._playGround = [...this._playGround]
        tetris._current = this._current instanceof NullMino ? this._next : this._current
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
        .map(tile => this.occupy(tile, this._current))

    private occupy = (target: Tile, by: Tetromino): Tile =>
        by.contains(target.coordinate) ? target.toggle() : target

    private moveDown = () => {
        this.removeCurrent()
        this._current = this.updatedCurrent()
        this.build()
    }

    private updatedCurrent = (): Tetromino =>
        this.isCurrentAtBottom() ? new NullMino() : new IMino([this._current.body[0][0] + 1, this._current.body[0][1]])

    private removeCurrent = () => {
        if (!this.isCurrentAtBottom()) {
            this._playGround = this._playGround
                .map(tile => this._current.contains(tile.coordinate) && tile.isOccupied() ? tile.toggle() : tile)
        }
    }

    private isCurrentAtBottom = (): boolean => this._playGround
        .filter((tile, i, original) => this._current.contains(tile.coordinate) && !this.isBelowOccupied(tile, original))
        .map((tile, i, original) => this.isBelowOccupied(tile, original))
        .every(value => value === false)
    //return this._current.body.some(part => part[0] === this._height);

    private isBelowOccupied = (tile: Tile, array: Array<Tile>): boolean => {
        const below = array.find(t => t.coordinate[0] === tile.coordinate[0] + 1 && t.coordinate[1] === tile.coordinate[1])
        if (below) return below.isOccupied()
        else return true
    }

}