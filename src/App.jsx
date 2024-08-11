import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  Route,
  RouterProvider,
  Routes,
  ScrollRestoration,
  createBrowserRouter
} from 'react-router-dom';

import {
  DesignComponent,
  GoogleAnalytics,
  MainNavigationBar,
  Preloader,
  PrivateOutlet,
  PublicOutlet
} from './components';
// eslint-disable-next-line import/order
import { AuthProvider } from './contexts/AuthContext';

// Website Pages
import {
  About,
  DetailedSubmission,
  Home,
  Learn,
  Login,
  PageNotFound,
  Profile,
  Quiz,
  Quizzes,
  Reset,
  Result,
  SignUp,
  Submissions,
  Video
} from './pages';


function Root() {
  return (
    <>
      <ScrollRestoration />
      <GoogleAnalytics />
      <Routes>
        <Route element={<MainNavigationBar />}>
          <Route element={<Home />} path="/" />
          <Route element={<Quizzes />} path="/quizzes" />
          <Route element={<About />} path="/about" />
          <Route element={<Reset />} path="/reset" />
          <Route element={<Learn />} path="/learn" />
          <Route element={<PublicOutlet />} path="/">
            <Route element={<SignUp />} path="signup" />
            <Route element={<Login />} path="login" />
          </Route>
          <Route element={<PrivateOutlet />} path="/">
            <Route element={<Quiz />} errorElement={<PageNotFound />} path="quiz/:id" />
            <Route element={<Video />} errorElement={<PageNotFound />} path="video/:id" />
            <Route element={<Profile />} path="profile" />
            <Route element={<Submissions />} path="submissions" />
            <Route
              element={<DetailedSubmission />}
              errorElement={<PageNotFound />}
              path="detailed-submission"
            />
            <Route element={<Result />} errorElement={<PageNotFound />} path="result/:id" />
          </Route>
          <Route element={<PageNotFound />} path="*" />
        </Route>
      </Routes>
    </>
  );
}

const router = createBrowserRouter([{ path: '*', Component: Root }]);

function App() {
  // Website theme
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Preloading state
  const [preloading, setPreloading] = useState(true);

  // Display preloading animation
  useEffect(() => {
    setTimeout(() => {
      setPreloading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {preloading && <Preloader />}

      {!preloading && (
        <AuthProvider>
          <DesignComponent />
          <RouterProvider router={router} />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                color: '#000',
                fontWeight: 600,
                background: '#44BBA9'
              },
              duration: 3000
            }}
          />
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
