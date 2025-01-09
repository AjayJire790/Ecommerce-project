import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/CartItems/cartSlice";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const cartItem = {
      productID: product._id,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("FOR CHECKING PRODUCTS...");
        // Retrieve the JWT token from localStorage or another secure storage
        // const token = localStorage.getItem(process.env.JWT_SECRET);

        // Make sure the token exists
        // if (!token) {
        //   console.error("Token not found. Please log in.");
        //   return;
        // }

        const response = await axios.get("http://localhost:5000/app/products");
        // , {
        // headers: {
        //   Authorization: `Bearer ${token}`, // Pass the token as a Bearer token
        //   },
        // });

        console.log("RESPONSE:  ", response);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Explore Our Products</h1>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product._id} style={styles.card}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={styles.image}
              onError={(e) => (e.target.src = "/placeholder.png")}
            />
            <div style={styles.cardContent}>
              <h2 style={styles.title}>{product.name}</h2>
              <p style={styles.description}>{product.description}</p>
              <p style={styles.price}>Price: ${product.price}</p>
              <p style={styles.rating}>Rating: {product.rating || "N/A"}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "36px",
    color: "#34495E",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#FFFFFF",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain", // Ensures the entire image is displayed without cropping
    backgroundColor: "#f9f9f9", // Optional: Adds a background color for better appearance
  },
  cardContent: {
    padding: "15px",
    textAlign: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2C3E50",
  },
  description: {
    fontSize: "14px",
    color: "#7F8C8D",
    margin: "10px 0",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#E74C3C",
  },
  rating: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#FFD700", // Gold color for ratings
  },
};

export default HomePage;
