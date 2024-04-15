import {NavLink,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import './index.css'

const Header = () =>{
    const navigate = useNavigate()
    const [isClick,setClick] = useState(false)
    
    const onClickHandle = () =>{
        setClick((prevState) =>!prevState)
    }

    const handleLogout = () =>{
        localStorage.removeItem("loggedin")
        navigate("/login")
    }


    return(
        
        <nav className='navbar'>
            <div>
                <h1 className='logo'>Karo Abhayaas</h1>
            </div>
            <div className='list-items-btn'>
                <ul id='list-item' className={isClick ? "#list-item active" : "#list-item"}>
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/Classes">Classes</NavLink></li>
                    <li><NavLink to="/Products">Products</NavLink></li>
                    <li><NavLink to="/AboutUs">About Us</NavLink></li>
                    <li><NavLink to="/Cart">Cart</NavLink></li>
                    
                    
                </ul>
                <button onClick={handleLogout} type="submit" className='logoutBtn'>Logout</button>
                
            </div>
            <div id="mobile" onClick={onClickHandle}>
                <i id="bar" className={isClick ? "fas fa-times" : "fas fa-bars"}></i>

            </div>
        </nav> 
       
    )

}
export default Header