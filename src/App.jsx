import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";


import Landing from "./components/HomePage/Landing";


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Landing />}>
    </Route>
  )
);


export default function App() {
  return <RouterProvider router={router}/>;
}