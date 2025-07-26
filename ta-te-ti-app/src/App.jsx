import './App.css'
import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { Turn } from './components/Turn'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'

function App() {
  const [board, setBoard] = useState(() => {
    const savedBoard = localStorage.getItem('board')
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const savedTurn = localStorage.getItem('turn')
    return savedTurn || TURNS.X
  })
  const [winner, setWinner] = useState(null)
  const [winnerCombo, setWinnerCombo] = useState(null)

  const updateBoard = (index) => {
    // Si el cuadro está ocupado o hay un ganador o empate, no hacer nada
    if (board[index] || winner !== null) return

    // Update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

    // Check for winner
    const result = checkWinner(newBoard)
    if (result) {
      // Primero actualizamos el estado del ganador y la combinación
      setWinner(result.winner)
      setWinnerCombo(result.combo)
      
      // Luego mostramos los efectos visuales
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      }, 100)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    } else {
      // Solo cambiamos el turno si no hay ganador ni empate
      setTurn(newTurn)
    }

     // Guardo la partida en localStorage
    localStorage.setItem('board', JSON.stringify(newBoard))
    localStorage.setItem('turn', newTurn)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    setWinnerCombo(null)

    // Limpiamos localStorage
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
  }

  const hideWinner = () => {
    const modal = document.querySelector('.winner')
    if (modal) modal.style.display = 'none'
  }

  const renderBoard = () => {
    return board.map((square, index) => (
      <Square
        key={index + '-square'}
        index={index}
        updateBoard={updateBoard}
        isWinner={winnerCombo?.includes(index)}
      >
        {square}
      </Square>
    ))
  }

  return (
    <main className='board'>
      <h1>Ta Te Ti</h1>
      <button onClick={resetGame}>
        Reiniciar juego
      </button>
      
      <section className='game'>
        {renderBoard()}
      </section>

      <Turn turn={turn} />

      <WinnerModal
        winner={winner}
        resetGame={resetGame}
        onClose={hideWinner}
      />
    </main>
  )
}

export default App
