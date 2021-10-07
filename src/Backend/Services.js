import axi from "axios";
import { API_HOST } from "./Config";

const sendDataLogin = async (data) => {
  document.getElementById("error").innerText = "";
  try {
    console.log("login_axios");
    console.log(data);
    const response = await axi.post(`${API_HOST}/auth/login`, {
      username: data.Username,
      password: data.Password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const sendDataRegister = async (data) => {
  document.getElementById("error").innerText = "";
  try {
    console.log("register_axios");
    console.log(data);
    const response = await axi.post(`${API_HOST}/auth/register`, {
      username: data.username,
      address: data.address,
      password: data.password,
      city: data.city,
      code: data.code,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const sendOrderData = async (data) => {
  try {
    console.log("order_axios");
    console.log(data);
    const response = await axi.post(`${API_HOST}/product/order`, {
      Address: data.address.Address,
      User: data.Id,
      Total: data.Total,
      Count: data.cart.map((item) => ({
        Id: item._id,
        Count: item.Count,
      })),
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getOrderDetails = async (data,pg) => {
  try {
    console.log("get_orders1");
    const response = await axi.get(`${API_HOST}/product/get-order`, {
      params: {
        token: data,
        page: pg,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getOrderItemDetails = async (data, Id) => {
  try {
    console.log("get_orders2");
    const response = await axi.get(`${API_HOST}/product/get-order-details`, {
      params: {
        token: data,
        Id: Id,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { sendDataLogin, sendDataRegister, sendOrderData, getOrderDetails,getOrderItemDetails };
