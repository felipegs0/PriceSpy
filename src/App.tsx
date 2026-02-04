import { Routes, Route } from 'react-router-dom'
import Index from '../src/pages/Index'
import Login from '../src/pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
