import { useEffect, useState } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  DesignComponent,
  MainNavigationBar,
  Preloader,
  PrivateOutlet,
  PublicOutlet
} from './components';
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

function App() {
  // Website theme
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainNavigationBar />}>
        <Route index element={<Home />} />
        <Route path='/' element={<PublicOutlet />}>
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='quizzes' element={<Quizzes />} />
        <Route path='about' element={<About />} />
        <Route path='reset' element={<Reset />} />
        <Route path='learn' element={<Learn />} />
        <Route path='/' element={<PrivateOutlet />}>
          <Route
            path='quiz/:id'
            element={<Quiz />}
            errorElement={<PageNotFound />}
          />
          <Route
            path='video/:id'
            element={<Video />}
            errorElement={<PageNotFound />}
          />
          <Route path='profile' element={<Profile />} />
          <Route path='submissions' element={<Submissions />} />
          <Route
            path='detailed-submission'
            element={<DetailedSubmission />}
            errorElement={<PageNotFound />}
          />
          <Route
            path='result/:id'
            element={<Result />}
            errorElement={<PageNotFound />}
          />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <div className='App'>
      {preloading && <Preloader />}

      {!preloading && (
        <AuthProvider>
          <DesignComponent />
          <RouterProvider router={router} />
          <ToastContainer />
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
