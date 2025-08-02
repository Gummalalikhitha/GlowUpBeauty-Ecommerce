
// ProductList.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaShoppingCart, FaMinus, FaPlus } from "react-icons/fa";

// ...productCategories definition remains unchanged...
const productCategories = {
  Hair: [
    { _id: 1, name: "Hair Serum", price: 299, image: "hair1.jpg" },
    { _id: 2, name: "Hair Conditioner", price: 349, image: "hair2.jpg" },
    { _id: 3, name: "Hair Oil", price: 399, image: "hair3.jpg" },
    { _id: 4, name: "Shampoo", price: 299, image: "hair4.jpg" },
    { _id: 5, name: "Hair Mask", price: 549, image: "hair5.jpg" },
    { _id: 6, name: "Hair Spa Cream", price: 449, image: "hair6.jpg" },
    { _id: 7, name: "Hair Gel", price: 199, image: "hair7.jpg" },
    { _id: 8, name: "Leave-In Conditioner", price: 499, image: "hair8.jpg" },
    { _id: 9, name: "Anti-Frizz Spray", price: 349, image: "hair9.jpg" },
    { _id: 10, name: "Hair Mousse", price: 299, image: "hair10.jpg" }
  ],
   Eye: [
    { _id: 11, name: "Mascara", price: 399, image: "Eye1.jpg" },
    { _id: 12, name: "Kajal", price: 199, image: "Eye2.png" },
    { _id: 13, name: "Liquid Eyeliner", price: 299, image: "Eye3.jpg" },
    { _id: 14, name: "Eye Shadow Palette", price: 599, image: "Eye4.jpg" },
    { _id: 15, name: "Eye Primer", price: 349, image: "Eye5.jpeg" },
    { _id: 16, name: "Eyebrow Pencil", price: 199, image: "Eye6.png" },
    { _id: 17, name: "Waterproof Kajal", price: 229, image: "Eye7.jpeg" },
    { _id: 18, name: "Gel Eyeliner", price: 349, image: "Eye8.jpg" },
    { _id: 19, name: "Color Eyeliner Set", price: 499, image: "Eye9.jpg" },
    { _id: 20, name: "Smokey Eye Pencil", price: 259, image: "Eye10.jpg" }
  ],
  Body: [
    { _id: 21, name: "Body Lotion", price: 299, image: "Body 1.jpg" },
    { _id: 22, name: "Sunscreen", price: 449, image: "Body 2.jpeg" },
    { _id: 23, name: "Body Wash", price: 349, image: "Body 3.jpeg" },
    { _id: 24, name: "Deodorant Spray", price: 299, image: "Body 4.jpg"},
    { _id: 25, name: "Body Mist", price: 549, image: "Body5.jpeg"},
    { _id: 26, name: "Body Butter", price: 399, image: "Body6.jpg" },
    { _id: 27, name: "Foot Cream", price: 249, image: "Body7.jpg" },
    { _id: 28, name: "Body Scrub", price: 329, image: "Body8.jpg" },
    { _id: 29, name: "Body Polish", price: 499, image: "Body9.jpg" },
    { _id: 30, name: "Hand Cream", price: 199, image: "Body10.jpg" }
  ],
  Lips: [
    { _id: 31, name: "Lipstick", price: 399, image:"lips1.jpeg" },
    { _id: 32, name: "Lip Balm", price: 149, image: "lips5.jpeg" },
    { _id: 33, name: "Lip Gloss", price: 299, image: "lips3.jpg"},
    { _id: 34, name: "Lip Liner", price: 199, image: "lips4.jpg"},
    { _id: 35, name: "Matte Lipstick", price: 449, image: "lips2.jpg"},
    { _id: 36, name: "Lip Scrub", price: 249, image: "lips6.jpg"},
    { _id: 37, name: "Tinted Lip Balm", price: 229, image: "lips7.jpeg"},
    { _id: 38, name: "Longwear Lipstick", price: 399, image: "lips8.jpg"},
    { _id: 39, name: "Lip Cream", price: 329, image: "lips9.jpg" },
    { _id: 40, name: "Hydrating Lip Oil", price: 349, image: "lips10.jpeg"}
  ],
  Face: [
    { _id: 41, name: "Face Wash", price: 299, image:"face1.jpeg"},
    { _id: 42, name: "Face Moisturizer", price: 349, image: "face2.jpg" },
    { _id: 43, name: "Face Serum", price: 499, image: "face3.jpeg" },
    { _id: 44, name: "Face Scrub", price: 299, image: "face4.jpeg" },
    { _id: 45, name: "Face Pack", price: 399, image:"face5.jpg" },
    { _id: 46, name: "Toner", price: 259, image:"face6.jpg"},
    { _id: 47, name: "Vitamin C Serum", price: 599, image:"face7.jpg" },
    { _id: 48, name: "Night Cream", price: 479, image:"face8.jpeg" },
    { _id: 49, name: "Face Gel", price: 329, image:"face9.jpeg" },
    { _id: 50, name: "BB Cream", price: 349, image: "face10.jpeg" }
  ],
  Fragrance: [
  { _id: 51, name: "Floral Perfume", price: 799, image:"fragrance1.jpeg" },
  { _id: 52, name: "Vanilla Body Mist", price: 599, image:"fragrance2.jpeg" },
  { _id: 53, name: "Aqua Cologne", price: 749, image: "fragrance3.jpeg"},
  { _id: 54, name: "Rose Eau De Parfum", price: 899, image: "fragrance4.jpeg"},
  { _id: 55, name: "Woody Musk Perfume", price: 999, image: "fragrance5.jpeg" },
  { _id: 56, name: "Citrus Body Spray", price: 499, image: "fragrance6.jpeg" },
  { _id: 57, name: "Luxury Roll-On", price: 449, image:"fragrance7.jpeg" },
  { _id: 58, name: "Lavender Perfume Oil", price: 599, image: "fragrance8.jpeg" },
  { _id: 59, name: "Unisex Fresh Cologne", price: 899, image: "fragrance9.jpeg" },
  { _id: 60, name: "Long Lasting Deo", price: 349, image:"fragrance10.jpeg" }
],
Nails: [
  { _id: 61, name: "Glossy Nail Polish", price: 149, image: "nail1.jpeg" },
  { _id: 62, name: "Matte Nail Polish", price: 179, image:"nail2.jpeg" },
  { _id: 63, name: "Nail Polish Remover", price: 99, image: "nail3.jpeg"},
  { _id: 64, name: "Nail Art Kit", price: 499, image: "nail4.jpg" },
  { _id: 65, name: "Nail Clippers Set", price: 249, image:"nail5.jpeg" },
  { _id: 66, name: "Cuticle Cream", price: 199, image:"nail6.jpeg" },
  { _id: 67, name: "French Manicure Kit", price: 349, image: "nail7.jpeg" },
  { _id: 68, name: "UV Nail Lamp", price: 999, image: "nail8.jpeg" },
  { _id: 69, name: "Peel-off Polish", price: 159, image: "nail9.jpeg"},
  { _id: 70, name: "Nail Strengthener", price: 299, image:"nail10.jpeg" }
],
ToolsAndBrushes: [
  { _id: 71, name: "Makeup Brush Set", price: 799, image: "tools1.jpeg" },
  { _id: 72, name: "Beauty Blender", price: 249, image:"tool2.jpeg" },
  { _id: 73, name: "Eyebrow Tweezers", price: 199, image: "tool3.jpeg" },
  { _id: 74, name: "Silicone Mask Brush", price: 159, image:"tool4.jpeg"},
  { _id: 75, name: "Powder Puff", price: 99, image:"tool5.jpeg"},
  { _id: 76, name: "Makeup Sponge Set", price: 399, image: "tool6.jpeg" },
  { _id: 77, name: "Contour Brush", price: 299, image: "tool7.jpeg" },
  { _id: 78, name: "Foundation Brush", price: 349, image: "tool8.jpeg" },
  { _id: 79, name: "Eyeshadow Applicator", price: 129, image:"tool9.jpeg" },
  { _id: 80, name: "Lip Brush", price: 149, image: "tool10.jpeg" }
]
}
const ProductList = () => {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCart(storedCart);
    setWishlist(storedWishlist);
  }, []);

  const updateCartStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleAddToCart = async (product) => {
    const updatedCart = { ...cart };
    if (updatedCart[product._id]) {
      updatedCart[product._id].quantity += 1;
    } else {
      updatedCart[product._id] = { ...product, quantity: 1 };
    }
    updateCartStorage(updatedCart);
    alert(`${product.name} added to cart`);

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.email) {
      alert("Please login to continue");
      navigate("/login");
      return;
    }

    try {
      const res = await axios.get(`http://51.21.10.233:5000/api/auth/${user.email}`);
      if (res.status === 200 && res.data.loginStatus) {
        navigate("/cart");
      } else {
        alert("Please login to access your cart");
        navigate("/login");
      }
    } catch (err) {
      console.error("Login check error:", err);
      alert("Please login to access your cart");
      navigate("/login");
    }
  };

  const handleDecrease = (product) => {
    const updatedCart = { ...cart };
    if (updatedCart[product._id]) {
      if (updatedCart[product._id].quantity > 1) {
        updatedCart[product._id].quantity -= 1;
      } else {
        delete updatedCart[product._id];
      }
      updateCartStorage(updatedCart);
    }
  };

  const handleWishlist = (product) => {
    const exists = wishlist.find(p => p._id === product._id);
    if (!exists) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      alert(`${product.name} added to wishlist`);
    } else {
      alert('Already in wishlist');
    }
  };

  return (
    <div className="product-list-container">
      {/* <style>{`
        .product-list-container {
          font-family: 'Segoe UI', sans-serif;
          padding: 1rem;
        }
        .search-input {
          padding: 0.6rem;
          width: 60%;
          border-radius: 20px;
          border: 1px solid #ccc;
          margin: 1rem 0;
        }
        .section-title {
          font-size: 1.8rem;
          color: #333;
          border-left: 5px solid #e91e63;
          padding-left: 10px;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        .product-card {
          background: #fff;
          padding: 1rem;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          text-align: center;
        }
        .product-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 6px;
        }
        .product-card h4 {
          margin: 0.5rem 0;
        }
        .product-card p {
          color: #e91e63;
          font-weight: bold;
        }
        .product-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        .product-actions button {
          background: #ff4081;
          color: white;
          border: none;
          padding: 0.4rem 0.6rem;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style> */}
      <style>{`
  .product-list-container {
    font-family: 'Poppins', sans-serif;
    padding: 2rem;
    background: #fff0f6;
    min-height: 100vh;
  }

  .search-input {
    padding: 0.8rem 1rem;
    width: 100%;
    max-width: 600px;
    margin: 0 auto 2rem auto;
    display: block;
    border-radius: 30px;
    border: 1px solid #ddd;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .search-input:focus {
    outline: none;
    border-color: #e91e63;
    box-shadow: 0 0 5px #e91e63aa;
  }

  .section-title {
    font-size: 2rem;
    font-weight: 600;
    color: #333;
    margin-top: 2rem;
    margin-bottom: 1rem;
    border-left: 6px solid #e91e63;
    padding-left: 12px;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .product-card {
    background: #fff;
    padding: 1rem;
    border-radius: 16px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.06);
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
    position: relative;
  }

  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.1);
  }

  .product-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  .product-card h4 {
    font-size: 1.1rem;
    margin: 0.5rem 0 0.2rem;
    color: #333;
  }

  .product-card p {
    color: #e91e63;
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .product-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 1rem;
  }

  .product-actions button {
    background: #f8bbd0;
    color: #fff;
    border: none;
    padding: 0.4rem 0.6rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .product-actions button:hover {
    background: #e91e63;
  }

  .product-card button {
    margin: 0.2rem;
    background:  #8e007c;
  
    color: #fff;
    border: none;
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 30px;
    transition: background 0.3s ease;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .product-card button:hover {
    background: #d81b60;
  }

  .product-card span {
    min-width: 20px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .products-grid {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }

    .product-card img {
      height: 140px;
    }

    .product-card h4 {
      font-size: 1rem;
    }

    .product-card p {
      font-size: 1rem;
    }
  }
`}</style>


      <input
        className="search-input"
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {Object.entries(productCategories).map(([category, products]) => (
        <div key={category}>
          <h2 className="section-title">{category} Products</h2>
          <div className="products-grid">
            {products
              .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
              .map(product => (
                <div className="product-card" key={product._id}>
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>₹{product.price}</p>
                  <div className="product-actions">
                    <button onClick={() => handleDecrease(product)}><FaMinus /></button>
                    <span>{cart[product._id]?.quantity || 0}</span>
                    <button onClick={() => handleAddToCart(product)}><FaPlus /></button>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <button onClick={() => handleAddToCart(product)}><FaShoppingCart /> Add</button>
                    <button onClick={() => handleWishlist(product)}><FaHeart /> Wishlist</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
