import {useRef, useEffect} from 'react'

const UseRef = () => {
    const usernameRef = useRef(null);

    const onFocusInput = () => {
        usernameRef.current.focus();
    }

    useEffect(() => {
        onFocusInput();
    },[])

  return (
    <div style={{marginTop:"50px"}}>
      <hr />
      <h1>UseRef bilan ishlash</h1>
      <h2 onClick={onFocusInput}>Enter your username</h2>
      <input type="text" name="username" ref={usernameRef} autoComplete='off' />
      <button onClick={onFocusInput}>Login</button>
    </div>
  )
}

export default UseRef
