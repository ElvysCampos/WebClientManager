import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoutes = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return <Outlet />;
};
