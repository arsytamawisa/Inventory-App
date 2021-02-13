import React, { useState, useEffect } from 'react'

function Container(props) {
  const [errorState, setErrorState] = useState(null)

  useEffect(() => {
    if (props.error) {
      setErrorState(props.error)
    }
  }, [props.error])

  const errorSubmit = () => {
    setErrorState(null)
  }

  return (
    <div className="container mt-5">
      {errorState && <div> <button onClick={errorSubmit}> {errorState} </button></div>}
      {props.children}
    </div>
  )
}

export default Container
