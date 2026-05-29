import {
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';

import Login from './pages/Login';

import Register from './pages/Register';

import Profile from './pages/Profile';

import ProtectedRoute from './routes/ProtectedRoute';

import Foods from './pages/Foods';

import FoodDetails from './pages/FoodDetails';

import Cart from './pages/Cart';

import Checkout from './pages/Checkout';

import Orders from './pages/Orders';

import AdminRoute from './routes/AdminRoute';

import AdminDashboard from './pages/admin/AdminDashboard';

import AddFood from './pages/admin/AddFood';

import ManageOrders from './pages/admin/ManageOrders';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/foods"
          element={<Foods />}
        />

        <Route
          path="/foods/:id"
          element={<FoodDetails />}
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/add-food"
          element={
            <AdminRoute>
              <AddFood />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <ManageOrders />
            </AdminRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;