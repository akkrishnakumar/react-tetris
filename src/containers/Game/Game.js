import React, { useState, useEffect } from 'react'
import Tetris from '../../Tetris/Tetris'

import classes from './Game.module.css'

const Game = (props) => {

    const tetris = new Tetris()
    tetris.start()
    console.log(tetris.field.map(tile => tile.isOccupied()))

    const tileDivFrom = (tile, i) =>
        <div
            key={i}
            className={[classes.Tile, tile.isOccupied() ? classes.Occupied : ''].join(' ')}>
        </div>

    return (
        <div data-testid="game" className={classes.Game}>
            <div data-testid="score">0</div>
            <div data-testid="board" className={classes.Board}>
                <div data-testid="field" className={classes.Field}>
                    {tetris.field.map(tileDivFrom)}
                </div>
                <div data-testid="next">next piece</div>
            </div>
        </div>
    )
}

export default Game