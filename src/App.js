import './App.css';
import Navigation from './components/Navigation';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{textAlign: 'center'}} className="mt-1">
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="about">About</Link> |{' '}
        <Link to="products">Products</Link>
      </nav>
      <Navigation />
    </div>
  );
}

export default App;
