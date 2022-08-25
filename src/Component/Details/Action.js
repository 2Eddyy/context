import React,{useState} from "react"
import { StateContext } from "../../Context/Context"


function Action() {
    const {dispatch}=useState(StateContext)
    dispatch(
        {
            type:"login",
            payload:{isAthentication:true}
        }
    )
    dispatch(
        {
            type:"qty-inc",
            payload:{qty:0}
        }
    )
    // console.log(dispatch);
 

  return (
    <div>Action</div>
  )
}

export default Action
export const addtocard = (payload) => {
    return {
        type: "addtocard",
        payload: payload,
    }

}
export const removeItem = (payload) => {
    return {
        type: "remove",
        payload: payload,
    }

}
