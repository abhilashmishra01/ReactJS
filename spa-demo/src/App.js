import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pageone from "./Pages/Pageone";
import Pagetwo from "./Pages/Pagetwo";
import Pagethree from "./Pages/Pagethree";
import Nopage from "./Pages/Nopage";
import Layout from "./Pages/Layout";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Pageone />} />
        <Route path="page_two" element={<Pagetwo />} />
        <Route path="page_three" element={<Pagethree />} />
        <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

/* 
  line number 15, 16,17,18 should be insiude the "Layout element"

  if we put the elements inside the layout element it will show only the pageone element in the output.

  so in class our mistake was that we closed the route tag in line number 13 but instead we should write the other elements and close the route tag in line number 19
*/