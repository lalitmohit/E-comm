import axios from "axios";
import Cookies from "js-cookie";

export class OrderService {
  constructor() {}

  async addNewProduct(data) {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.post(
        "http://34.27.55.167:8000/api/v1/orders/newOrder",
        {
          orderItems: data.orderItems,
          paymentInfo: data.paymentInfo,
          paidAt: data.paidAt,
          itemsPrice: data.itemsPrice,
          taxPrice: data.taxPrice,
          shippingPrice: data.shippingPrice,
          totalPrice: data.totalPrice,
          orderStatus: data.orderStatus,
        },
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

  async payment(data) {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.post('http://34.27.55.167:8000/api/v1/orders/payment',
        {
          orderItems: data.orderItems,
          paymentInfo: data.paymentInfo,
          paidAt: data.paidAt,
          itemsPrice: data.itemsPrice,
          taxPrice: data.taxPrice,
          shippingPrice: data.shippingPrice,
          totalPrice: data.totalPrice,
          orderStatus: data.orderStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      ); 
      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        console.error('Error: URL not found in response.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async getMyOrders() {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.get(
        "http://34.27.55.167:8000/api/v1/orders/myOrders",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response
    } catch (error) {
      console.log(error);
    }
  }
}
const orderService = new OrderService();
export default orderService;
