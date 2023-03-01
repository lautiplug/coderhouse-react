import { useState } from "react"

export const ButtonsCard = () => {

  const [value, setValue] = useState(1)

  const decrement = () => {
    if(value < 2) return;
    setValue(value - 1)
  }

  const increment = () => {
    setValue(value + 1)
  }

  return (
    <>
      <button onClick={decrement} className="btn-function"> -1 </button>
      <span> {value} </span>
      <button onClick={increment} className="btn-function"> +1 </button>
    </>
  )
}
