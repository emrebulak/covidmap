const Loader = ({ type }) => {
    if (type === 'header') {
        return (
            <div className="flex items-center gap-3">
                <div className="w-24 rounded animate-pulse h-[64px] bg-gray-400"></div>
                <div className="w-24 h-7 bg-gray-400 animate-pulse rounded"></div>
            </div>
        )
    }

    const emptyArr = new Array(16).fill()

    return emptyArr.map((_, key) =>
        <div key={key} className="bg-gray-200 p-4 rounded-lg shadow-md text-gray-600 min-w-52 h-[88px] animate-pulse flex flex-col gap-3">
            <div className="bg-gray-400 w-28 h-5  animate-pulse rounded"></div>
            <div className="bg-gray-400 w-44 h-7  animate-pulse rounded"></div>
        </div>
    )
}

export default Loader