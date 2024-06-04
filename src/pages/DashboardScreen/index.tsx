import { useContext } from 'react';
import PublicContext from 'store/context/PublicContext';
import { logOutAction } from 'store/actions/publicActions';

const DashboardScreen = () => {
  const { user, dispatch } = useContext(PublicContext)

  return (
    <div>
      <h3>Hello, {user?.name}</h3>
      <button onClick={() => dispatch(logOutAction())}>Log Out</button>
    </div>
  )
}
 export default DashboardScreen