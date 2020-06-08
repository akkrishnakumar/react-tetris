import { Coordinate } from "../Coordinate"

export class Tile {
    private occupied: boolean = false
    readonly coordinate: Coordinate

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