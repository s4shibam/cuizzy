import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import '../firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Sign Up Function
  async function signUp(email, password, userName) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    // Profile Update
    await updateProfile(auth.currentUser, {
      displayName: userName
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user
    });
  }

  // Sign In With Google
  async function signInWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);
  }

  // Update User Name Function
  async function updateUserName(displayName) {
    const auth = getAuth();
    await updateProfile(auth.currentUser, { displayName });
  }

  // Update Profile Image Function
  async function updateProfileImage(imageFile) {
    const auth = getAuth();
    const storage = getStorage();
    const fileRef = ref(storage, auth.currentUser.uid);
    await uploadBytes(fileRef, imageFile);
    const photoURL = await getDownloadURL(fileRef);

    await updateProfile(auth.currentUser, { photoURL });
  }

  // Log In Function
  function logIn(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Log Out Function
  function logOut() {
    const auth = getAuth();
    return signOut(auth);
  }

  // Reset Password Function
  async function resetPassword(email) {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
  }

  const memoValue = useMemo(
    () => ({
      currentUser,
      signUp,
      logIn,
      logOut,
      resetPassword,
      updateUserName,
      signInWithGoogle,
      updateProfileImage
    }),
    [currentUser]
  );
  return <AuthContext.Provider value={memoValue}>{!loading && children}</AuthContext.Provider>;
}
