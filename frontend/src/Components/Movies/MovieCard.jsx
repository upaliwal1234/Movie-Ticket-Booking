/* eslint-disable react/prop-types */
function MovieCard({ image, title, language }) {
    return (
        <div>
            <div className="relative h-[380px] w-[220px] flex justify-center rounded-md">
                <img
                    src={image}
                    alt={title}
                    className="h-full rounded-md"
                />
            </div>
            <div className=" my-4">
                <h1 className=" my-2 text-xl font-bold text-gray-900">{title}</h1>
                <h1 className=" my-1 text-sm font-thin text-gray-700">UA</h1>
                <h1 className=" my-1 text-sm font-thin text-gray-700">{language}</h1>
            </div>
        </div>
    )
}

export default MovieCard