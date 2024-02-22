import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../../pages/homePage/homePage'));
const ErrorMsg = lazy(() => import('../../pages/errorPage/errorpage'));

export function Router() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/*" element={<ErrorMsg></ErrorMsg>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
