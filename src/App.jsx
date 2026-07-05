import { Link, Route, Routes } from 'react-router-dom';
import BestBooks from './components/BestBooks';
import About from './components/About';
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Can of Books</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<BestBooks />} />  {/*} home = BestBooks.jsx */}
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App
