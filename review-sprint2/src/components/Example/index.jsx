import React, { useState } from 'react'

const Example = () => {
    const [isFocus, setIsFocus] = useState(false);
  return (
    <div>
        <form className={isFocus ? 'visualX' : 'visualY'}>
            <input type="text" onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} />
        </form>
    </div>
  )
}

export default Example