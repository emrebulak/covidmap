import { Link } from "react-router-dom"
import { FaVirus } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav>
            <Link to={'/'} className="flex gap-2 items-center">
                <FaVirus className="text-xl text-primary" />
                <h3>COVID Takip</h3>
            </Link>
        </nav>
    )
}

export default Navbar