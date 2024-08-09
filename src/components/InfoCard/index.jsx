const InfoCard = ({item}) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md text-gray-600 min-w-52">
            <p className="text-sm font-semibold mb-2 capitalize">
                {item[0].replace(/_/g, ' ')}
            </p>
            <h2 className="text-lg font-bold text-gray-800">{item[1]}</h2>
        </div>
    )
}

export default InfoCard