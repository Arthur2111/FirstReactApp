import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Own Blog</h1>
            <div className="links">
                {/* similar to vue we have to use to= but we use Link as instead of router link */}
                <Link to="/"> Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;