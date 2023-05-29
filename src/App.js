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
import Footer from './components/Footer'

// import { ThemeProvider, createTheme } from '@mui/material';


function App() {
  return (
    <>
      {/* <ThemeProvider> */}
      <ToastContainer theme="colored"/>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route path='/product-list' Component={ProductList} />
            <Route path='/product-edit' Component={ProductEdit} />
            <Route path='/cart' Component={Cart} />
            <Route path='/' Component={Login} />
          </Routes>
        <Footer />
        </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
