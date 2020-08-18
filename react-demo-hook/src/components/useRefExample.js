import React, { useState, useRef, useEffect } from "react";

/**
 * 1.获取dom
 * 2.保存变量
 */


export default function Form() {
  const inputEl = useRef(null)
  const [text, setText] = useState('hello')
  const textRef = useRef()
  useEffect(() => {
    textRef.current = text
    console.log('textRef.current:::', textRef.current)
  })

  const clickButton = () => {
    inputEl.current.value = "hello world"
    console.log(inputEl)
  }
  return (
    <>
      <input ref={inputEl} type="text"/>
      <button onClick={clickButton}>在input显示文字</button>
      <br/>
      <br/>
      <input value={text} type="text" onChange={e => {setText(e.target.value)}} />
    </>
  )
}
