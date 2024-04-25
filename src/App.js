import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Componants/Body";
import Homepage from "./Componants/Homepage";
import BusList from "./Componants/BusList";
import { Provider } from "react-redux";
import store from "./Utills/store";
import CheckOut from "./Componants/CheckOut";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/BusList/:from/:to/:date",
          element: <BusList />,
        },
        {
          path: "/BusList/checkout",
          element: <CheckOut />,
        },
        {
          path: "/BusList/checkout/:id",
          element: <CheckOut />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
