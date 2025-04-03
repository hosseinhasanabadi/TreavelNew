import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './page/Home'
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
