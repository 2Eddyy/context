import React, { useContext } from 'react'
import { StateContext } from '../../Context/Context'
import { removeItem } from './Action';
function Details() {
    const { state,dispatch } = useContext(StateContext);
    console.log(state.crad);
    const RemoveItem=(id)=>{
        const remove = state.crad.filter((item) => item.id !== id);
            //  console.log('id',id);
             dispatch(removeItem(remove));
    }
   
    return (
        <div>
            {state.crad.map((item, i) => {
                return (
                    <div key={i}>
                        <h1>{item.name}</h1>
                        <h2>{item.age}</h2>
                        <p>{item.Address}</p>
                        <h4>{item.qty}</h4>
                        <button onClick={()=>RemoveItem(item.id)}>removeItem</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Details