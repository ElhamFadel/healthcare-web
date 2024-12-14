import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createContext, useReducer, useContext } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import UserAuth from '@/utils/UserAuth';
import { onAuthStateChanged } from "firebase/auth";
import { auth,db } from "../../firebase";

const initialState = {
  typeUser:'',
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};
const actionTypes = {
 SET_TYPE_USER:'SET_TYPE_USER',
  SET_USER: 'SET_USER',
  REMOVE_USER: 'REMOVE_USER',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TYPE_USER:
      return { ...state, typeUser: action.payload };
    case actionTypes.SET_USER:
      return { ...state, user: action.payload, isAuthenticated: true };
    case actionTypes.REMOVE_USER:
      return { ...state, user: null, isAuthenticated: false };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export  const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
      if (currentUser) {        
        try {
          const userRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            dispatch({
                    type: "SET_USER",
                    payload: {
                    user: userSnap.data(),
                    },
                  });;
          } else {
            console.error('No such user document!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        dispatch({
          type: "REMOVE_USER"
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
