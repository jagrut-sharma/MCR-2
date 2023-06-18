import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Archive from "./pages/Archive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/archive",
        element: <Archive />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
