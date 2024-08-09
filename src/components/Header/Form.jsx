import { FaSearch } from "react-icons/fa";

const Form = () => {
    return (
        <form className=" bg-transparent border rounded flex items-center">
            <input className="bg-transparent py-1 px-3 outline-none" type="text" placeholder="Ülke İsmine Göre Ara" />
            <button className="bg-primary h-8 w-8 flex justify-center items-center rounded-tr rounded-br hover:brightness-90 transition" type="button"><FaSearch /></button>
        </form>
    )
}

export default Form