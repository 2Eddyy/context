import React,{useContext} from 'react'
import { StateContext } from '../../Context/Context';
function Profile() {
    const state=useContext(StateContext)
    console.log(state);
  return (
    <div>Profile</div>
  )
}

export default Profile;