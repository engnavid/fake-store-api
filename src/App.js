import logo from './logo.svg';
import './App.css';
import MyNavbar from './MyNavbar';
import Cart from './Cart';
import Home from './Home';
import Products from './Products'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <MyNavbar />
    </div>
  );
}

export default App;
