import React, { useContext } from 'react'
import './App.css'
import Profile from './Component/Profile/Profile'
import Contact from './Component/Contact/Contact'
import Service from './Component/Service/Service'
import Details from './Component/Details/Details'
import Login from './Logoin/Login'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useReducer } from 'react'
import { StateContext } from './Context/Context'
import { intialState, stateReducer } from './Component/Details/Reducer'
function App() {

  const [state, dispatch] = useReducer(stateReducer, intialState)
  // console.log(state);

  const Logout = () => {
     window.location.reload();
    localStorage.setItem("userLogin", false)
    dispatch(
      {
        type: "logout",
        payload: { isAthentication: false }
      }
    );
    // console.log(23);
  }

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div>
        <BrowserRouter>
          {state?.isAthentication ? (

            <>
              <ul>
                <li>
                  <Link to='profile'>Profile</Link>
                </li>
                <li>
                  <Link to='contact'>Contact</Link>
                </li>
                <li>
                  <Link to='service'>Service</Link>
                </li>
                <li>
                  <Link to='details'>Details</Link>
                </li>
              </ul>
              <button onClick={() => Logout()}>Logout</button>
              <Routes>
                {/* <Route path='/' element={<Profile/>}></Route> */}
                <Route path='/' element={<Login />}></Route>
                <Route path='profile' element={<Profile />}></Route>
                <Route path='contact' element={<Contact />}></Route>
                <Route path='service' element={<Service />}></Route>
                <Route path='details' element={<Details />}></Route>

              </Routes>
              {console.log(state)}
            </>) :
            <Routes>
              <Route path='login' element={<Login />}></Route>
              <Route path='*' element={<Navigate to={'login'}></Navigate>}></Route>
            </Routes>
          }
        </BrowserRouter>
      </div>
    </StateContext.Provider>
  )
}

export default App