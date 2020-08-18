import React, { useState, useMemo } from "react";

export default function Father() {
  const [girlA, setGirlA] = useState('小红')
  const [girlB, setGirlB] = useState('小美')

  return (
    <div>
      {/*
        类似componentShouldUpdate
        父组件发生变化，子组件也在随着变化
      */}
      <button onClick={() => {setGirlA(new Date().getTime() + '【小红】')}}>小红</button>
      <button onClick={() => {setGirlB(new Date().getTime() + '【小美】')}}>小美</button>
      <Child name={girlA}>{girlB}</Child>
    </div>
  )
}

function Child({ name, children }) {
  function changeA() {
    console.log(name + '被点击了。。。')
    return name + '：在子组件被点击了'
  }

  // 当name发生变化时，才执行changeA
  const action = useMemo(() => changeA(name), [name])

  return (
    <div>
      <div>{action}</div>
      <div>{children}</div>
    </div>
  )
}
