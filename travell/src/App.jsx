import './App.css'
import { useRoutes } from 'react-router'
import routes from './routes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {
  let router = useRoutes(routes)
  return (
   <>
    <Header/>
  {router}
  <Footer/>
   </>
  )
}

export default App
