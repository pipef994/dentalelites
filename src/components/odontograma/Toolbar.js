import React from 'react'
import clsx from 'clsx'

export default function Toolbar (props) {
  return (
    <div className='box-toolbar clear'>
      {props.options.map(item => {
        const name = item.name

        return (
          <button
            type='button'
            key={name}
            className={clsx('bt-toolbar', item.className)}
            onClick={() => props.handleAction(item.status)}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}
