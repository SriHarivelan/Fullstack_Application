
import React,{Suspense} from 'react';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';


const LoginPage= React.lazy(()=> import('./pages/LoginPage'));
const SignUp= React.lazy(()=> import('./pages/SignUp'));
const NavBar= React.lazy(()=> import('./pages/Home'));
const Profile = React.lazy(()=> import('./pages/Profile'));
const About= React.lazy(()=> import('./pages/About'));
const Eligibility= React.lazy(()=> import('./pages/Eligibility'));





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Suspense fallback={<div>Loading...</div>}><SignUp /></Suspense>} />
      <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><LoginPage /></Suspense>}/>
      <Route path="/sig" element={<Suspense fallback={<div>Loading...</div>}><SignUp /></Suspense>}/>
      <Route path="/nav" element={<Suspense fallback={<div>Loading...</div>}><NavBar/></Suspense>}/>
      <Route path="/pro" element={<Suspense fallback={<div>Loading...</div>}><Profile /></Suspense>}/>
      <Route path="/abt" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>}/>
      <Route path="/eli" element={<Suspense fallback={<div>Loading...</div>}><Eligibility /></Suspense>}/>
      <Route path="/land" element={<Suspense fallback={<div>Loading...</div>}><Landing  /></Suspense>}/>

      </Routes>
      </BrowserRouter>

    // <div>
    //   <HomePage/>
    // </div>
  );
}

export default App;

