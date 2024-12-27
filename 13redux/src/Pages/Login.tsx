import { useState } from "react"
import { login, logout } from "../store"
import { useDispatch, useSelector } from "react-redux"

function Login() {
  const [ newUserName, setNewUserName] = useState<string>("");

  const dispatch = useDispatch();

  const username = useSelector((state : any) => state.user.value.username);
  return (
    <div>
      <h4>Login-Page : for {username}</h4>
      <input type="text" onChange={ (e : React.ChangeEvent<HTMLInputElement>) => {
        setNewUserName(e.target.value);
      }}/>
      <button onClick={() => dispatch(login({ username: newUserName}))}>Log-IN</button>
      <button onClick={() => dispatch(logout())}>Log-Out</button>
    </div>
  )
}

export default Login