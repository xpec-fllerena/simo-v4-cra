import { logInAction } from "store/actions/publicActions"
import { useContext } from 'react';
import PublicContext from 'store/context/PublicContext';

const AuthScreen = () => {
  const {dispatch} = useContext(PublicContext)

  return (
    <div>
      <h3>Log In</h3>
      <button onClick={() => dispatch(logInAction({name: "Dummy"}))}>Log In</button>
    </div>
  )
}

export default AuthScreen