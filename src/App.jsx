
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Fruits from './pages/Fruits'
import CreateFruits from './pages/CreateFruits'
import Veggies from './pages/Veggies'
import CreateVeggies from './pages/CreateVeggies'


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
      <Link to="/Veggies">
        <button> Veggies  </button>
      </Link>
      <Link to="/CreateVeggies">
       <button> CreateVeggies </button>
      </Link>
    </nav>
    <Routes>
      <Route path='/' element={<Fruits />} />
      <Route path='/create' element={<CreateFruits />}/>
      <Route path='/veggies' element={<Veggies />} />
      <Route path='/createVeggies' element={<CreateVeggies />}/>
    </Routes>
    </>
  )
}
export default App