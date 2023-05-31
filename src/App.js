import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import ProductEdit from './pages/ProductEdit';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeaderExtra from './components/HeaderExtra';
import { AuthWrapper, useAuthContext } from './context/auth.context';


// import { ThemeProvider, createTheme } from '@mui/material';

const App = () => {
  const authContext = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <AuthWrapper>
          {/* <ThemeProvider> */}
          <ToastContainer theme="colored" />
          <Header />
          <Routes>
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route path='/product-list' Component={ProductList} />
            <Route path='/product-edit' Component={ProductEdit} />
            <Route path='/cart' Component={Cart} />
          </Routes>
          <Footer />
          {/* </ThemeProvider> */}
        </AuthWrapper>
      </BrowserRouter>
    </>
  );
};
export default App;