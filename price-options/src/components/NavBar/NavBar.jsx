import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line, } from "react-icons/ri";
import {  MdOutlineClose} from "react-icons/md";
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { "id": 1, "path": "/", "name": "Home" },
        { "id": 2, "path": "/about", "name": "About" },
        { "id": 3, "path": "/services", "name": "Services" },
        { "id": 4, "path": "/contact", "name": "Contact" },
        { "id": 5, "path": "*", "name": "NotFound" },

    ]
    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div onClick={()=>setOpen(!open)} className="md:hidden">
                {

                    open === true?<MdOutlineClose  className="text-2xl "/>: <RiMenu2Line className="text-2xl " />
                }
               
            </div>
            <ul className={`md:flex duration-1000 ${open?'top-16':'-top-60'} absolute md:static bg-yellow-50 px-6 `}>
                {
                    routes.map(
                        route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;