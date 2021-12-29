import { Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Header from './components/Header/Header';
import MovieCard from './components/MovieCard/MovieCard';

const HomePage = lazy(() => import('./pages/HomePage.js'));
const MoviesPage = lazy(() => import('./pages/MoviesPage.js'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage.js'));
const PageNotFound = lazy(() => import('./pages/PageNotFound.js'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage>
              <MovieCard />
            </MovieDetailsPage>
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
    // <Container>
    //   <AppBar />
    //   <Suspense fallback={<div>Loading...</div>}>
    //     <Switch>
    //       <Route exact path="/" component={HomePage} />
    //       <Route exact path="/movies" component={MoviesPage} />
    //       <Route path="/movies/:movieId" component={MovieDetailsPage} />
    //       <Route component={PageNotFound} />
    //     </Switch>
    //   </Suspense>
    // </Container>
  );
}

export default App;
