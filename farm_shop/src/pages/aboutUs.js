import React, {useState} from 'react'

export default function AboutUs() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count+1)
  }


  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  )
}
