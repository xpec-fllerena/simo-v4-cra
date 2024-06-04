import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AuthScreen from 'screens/LoginScreen/LoginScreen';
import { PublicRoute, PrivateRoute } from 'router/RouteType';
import PrivateContainer from 'containers/PrivateContainer';

const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>          
        <Route path="login/*" element={
          <PublicRoute>
            <Routes>
              <Route path="/*" element={<AuthScreen />} />
            </Routes>
          </PublicRoute>
          }
        />
        <Route path="/*" element={
          <PrivateRoute>
            <PrivateContainer />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRouter;