import axios from "axios";
import Cookies from "js-cookie";

export class ProductService {
  constructor() {}

  async getProducts() {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/products/products"
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  async getProductById(id) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/products/products/${id}`
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  async getProductByReviewId(id) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/products/products/reviews/${id}`
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  async addReview(data, id) {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.post(
        `http://localhost:8000/api/v1/products/productReview/review/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  async searchProducts(query) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/products/search?query=${query}`
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  async addProduct(data) {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.post(
        "http://localhost:8000/api/v1/products/createProduct",
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  async getAllCategories() {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/products/categories"
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  async getAdminProducts() {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.get(
        "http://localhost:8000/api/v1/products/adminProducts",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(data, id) {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.put(
        `http://localhost:8000/api/v1/products/productUpdate/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.delete(
        `http://localhost:8000/api/v1/products/productDelete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteProductReview(productId, reviewId) {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.delete(
        `http://localhost:8000/api/v1/products/productReviewDelete/${productId}/review/${reviewId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      throw error;
    }
  }
}
const productService = new ProductService();
export default productService;
