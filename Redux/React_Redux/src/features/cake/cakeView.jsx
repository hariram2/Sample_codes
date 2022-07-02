import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'


export const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div className='cake__views'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-6 numcl">
            <h2>Number of cakes - { numOfCakes }</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
          </div>
          <div className="col-md-6">
            <img src="https://www.nicepng.com/png/detail/3-31770_clipart-cake-transparent-background-large-cake-clip-art.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
