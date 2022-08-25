import React, { useContext } from 'react'
import { StateContext } from '../../Context/Context'
import Students from '../../Students.json'
import { addtocard } from '../Details/Action'
function Contact() {
    const { state, dispatch } = useContext(StateContext)
    console.log(state);
    const add = (data) => {
      var result=  dispatch(addtocard(data));
      console.log(result);
     const x= Students.find((prodId)=>prodId.id ===data.id).qty++;
        
    
    //  if(x){
    //      crad.map((prodId)=>prodId.id==x.id).qty++
    //  }
    //  else{

    //  }
     console.log(x);
    }
    return (
        <div>Contact
            {Students.map((item, i) => {
                return (
                    <div key={i}>
                        <h1>{item.name}</h1>
                        <h2>{item.age}</h2>
                        <h3>{item.Address}</h3>
                        <button onClick={(() => add(item))}>Add</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Contact