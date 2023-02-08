import './App.css';
import Muitable from './Components/Muitable';
import Home from './Components/Home';
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/table",
      element: <Muitable/>,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
  );
}

export default App;
