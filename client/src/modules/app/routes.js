import { Routes, BrowserRouter } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router';
import history from '../../config/history';

// Lazy loading of all the components.
const Home = lazy(() => import('../Home'));

// Root routes
const App = () => {
  return (
    <BrowserRouter history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
};

export default App;