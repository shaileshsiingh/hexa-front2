import React from 'react'
import Component1 from './components/Component1'
import Component2 from './components/Component2'

export default function page() {
  return (
    <div className='dark:text-white dark:bg-neutral-950'>
      <Component1 />
      <Component2 />
    </div>
  )
}
