import React,{useContext} from 'react'
import { StateContext } from '../../Context/Context'
function Service() {
    const state=useContext(StateContext)
    console.log(state);
  return (
    <div>Service</div>
  )
}

export default Service