import { Coordinate } from "../Coordinate"

export interface Tetromino {
    readonly body: [Coordinate, Coordinate, Coordinate, Coordinate]
}

//I, O, T, J, L, S, Z
export class IMino implements Tetromino {
    readonly body: [Coordinate, Coordinate, Coordinate, Coordinate]

    constructor(root: Coordinate) {
        //console.log('new root', root)
        this.body = [
            root,
            [root[0] + 1, root[1]],
            [root[0] + 2, root[1]],
            [root[0] + 3, root[1]]
        ]
    }
}

export class NullMino implements Tetromino {
    body: [Coordinate, Coordinate, Coordinate, Coordinate] = [[0, 0], [0, 0], [0, 0], [0, 0]]
}

