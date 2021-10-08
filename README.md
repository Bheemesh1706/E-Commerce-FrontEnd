# E-Commerce-FrontEnd

### It's a Custom E-Commerce Website that's Build on MERN+Context API+JWT Authentication.
### [Live Link](https://distracted-swanson-8e7f48.netlify.app/)

# Custom Hooks 
  - [useProduct.js](https://github.com/Bheemesh1706/E-Commerce-FrontEnd/blob/main/src/hooks/useProduct.js) It handels the product data from the backend using Context API
  - [useLocalStorage.js](https://github.com/Bheemesh1706/E-Commerce-FrontEnd/blob/main/src/hooks/useLocalStorage.js) This handels localstorage of the browser sessions.
  
# External Libraries and Hooks
  - [react-hook-form](https://react-hook-form.com) Used for form validation.
  - [react-router-dom](https://reactrouter.com/web/guides/quick-start) To handle rouuting of the webpage.
  - [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) For Infinite Loading.
  
# Major Components 
  - [Dashboad](https://github.com/Bheemesh1706/E-Commerce-FrontEnd/blob/main/src/Components/Dashboard/Dashboard.jsx) Is the current home page of the WebApp.
  It uses a custom component [Product](https://github.com/Bheemesh1706/E-Commerce-FrontEnd/blob/main/src/Components/Dashboard/Product.jsx) to display all the products in the main dashboard.
  
  - [Order](https://github.com/Bheemesh1706/E-Commerce-FrontEnd/tree/main/src/Components/Order) This one has all the custom components for actions like displaying order details,order history
  and placing orders.
  
# Deployment Instructions

  - Change the API end point to your needs in [Config.js](https://github.com/Bheemesh1706/E-Commerce-FrontEnd/blob/main/src/Backend/Config.js)
  - Follow the below commands to get the application start and running in your local environment.

```
    git clone https://github.com/Bheemesh1706/E-Commerce-FrontEnd.git
    cd  E-Commerce-FrontEnd
    npm i
    npm start
```

