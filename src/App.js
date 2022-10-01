import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authApi, doctorsApi } from "./api";
import { login } from './redux/actions/doctors'
import './styles/index.scss'
import { setCookie } from "./utils";


// const withLoggedIn = (Component) => () => {
//   const dispatch = useDispatch()
//   const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn)

//   if(!isLoggedIn) return '404'
//   return <Component />
// }


function App() {
  const dispatch = useDispatch()
  const [state, setState] =  useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const [isLoad, setIsLoad] = useState(false)

  const onChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value
    })  
  }

  const onClick = () => {
    setIsLoad(true)
    console.log('state', state)
    authApi.login(state)
      .then((res) => {
        setCookie('token', res.data.token, 1)
        setUserData({ name: 'Kushbak' })
      })
      .finally(() => {
        setIsLoad(false)
      })
  }

  // if(!isLogedIn) {
  //   return navigation.push('/login')
  // }

  const logout = () => {
    localStorage.removeItem('token')
    setUserData(null)
  }
 
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token && userData) {
      setIsLoggedIn(true)
    } else if(token && !userData) {
      // axios.get()
      setUserData({ name: 'Kushbak' })
    } else {
      setIsLoggedIn(false)
    }
  }, [userData])

  return (
    <div className="App">
      {/* {
        isLoggedIn
        ? <>'ДОБРО ПОЖАЛОВАТЬ НА СТРАНИЦУ'
          <button onClick={logout}>
            Выйти
          </button>
        </>
        : <>
        <input placeholder="username" onChange={onChange} value={state.login} name='username' />
        <input placeholder="password" type='password' onChange={onChange} value={state.password} name='password' />
        <button onClick={onClick}>{ isLoad ? 'Вход...' : 'Логин'}</button>
      </>
      } */}
      
      {/* <Switch>
        {
          isLogedIn 
            ? (
              <RoutesForLoggedUser />
            )
            : (
              <Route />
            )
        }

      </Switch> */}
      {/* {
        doctorsReducer.doctors.map(item => (
          <p>{item.name}</p>
        ))
      } */}
    </div>
  );
}

export default App;
// export default withLoggedIn(App);
