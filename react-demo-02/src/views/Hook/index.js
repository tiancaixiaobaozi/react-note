import React, { useState, useEffect } from "react";
import './index.css'
import Listener from "./Listener";

const Hook = ({ dependenciesId }) => {

  /**
   * useEffect: 函数副作用就是函数除了返回值外,还对外界环境造成的其它影响
   * @return {number}
   */

  // initialState 可使用函数生成初始值，避免组件每次渲染的时候initialState需要被重复计算
  const initialStateFoo = () => {
    return Number((Math.random() * 100).toFixed())
  }

  const [count, setCount] = useState(initialStateFoo())
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  // useEffect 如果不指定dependencies, setState后，组件循环更新会一直调用useEffect;
  // dependencies设为[], 表示组件销毁是才会执行
  // 设置dependencies后,当dependencies改变,effect才会执行
  useEffect(() => {
    // 请求
    fetch(`https://api.imjad.cn/qqfm/v1?type=album&id=39104`)
      .then(res => res.json())
      .then(res => {
        setList(res.data.albumInfoList)
      })
  }, [dependenciesId])

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='container'>
      <Listener />
      <p>hook demo</p>
      <h4>current count::: { count }</h4>
      <h4>current text::: { text }</h4>
      <button onClick={ () => setCount(count + 1) }>change count</button>
      <input onChange={ handleChangeText } />
      { list.map((li, index) => {
        return <h4 key={index}>{ '●' + li.album.desc }</h4>
      }) }
    </div>
  )
}

export default Hook
