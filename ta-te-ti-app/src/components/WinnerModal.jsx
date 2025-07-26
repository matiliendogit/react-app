import React from 'react'
import { Square } from './Square'

export function WinnerModal ({ winner, resetGame, onClose }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganador:'

  return (
    <section className='winner'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button onClick={resetGame}>
            Empezar de nuevo
          </button>
          <button onClick={onClose}>
            Volver al tablero
          </button>
        </footer>
    </section>
  )
}
