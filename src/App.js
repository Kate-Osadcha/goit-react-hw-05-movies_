import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.js'));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
