import { IoWarning } from "react-icons/io5";

const Error = ({ error, retry }) => {
    return (
        <div className="flex flex-col gap-5 absolute">
            <div className="bg-red-500 flex justify-between items-center gap-3 p-5 text-white  rounded-md">
                <IoWarning className="text-3xl" />
                <div>
                    <p>Üzgünüz, bir hata oluştu</p>
                    <p>{error.message}</p>
                </div>

            </div>

            <button onClick={retry} className="border rounded-md py-2 hover:bg-gray-100 transition">Tekrar Dene</button>

        </div>
    )
}

export default Error