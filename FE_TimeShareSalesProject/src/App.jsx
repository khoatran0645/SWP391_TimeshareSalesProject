import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Intro } from "./pages/Introduction";
import { More } from "./pages/More";
import { AppLayout } from "./layouts/AppLayout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
      >
        <Route element={<AppLayout/>}>
          <Route index element={<Home />} />
          <Route
            path="detail/:id"
            element={<Detail />}
          />
          <Route
            path="introduction"
            element={<Intro />}
          />
          <Route
            path="more"
            element={<More />}
          />
        </Route>
      </Route>
    ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
