import Navbar from "../Navbar";
import Form from "./Form";
import Info from "./Info";

const Header = () => {
  return (
    <header className="flex bg-dark text-white justify-between items-center py-4 px-20">
      <Navbar />
      <Form />
      <Info />
    </header>
  )
}

export default Header