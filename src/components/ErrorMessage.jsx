import React from 'react'
import '../styles/error.css'

const ErrorMessage = () => {
  return (
    <div className='errorContainer'>
        <h1>Hey, you must provide an id from 1 to 126!!</h1>
    </div>
  )
}

export default ErrorMessage