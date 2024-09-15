import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";


import Landing from "./pages/HomePage/Landing.jsx";


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Landing />}>
    </Route>
  )
);


export default function App() {
  return <RouterProvider router={router}/>;
}