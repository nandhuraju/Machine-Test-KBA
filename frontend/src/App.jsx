import React from "react";
import Homepage from "./pages/Homepage";
import TaskForm from "./components/TaskForm";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
 const router = createBrowserRouter(
   createRoutesFromElements(
     <>
       <Route path="/" element={<Homepage/>} />
       <Route path="/addtask" element={<TaskForm/>} />
     </>
   )
 );

 return <RouterProvider router={router} />;
}

export default App;
