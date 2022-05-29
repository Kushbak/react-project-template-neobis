import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginContainer from "./pages/Login/LoginContainer";
import { getDoctors, login } from "./redux/actions/doctors";
import './styles/index.scss'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDoctors())
    dispatch(login())
  }, [])


  // if(!isLogedIn) {
  //   return navigation.push('/login')
  // }
  return (
    <div className="App">
      {/* <Switch>
        {
          isLogedIn 
            ? (
              <Route />
              <Route />
              <Route />
              <Route />
            )
            : (
              <Route />
              <Route />
              <Route />
              <Route />
              <Route />
              <Route />
            )
        }

      </Switch> */}
      {/* {
        doctorsReducer.doctors.map(item => (
          <p>{item.name}</p>
        ))
      } */}
      <LoginContainer />
    </div>
  );
}

export default App;
