import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    imageUrl: "",
    rating: 0,
  });

  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value, // Convert rating to a number
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/app/products", formData);
      alert("Product added successfully!");
      setFormData({
        name: "",
        desc: "",
        price: "",
        imageUrl: "",
        category: "",
      });
      setImagePreview(""); // Clear image preview
    } catch (error) {
      alert(
        "Error adding product: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Add Product</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Description:</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Image URL:</label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            style={styles.input}
          />
          {imagePreview && (
            <div style={styles.imagePreviewContainer}>
              <img
                src={imagePreview}
                alt="Preview"
                style={styles.imagePreview}
              />
            </div>
          )}
        </div>
        {/* <div style={styles.field}>
          <label style={styles.label}>Rating (0-5):</label>
          <input
            type="number"
            name="rating"
            value={formData.rating || ""}
            onChange={handleChange}
            style={styles.input}
            min="0"
            max="5"
            required
          />
        </div> */}
        <button type="submit" style={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    minHeight: "80px",
  },
  imagePreviewContainer: {
    marginTop: "10px",
    textAlign: "center",
  },
  imagePreview: {
    maxWidth: "100%",
    maxHeight: "150px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default AddProduct;
