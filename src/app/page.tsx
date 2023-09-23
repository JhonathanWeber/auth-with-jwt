
import { Login } from "@/components/Login";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";


export default function App({ pageProps }: any) {

  console.log('fabianaServer')

  return (
    <div>

      <Login {...pageProps} />




    </div>
  )
}
