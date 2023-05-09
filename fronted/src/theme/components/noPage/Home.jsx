import {themeontecx , theme} from '../../theme'
import { Main } from '../main/Main.jsx';
import { Fragment } from 'react';
import {Navbar} from '../Navbar/Navbar';
import { Form } from '../Form/Form';
import { Benefit } from '../Benefits/Benefit';
import { Invest } from '../investissor/Invest';
import { Testimonial } from '../Testimonial/Testimonial';
import { Footer } from '../Footer/Footer';
import ErroBundary from '../errors/ErrorBundary';
function Home() {
  return (
 
      <themeontecx.Provider value={theme.white}>
          <Fragment>
          <ErroBundary>
            <Main/>
          </ErroBundary>
          <ErroBundary>
            <Form/>
          </ErroBundary>
          <ErroBundary>
            <Benefit/>
          </ErroBundary>
          <ErroBundary>
            <Invest/>
          </ErroBundary>
           <ErroBundary>
              <Testimonial/>
           </ErroBundary>
           <ErroBundary>
              <Footer/>
            </ErroBundary>
          </Fragment>
    </themeontecx.Provider>
  
  );
}

export default Home;
