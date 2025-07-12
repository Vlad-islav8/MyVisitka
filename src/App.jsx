import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Container from './Container/Container'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { useEffect } from 'react'
import { setAppStatred } from './Redux/initReducer'
import { getActiveTheme } from './Selectors/initSelectors'
import { setNewColor } from './Redux/AdminReducer'

const App = () => {
  const dispatch = useDispatch()
  const theme = localStorage.getItem("them") 
  const handleStart = () => {
    dispatch(setAppStatred())
    dispatch(setNewColor(theme))
  }
  useEffect(() => {
    handleStart()
  }, [])

  return (
    <div className='app'>
      <Header />
      <Container />
      {/* <Footer /> */}
    </div>
  )
}

export default App
