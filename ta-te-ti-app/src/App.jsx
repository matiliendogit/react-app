import './App.css'
import React, { useState } from 'react'

const TURNOS = {
  X: 'X',
  O: 'O',
}

const Square = ({ children, isSelected, updateBoard, index}) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNOS.X)
  const [winner, setWinner] = useState(null)

  const WINNER_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const checkWinner = (newBoard) => {
    for (const combination of WINNER_COMBINATIONS) {
      const [a, b, c] = combination
      if (newBoard[a] 
        && newBoard[a] === newBoard[b] 
        && newBoard[a] === newBoard[c]) {
          return newBoard[a]
      }
    }
    return null
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every(square => square !== null)
  }

  const updateBoard = (index) => {

    // If the square is already filled, do nothing
    if (board[index] || winner) return

    // Update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Check for winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false) // It's a draw
    }

    // Change turn
    const newTurn = turn === TURNOS.X ? TURNOS.O : TURNOS.X
    setTurn(newTurn)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNOS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Ta Te Ti</h1>
      <button onClick={resetGame}>
        Reiniciar juego
      </button>
      <section className='game'>
        {
          board.map((square, index) => 
          {
            return (
              <Square
                key={index + '-square'}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )   
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNOS.X}>  
          {TURNOS.X} 
        </Square>
         <Square isSelected={turn === TURNOS.O}>  
          {TURNOS.O} 
        </Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    : 'Ganador:'
                }
              </h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>
                  Empezar de nuevo
                </button>
                <button onClick={() => {
                  const modal = document.querySelector('.winner')
                  modal.style.display = 'none'
                     
                  }}>
                  Volver al tablero
                </button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
