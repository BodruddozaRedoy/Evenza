import React from 'react'

export default function Button({text}) {
  return (
    <div className='py-3 px-5 rounded-md bg-primary cursor-pointer select-none'>{text}</div>
  )
}
