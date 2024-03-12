import React from 'react'
import '../styles/error.css'

const ErrorMessage = () => {
  return (
    <div className='errorContainer'>
        <h2>Hey, you must provide an id from 1 to 126!!</h2>
    </div>
  )
}

export default ErrorMessage