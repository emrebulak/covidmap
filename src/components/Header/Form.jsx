import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target[0].value;
        e.target.reset()
        navigate(`/detail?query=${searchValue}`);
    }

    return (
        <form onSubmit={handleSubmit} className=" bg-transparent border rounded flex items-center">
            <input required className="bg-transparent py-1 px-3 outline-none" type="text" placeholder="Ülke İsmine Göre Ara" />
            <button className="bg-primary h-8 w-8 flex justify-center items-center rounded-tr rounded-br hover:brightness-90 transition" type="submit"><FaSearch /></button>
        </form>
    )
}

export default Form