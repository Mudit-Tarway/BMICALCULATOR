import './header.css';
import { Link } from 'react-router-dom';

function Helper() {
  return (
    <nav className="navbar">
      <div className="logo">BMI App</div>
      <div className='item'>
        <Link className='item1' to="/">HOME</Link>
        <Link className='item2' to="/calculate">CALCULATE</Link>
      </div>
    </nav>
  );
}

export default Helper;
