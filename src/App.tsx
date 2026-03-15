import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ReservationProvider } from "./contexts/ReservationContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import Cars from "./pages/Cars";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Reservations from "./pages/Reservations";
import Profile from "./pages/Profile";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ReservationProvider>
          <FavoritesProvider>
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={
                  <MainLayout>
                    <Landing />
                  </MainLayout>
                }
              />
              <Route
                path="/cars"
                element={
                  <MainLayout>
                    <Cars />
                  </MainLayout>
                }
              />
              <Route
                path="/login"
                element={
                  <MainLayout>
                    <Login />
                  </MainLayout>
                }
              />
              <Route
                path="/register"
                element={
                  <MainLayout>
                    <Register />
                  </MainLayout>
                }
              />
              <Route
                path="/reset-password"
                element={
                  <MainLayout>
                    <ResetPassword />
                  </MainLayout>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                }
              />
              <Route
                path="/reservations"
                element={
                  <MainLayout>
                    <Reservations />
                  </MainLayout>
                }
              />
              <Route
                path="/profile"
                element={
                  <MainLayout>
                    <Profile />
                  </MainLayout>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </FavoritesProvider>
        </ReservationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
