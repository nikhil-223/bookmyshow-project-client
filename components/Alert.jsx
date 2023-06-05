import React from 'react'

const Alert = ({alert}) => {
  return (
    alert.isAlert &&
    <div className={`${alert.type==='success'?'alert-success':'alert-error'}`}>{alert.message}</div>
  )
}

export default Alert