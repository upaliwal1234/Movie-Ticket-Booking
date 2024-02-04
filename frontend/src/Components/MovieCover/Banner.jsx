/* eslint-disable react/prop-types */
import MovieCard from '../Movies/MovieCard'

function Banner({ name, bgImg, language, certificate, releaseDate, genre, duration }) {
    return (
        <div>
            {/* <div className={`bg-[url(${bgImg})]  h-[350px] md:h-[500px] bg-no-repeat bg-cover bg-center relative w-full`} > */}
            <div style={{ backgroundImage: `url(${bgImg})` }} className={`h-[350px] md:h-[500px] bg-no-repeat bg-cover bg-center relative w-full`} >
                <div className='flex px-20 py-5 h-full bg-black bg-opacity-70'>
                    <div className='w-[300px] flex justify-center items-center'>
                        <MovieCard
                            image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg"
                        />
                    </div>
                    <div className='flex flex-col justify-center w-full py-12 px-8'>
                        <div>
                            <h1 className=' text-gray-200 text-4xl font-bold'>{name}</h1>
                        </div>
                        <div className='my-2'>
                            <div className='bg-gray-300 text-gray-900 w-fit rounded-sm text-md font-light px-2 my-3'>{language}</div>
                            <div>
                                <h1 className='text-gray-200'> {duration} · {genre} · {certificate} · {releaseDate}</h1>
                            </div>
                        </div>
                        <div className='my-4'>
                            <button className='text-gray-200 text-md bg-orange-600 py-3 px-14 rounded'> Book tickets</button>
                        </div>

                    </div>
                </div>

            </div >


        </div>
    )
}

export default Banner