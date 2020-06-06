import { Coordinate } from "./Coordinate"
import { Tetromino, IMino } from "./Tetrominos/Tetrominos"

export default class Tetris {

    private width: number = 10
    private height: number = 20

    field: Array<Tile> = []
    score: number = 0

    current: Tetromino = new IMino([1, 4])
    next = null

    constructor() {
        for (let row = 1; row <= this.height; row++) {
            for (let col = 1; col <= this.width; col++) {
                this.field.push(new Tile(row, col))
            }
        }
    }

    start = () => {
        this.field = this.field
            .map(tile => this.occupy(tile, this.current))
    }

    private occupy = (target: Tile, by: Tetromino): Tile =>
        by.body.some((coord: Coordinate) => coord[0] === target.coordinate[0] && coord[1] === target.coordinate[1]) ? target.toggle() : target

}

class Tile {
    private occupied: boolean = false
    coordinate: Coordinate

    constructor(x: number, y: number) {
        this.coordinate = [x, y]
    }

    isOccupied = (): Boolean => this.occupied

    copy = (): Tile => {
        const copy = new Tile(this.coordinate[0], this.coordinate[1])
        copy.occupied = this.occupied
        return copy
    }

    toggle = (): Tile => {
        const occupied = this.copy()
        occupied.occupied = !this.occupied
        return occupied
    }

}

