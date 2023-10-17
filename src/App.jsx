
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Fruits from './pages/Fruits'
import CreateFruits from './pages/CreateFruits'


function App() {
  return (
    <>
    <nav>
      <Link to="/">
        <button> Home  </button>
      </Link>
      <Link to="/create">
       <button> Create </button>
      </Link>
    </nav>
    <Routes>
      <Route path='/' element={<Fruits />} />
      <Route path='/create' element={<CreateFruits />}/>
    </Routes>
    </>
  )
}
export default App