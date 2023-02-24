import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainNavigationBar from './components/MainNavigationBar';
import Preloader from './components/Preloader';
import PrivateOutlet from './components/react-router/PrivateOutlet';
import PublicOutlet from './components/react-router/PublicOutlet';
import { AuthProvider } from './contexts/AuthContext';

// Website Pages
import About from './pages/About';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';
import Quizzes from './pages/Quizzes';
import Reset from './pages/Reset';
import Result from './pages/Result';
import SignUp from './pages/SignUp';
import Video from './pages/Video';

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
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<PublicOutlet />}>
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='quizzes' element={<Quizzes />} />
        <Route path='about' element={<About />} />
        <Route path='reset' element={<Reset />} />
        <Route path='learn' element={<Learn />} />
        <Route path='/*' element={<PrivateOutlet />}>
          <Route path='quiz/:id' element={<Quiz />} />
          <Route path='video/:id' element={<Video />} />
          <Route path='profile' element={<Profile />} />
          <Route path='result/:id' element={<Result />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className='App'>
      {preloading && <Preloader />}

      {!preloading && (
        <AuthProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
