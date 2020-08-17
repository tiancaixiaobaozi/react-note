import React, { useState, createContext, useContext } from 'react'

const CountContext = createContext()

export default function Example() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

function Counter() {
  let count = useContext(CountContext)
  return (
    <h2>子组件的值：{count}</h2>
  )
}
