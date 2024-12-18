import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { Defaultlayout } from './layouts/DefaultLayout';
import { Cart } from './pages/Cart';
import { Finished } from './pages/Finished';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Defaultlayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="finished" element={<Finished />} />
      </Route>
    </Routes>
  );
}
