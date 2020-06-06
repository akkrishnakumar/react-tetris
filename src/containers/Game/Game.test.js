import React from 'react'
import { render, screen } from '@testing-library/react'
import Game from './Game';

describe("Tetris Game", () => {
    
    test('should load game', () => {

        render(<Game />)

        const score = byTestId('score').textContent
        const next = byTestId('next').textContent
        const field = [...byTestId('field').getElementsByTagName('div')].length
        
        expect(score).toBe('0')
        expect(next).toBe('next piece')
        expect(field).toBe(200)

    });


    const byTestId = (id) => screen.getByTestId(id)


}) 