import { HashRouter, Routes, Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import Registro from '../pages/Registro'
import InicioSesion from '../pages/InicioSesion'
import { SnackbarProvider } from 'notistack'
import ChangePassword from '../pages/ChangePassword'
import { useAuth } from '../auth/useAuth'
import SolicitarCambioContrasena from '../pages/SolicitarCambioContrasena'
import EditarPerfil from '../pages/EditarPerfil'
import VerSucursales from '../pages/sucursales'
import VerDoctores from '../pages/doctores'
import MisCitasMedicas from '../pages/citas'
import ReservarNuevaCita from '../pages/reservarCIta'
import PerfilDoctor from '../pages/PerfilDoctor'

const routesPublic = [
  {
    path: '*',
    element: <InicioSesion />,
  },
  {
    path: '/registrate',
    element: <Registro />,
  },
  {
    path: '/solicitarCambioContrasena',
    element: <SolicitarCambioContrasena />,
  },
]

const routesPrivate = [
  {
    path: '/*',
    element: <ReservarNuevaCita />,
  },
  {
    path: '/misCitasMedicas',
    element: <MisCitasMedicas />,
  },
  {
    path: '/verDoctores',
    element: <VerDoctores />,
  },
  {
    path: '/verSucursales',
    element: <VerSucursales />,
  },
  {
    path: '/editarPerfil',
    element: <EditarPerfil />,
  },
  {
    path: '/perfilDoctor/:id',
    element: <PerfilDoctor />,
  },
  {
    path: '/cambiarContrasena',
    element: <ChangePassword />,
  },
]

const AppRoutes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <SnackbarProvider maxSnack={3}>
      <HashRouter>
        <Routes>
          {isAuthenticated
            ? routesPrivate.map((route) => (
                <Route path={route.path} element={route.element} key={uuid()} />
              ))
            : routesPublic.map((route) => (
                <Route path={route.path} element={route.element} key={uuid()} />
              ))}
        </Routes>
      </HashRouter>
    </SnackbarProvider>
  )
}

export default AppRoutes
