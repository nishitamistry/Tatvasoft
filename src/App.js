import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthWrapper } from './context/auth.context';
import { MainNavigation } from './components/MainNavigation';

// import { ThemeProvider, createTheme } from '@mui/material';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthWrapper>
          {/* <ThemeProvider> */}
          <ToastContainer theme="colored" />
          <Header />
          <main>
            <MainNavigation />
          </main>
          <Footer />
          {/* </ThemeProvider> */}
        </AuthWrapper>
      </BrowserRouter>
    </>
  );
};
export default App;