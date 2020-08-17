// 使用hook react版本要16.8以上
import React, { useState } from 'react'

export default function Example() {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(18)
  const [name, setName] = useState('张三')

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <div>-------------------</div>
      <p>年龄：{age}</p>
      <p>姓名：{name}</p>
    </div>
  )
}
