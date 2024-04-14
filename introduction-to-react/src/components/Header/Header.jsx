
import {  NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav >
                {/* <Link to="/">Home</Link> */}
                <NavLink to="/">Home</NavLink>
                {/* <Link to="/users">Users</Link> */}
                <NavLink to="/users">Users</NavLink>
                {/* <Link to="/posts">Post</Link> */}
                <NavLink to="/posts">Post</NavLink>
                {/* <Link to="/about">About</Link> */}
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>        
                {/* <Link to="/contact">Contact Us</Link> */}
            </nav>
        </div>
    );
};

export default Header;