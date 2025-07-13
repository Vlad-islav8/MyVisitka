import { useDispatch } from 'react-redux'
import './App.css'
import Container from './Container/Container'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { useEffect } from 'react'
import { setAppStatred } from './Redux/initReducer'
import { setMousePosition, setNewColor } from './Redux/AdminReducer'

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
    const setCursorPosition = (current) => {
      const mousePosition = {x: current.clientX, y: current.clientY}
      dispatch(setMousePosition(mousePosition))
    }
    return (
      <div className='app' onMouseMove={setCursorPosition}>
        <Header />
        <Container />
        <Footer />
      </div>
    )
  }

export default App
