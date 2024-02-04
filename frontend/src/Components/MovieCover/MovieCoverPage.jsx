import { useParams } from "react-router-dom"
import Banner from "./Banner"

function MovieCoverPage() {
    let { movieName } = useParams()
    return (
        <div>
            <Banner
                name={movieName}
                bgImg="https://assets-in.bmscdn.com/discovery-catalog/events/et00304730-mdwzwgtmss-landscape.jpg"
                language="Hindi"
                certificate="UA"
                releaseDate="25 Jan, 2024"
                genre="Action, Thriller"
                duration="2h 47m"
            />
            <div className='my-10 mx-24 pb-8 border-b'>
                <h1 className='my-3 text-2xl font-bold text-gray-900'>About the movie</h1>
                <p className='text-md font-light text-gray-700'>Top IAF aviators come together in the face of imminent danger, to form Air Dragons. Fighter unfolds their camaraderie, brotherhood and battles, internal and external.</p>
            </div>
            <div className='my-10 mx-24 pb-8 border-b'>
                <h1 className='my-3 text-2xl font-bold text-gray-900'>Cast</h1>
                <div className='flex gap-10'>
                    <div className='w-32 mt-3'>
                        <img className='rounded-full' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hrithik-roshan-833-1705302956.jpg" alt="" />
                        <div className='mt-3 flex flex-col text-center w-full'>
                            <h1 className='text-gray-900'>Hritik Roushan</h1>
                            <h3 className='text-gray-700 font-light text-sm'>as Patty</h3>
                        </div>
                    </div>
                    <div className='w-32 mt-3'>
                        <img className='rounded-full' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hrithik-roshan-833-1705302956.jpg" alt="" />
                        <div className='mt-3 flex flex-col text-center w-full'>
                            <h1 className='text-gray-900'>Hritik Roushan</h1>
                            <h3 className='text-gray-700 font-light text-sm'>as Patty</h3>
                        </div>
                    </div>
                    <div className='w-32 mt-3'>
                        <img className='rounded-full' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hrithik-roshan-833-1705302956.jpg" alt="" />
                        <div className='mt-3 flex flex-col text-center w-full'>
                            <h1 className='text-gray-900'>Hritik Roushan</h1>
                            <h3 className='text-gray-700 font-light text-sm'>as Patty</h3>
                        </div>
                    </div>
                    <div className='w-32 mt-3'>
                        <img className='rounded-full' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hrithik-roshan-833-1705302956.jpg" alt="" />
                        <div className='mt-3 flex flex-col text-center w-full'>
                            <h1 className='text-gray-900'>Hritik Roushan</h1>
                            <h3 className='text-gray-700 font-light text-sm'>as Patty</h3>
                        </div>
                    </div>
                    <div className='w-32 mt-3'>
                        <img className='rounded-full' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hrithik-roshan-833-1705302956.jpg" alt="" />
                        <div className='mt-3 flex flex-col text-center w-full'>
                            <h1 className='text-gray-900'>Hritik Roushan</h1>
                            <h3 className='text-gray-700 font-light text-sm'>as Patty</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div className='my-10 mx-24 pb-8 border-b'>
                <h1 className='my-3 text-2xl font-bold text-gray-900'>Crew</h1>

            </div>
        </div>
    )
}

export default MovieCoverPage