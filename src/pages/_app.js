import "@/styles/globals.css";
// import { useEffect, useState } from "react";
import { AuthProvider } from "@/context/AuthContext";
// import Splash from "@/components/Splash"; 
// import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);  

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setIsLoading(false);
  //     router.push('/');
  //   }, 3000); 

  //   return () => clearTimeout(timeoutId);
  // }, []);  

  // if (isLoading) {
  //   return <Splash />;     
  // }

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
