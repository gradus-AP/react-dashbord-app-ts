import { useRoutes } from "react-router-dom";
import ErrorPage from "../pages/error";
import MainLayout from "../components/layout/MainLayout";
import Dashbord from "../pages/dashbord";
import CustomersPage from "../pages/customers";
import TransactionsPage from "../pages/transactions";

const routes = [
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      { path: "", element: <Dashbord />},
      { path: "customers", element: <CustomersPage />},
      { path: "transactions", element: <TransactionsPage />},
      { path: "*", element: <ErrorPage />}
    ],
  },
]

export const AppRoutes = () => {
  const element = useRoutes(routes);
  return <>{element}</>;
};