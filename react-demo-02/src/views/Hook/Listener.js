import React, { useEffect } from "react";

const Listener = () => {
  /**
   * 指定了一个空数组作为这个副作用的dependencies，
   * 所以这个副作用只会在组件首次渲染时被执行一次，
   * 而它的removeEventListener函数只会在组件unmount时才被执行，
   * 这就避免了频繁注册页面监听函数从而影响页面的性能。
   */
  useEffect(() => {
    // 浏览器事件监听
    const handleWindowScroll = () => console.log('滚动了....' + new Date().getTime())
    window.addEventListener('scroll', handleWindowScroll)
    return () => {
      // 在下一次渲染前移除监听
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])

  return (
    <div style={{ border: 'solid 1px red' }}>I can listen to the window scroll event!</div>
  )
}

export default Listener
