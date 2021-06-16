import React, { useState } from 'react';
import Products from "../modules/products";

const CreateProduct = () => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState();

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = (error) => {
      reject(error)
    }
  })
  
  const selectImage = (event) => {
    setImage(event.target.files[0])
  }

  const submitProduct = async (event) => {
    event.preventDefault();
    let name = event.target.children.name.value
    let description = event.target.children.description.value
    let price = event.target.children.price.value
    // let image = event.target.children.image.files
    let encodedImage
    
    if (image) {
      encodedImage = await toBase64(image)
    }

    let response = await Products.create(name, description, price, encodedImage)
    setMessage(response);
  }

  return (
    <>
      <p id="message">{message}</p>
      <h2>Submit a new product</h2>
      <form id="product-form" onSubmit={submitProduct}>
        <input id="name" placeholder="Product Name" />
        <input id="description" placeholder="Product Description" type="text" />
        <input id="price" placeholder="Product Price" type="number" min="0" step="1" />
        <input id="image" placeholder="Image" type="file" onChange={selectImage} />
        <button id="submit">Create Product</button>
      </form>

      { image && (
        <img src={URL.createObjectURL(image)} height="200" width="200" alt="upload" />
      )}
    </>
  )
}

export default CreateProduct;