import axios from "axios";
import headers from "./headers";

const Products = {
  async create(name, description, price, image) {
    debugger;
    try {
      let result = await axios.post("/products", {
        product: {
          name: name,
          description: description,
          price: price,
          image: image
        }
      }, {
        headers: headers()
      })

      return result.data.message
    } catch(error) {
      console.log(error.response.data)
    }
  }
}

export default Products;