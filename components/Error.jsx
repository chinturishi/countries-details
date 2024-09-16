import { useRouteError } from "react-router-dom"
import Header from "./Header"

const Error = () => {
    const error=useRouteError();
    //console.log(error);
  return (
    <>
    <Header/>
    <h1><i>Something went wrong. {error.data} </i></h1>
    </>
    
  )
}

export default Error