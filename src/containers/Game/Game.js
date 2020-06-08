import React, { useState, useEffect } from 'react'
import Tetris from '../../Tetris/Tetris'

import classes from './Game.module.css'

const Game = (props) => {

    const [tetris, setTetris] = useState(new Tetris())

    useEffect(() => {
        setTimeout(() => {
            //console.log('in setTimeout')
            //if (tetris.score() < 5) {
                // console.log('old tetris', tetris.playGround()
                //     .filter(tile => tile.isOccupied())
                //     .map(tile => tile.coordinate))
            //}
            setTetris(prevTetris => prevTetris.progress())
        }, 1000)
    }, [tetris])

    const tileDivFrom = (tile, i) =>
        <div
            key={i}
            className={[classes.Tile, tile.isOccupied() ? classes.Occupied : ''].join(' ')}>
            ({tile.coordinate[0]}, {tile.coordinate[1]})
        </div>

    return (
        <div data-testid="game" className={classes.Game}>
            <div data-testid="score">{tetris.score()}</div>
            <div data-testid="board" className={classes.Board}>
                <div data-testid="field" className={classes.Field}>
                    {tetris.playGround().map(tileDivFrom)}
                </div>
                <div data-testid="next">next piece</div>
            </div>
        </div>
    )
}

export default Game