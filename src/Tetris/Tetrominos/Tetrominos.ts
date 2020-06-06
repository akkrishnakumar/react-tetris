import { Coordinate } from "../Coordinate"

export interface Tetromino {
    body: [Coordinate, Coordinate, Coordinate, Coordinate]
}

//I, O, T, J, L, S, Z
export class IMino implements Tetromino {
    body: [Coordinate, Coordinate, Coordinate, Coordinate]

    constructor(root: Coordinate) {
        this.body = [
            root,
            [root[0] + 1, root[1]],
            [root[0] + 2, root[1]],
            [root[0] + 3, root[1]]
        ]
    }
}

