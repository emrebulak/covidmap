import { TbVaccine } from "react-icons/tb";

const Info = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="flex flex-col items-start">
                <span className="text-sm">Bugün Aşı Olanlar</span>
                <span className="text-sm text-zinc-400">(123.456)</span>
            </div>
            <TbVaccine className="text-primary text-xl" />
        </div>
    )
}

export default Info