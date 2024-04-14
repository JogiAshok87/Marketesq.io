
import { FaSearch, FaCaretDown } from 'react-icons/fa';
import './index.css'

const Products = () =>{
    return(
        <div className='products-container'>
            <div className="search-box">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search..." />
                
                <FaCaretDown className="dropdown-icon" />
            </div>
            <div className='products'>
            <div className="product-card">
                <div className="image-placeholder">
                    <img src="https://res.cloudinary.com/dhtdkkae1/image/upload/v1713089847/download_qxq0ab.jpg" alt="" />
                </div>
                <div className="product-info">
                    <h2>Product 1</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    <div className="price">₹1500</div>
                    <button className="add-to-cart">ADD TO CART</button>
                </div>
                <hr />
            </div>
            <div className="product-card">
                <div className="image-placeholder">
                    <img src="https://res.cloudinary.com/dhtdkkae1/image/upload/v1713089847/download_qxq0ab.jpg" alt="" />
                </div>
                <div className="product-info">
                    <h2>Product 2</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    <div className="price">₹999</div>
                    <button className="add-to-cart">ADD TO CART</button>
                </div>
                <hr />
            </div>
            <div className="product-card">
                <div className="image-placeholder">
                    <img src="https://res.cloudinary.com/dhtdkkae1/image/upload/v1713089847/download_qxq0ab.jpg" alt="" />
                </div>
                <div className="product-info">
                    <h2>Product 3</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    <div className="price">₹899</div>
                    <button className="add-to-cart">ADD TO CART</button>
                </div>
                <hr />
            </div>

            </div>
            
        </div>
    )
}

export default Products