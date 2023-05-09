//import ErrorBundary from './theme/components/errors/ErrorBundary';
import { Navbar } from './theme/components/Navbar/Navbar';
import {themeontecx , theme} from './theme/theme';
import {lazy , Suspense} from 'react';
import Typography from '@mui/material/Typography/Typography';
import { Routes, Route} from 'react-router-dom';

const Home = lazy(()=> import('./theme/components/noPage/Home'));
const Register = lazy (() => import('./theme/components/register/Register'));
const ErrorBundary = lazy(() => import('./theme/components/errors/ErrorBundary'));
const NoPage = lazy(()=> import('./theme/components/noPage/NoPage'));
//const Navbar = lazy(() => import('./theme/components/Navbar/Navbar'));

function App() {
  return (
    <>
    <themeontecx.Provider value={theme.white}>
      <ErrorBundary>
            <Navbar/>
      </ErrorBundary>
       <Suspense fallback={<Typography variant="h5" sx={{marginTop:'60px' , padding:'40px'}}>Loading...</Typography>}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<NoPage/>}></Route>
        </Routes>
       </Suspense>
    </themeontecx.Provider>
    </>
  );
}

export default App;
