import React from 'react'
import Search from './Search'

const Header = (props) => {
  
  return (
    <div>
    <div className='grid'>
        <div>
          <p>notifications</p>
          </div>

        <div><p>cart</p></div>

        <div><p>vilcorn</p></div>

        <div><p>mail</p></div>

        <div><p>favourates</p></div>
    </div>
    <Search />
    </div>
  )
}

export default Header
