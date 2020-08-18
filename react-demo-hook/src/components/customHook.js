import React, { useState, useEffect, useCallback } from "react";

function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return size
}

export default function CustomComponent() {
  const size = useWinSize()

  return (
    <div>
      <p>页面width: {size.width}</p>
      <p>页面height: {size.height}</p>
    </div>
  )
}
