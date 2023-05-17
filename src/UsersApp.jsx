import { LoginPage } from "./auth/pages/LoginPage";
import { useAuth } from "./auth/hook/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";


export const UsersApp = () => {
  const { login, handlerLogin, handlerLogout } = useAuth();

  return (
    <Routes>
      {login.isAuth ? (
        <Route
          path="/*"
          element={
            <UserRoutes // "/*" ruta padre que carga ruta hijo(users y carga UserPage) cuando estemos autenticados
              login={login}
              handlerLogout={handlerLogout}
            />
          }
        />
      ) : 
        <>
          <Route
            path="/login"
            element={<LoginPage handlerLogin={handlerLogin} />}
          />
          <Route path="/*" element={<Navigate to="/login" /> } />
        </>
      }
    </Routes>
  );
};
