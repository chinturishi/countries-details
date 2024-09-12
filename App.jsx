
import './App.css'
import { Outlet } from "react-router-dom"
import Header from './components/Header'


const App = () => {
  //const [query, setQuery] = useState('');
  return (
    <>
    <Header/>
    <Outlet/>
   </>
  )
}

export default App