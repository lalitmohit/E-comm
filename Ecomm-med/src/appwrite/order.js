import axios from "axios";
import Cookies from "js-cookie";

export class OrderService {
  constructor() {}

  async addNewProduct(data) {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.post(
        "http://localhost:8000/api/v1/orders/newOrder",
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
      // const accessToken = Cookies.get("accessToken");
      const response = await axios.post(
        "http://localhost:8000/api/v1/orders/payment"
        // {
        //   order_id: data.order_id,
        //   payment_id: data.payment_id,
        //   status: data.status,
        // },
        // {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getMyOrders() {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.get(
        "http://localhost:8000/api/v1/orders/myOrders",
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
