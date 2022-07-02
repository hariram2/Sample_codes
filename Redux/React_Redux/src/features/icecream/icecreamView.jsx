import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
    const [value, setValue] = React.useState(1)
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
  return (

    <div className='ice__views'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56DoplCbSgabn3hRnEK19lasqUxayNwMkVg&usqp=CAU" />
          </div>
          <div className="col-md-6 numcl">
          <h2>Number of Ice creams - { numOfIcecreams }</h2>
          <button  onClick={() => dispatch(ordered())}>Order Ice cream</button>
          <input type='number' value={value} onChange={e => setValue(parseInt(e.target.value))} />
          <button  onClick={() => dispatch(restocked(value))}>Restock Ice creams</button>
          </div>
         
        </div>
      </div>
    </div>

    // <div>
    //     <h2>Number of Ice creams - { numOfIcecreams }</h2>
    //     <button  onClick={() => dispatch(ordered())}>Order Ice cream</button>
    //     <input type='number' value={value} onChange={e => setValue(parseInt(e.target.value))} />
    //     <button  onClick={() => dispatch(restocked(value))}>Restock Ice creams</button>
    // </div> 
  )
}
