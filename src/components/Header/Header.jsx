import { IoSearchOutline } from "react-icons/io5";
import { PiUserCircleThin } from "react-icons/pi";
import "./Header.css"
const Header = () => {
    return (
            <div className="navbar">
                <div className="logo-title">
                <h2 className="text-3xl font-bold flex justify-center items-center">Recipe Calories</h2>
                </div>
                
                <div className="navbar-title-section">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Search</a></li>
                    </ul>
                </div>
                <div className="navbar-search-section">
                    <div className="input-section">
                        <IoSearchOutline className="only-search-icon" />
                        <input className="only-input-field" type="text" name="" id="" placeholder="Search" />
                    </div>
                    < PiUserCircleThin className="navbar-user" />
                </div>
            </div>
    );
};

export default Header;