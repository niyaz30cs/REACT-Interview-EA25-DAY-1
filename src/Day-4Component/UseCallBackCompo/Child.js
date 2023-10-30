import React, { memo } from 'react'

function Child({send}) {
  return (
    <div>
      <button onClick={send}>ChildBtn</button>
    </div>
  )
}

export default memo(Child);
