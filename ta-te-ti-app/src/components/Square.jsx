import React from 'react'

export const Square = ({ children, isSelected, updateBoard, index, isWinner }) => {
  let className = `square ${isWinner ? 'is-winner' : ''}`
  if (isSelected) {
    className += ' is-selected'
  }

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}
