import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useSearchParams } from "react-router-dom"
import { getCovidData } from "../../store/Actions/covidAction"
import Loader from "../../components/Loader"
import InfoCard from "../../components/InfoCard"
import Error from "../../components/Error"

const Detail = () => {
    const [params] = useSearchParams()
    const code = params.get('code')
    const query = params.get('query')

    const dispatch = useDispatch()
    const { isLoading, data, error } = useSelector(state => state.covid)

    useEffect(() => {
        dispatch(getCovidData({ code, query }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code, query])

    const covidArr = Object.entries(data?.covid || {});

    return (
        <div className="bg-secondary text-white flex justify-center py-10">

            <div className="min-h-[80vh] bg-white rounded-lg shadow-lg p-8 max-w-3xl max-md:w-full text-black">

                <div className="flex justify-between items-center gap-5 mb-6">
                    <Link to={'/'} className="py-2 px-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition">Geri</Link>

                    <div className="flex items-center gap-3">
                        {
                            isLoading ? <Loader type="header" /> :
                                <>
                                    <img className="w-24 rounded" src={data?.country.flags.png} alt={data?.country.flags.alt} />
                                    <h1 className="text-gray-900 text-3xl font-semibold">{data?.country.name.common}</h1>
                                </>
                        }

                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative min-w-[350px]">

                    {
                        isLoading ? <Loader /> : error ? <Error error={error} retry={() => dispatch(getCovidData({ code }))} /> :
                            covidArr.map((item, key) => <InfoCard key={key} item={item} />)
                    }

                </div>

            </div>

        </div>
    )
}

export default Detail