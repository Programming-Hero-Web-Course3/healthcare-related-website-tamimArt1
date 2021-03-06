import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userInfoAtom } from '../store';
import firebaseInit from '../firebaseConfig';
import { useHistory } from 'react-router-dom';

firebaseInit();
const useFirebase = () => {
  const [user, setUser] = useAtom(userInfoAtom);
  const history = useHistory();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const emailPasswordSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        setUser({ err: error.message });
      });
  };
  const emailPasswordLogin = (email, password, location) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        if (location.state?.from) {
          history.push(location.state.from);
        }
      })
      .catch((error) => {
        setUser({ err: error.message });
        alert(error.message);
      });
  };

  const googleClient = (location) => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        if (location.state?.from) {
          history.push(location.state.from);
        }
      })
      .catch((error) => {
        setUser({ err: error.message });
      });
  };

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return {
    user,
    googleClient,
    emailPasswordSignUp,
    emailPasswordLogin,
    logOut,
  };
};

export default useFirebase;
