import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Main from "./pages/Main"
import Detail from "./pages/Detail"

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>

  )
}

export default Router