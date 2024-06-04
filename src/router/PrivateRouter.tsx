import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundScreen from "pages/NotFoundScreen";

import Layout from "components/Core/Layout";

import listRoutes from "./listRoutes";

const PrivateRouter = () => {
  return (
    <Layout>
      <Routes>
        {listRoutes.map((route: any, i: number) => {
          const Element = route?.element;
          return <Route key={i} path={route?.path} element={<Element />} />;
        })}
        <Route path="404" element={<NotFoundScreen />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Layout>
  );
};

export default PrivateRouter;
