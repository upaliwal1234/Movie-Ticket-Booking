import { Link } from 'react-router-dom'


function CinemaCard({ cinemaid,cinemaname, movie }) {
    return (
        <div>
            <Link to={`/cinema/${cinemaid}`}>
            <div className="relative flex w-full min-w-[20rem] max-w-[26rem] hover:bg-gray-200 flex-col rounded-xl bg-transparent bg-clip-border border-2 text-gray-700 shadow-none">
            <div className="relative flex items-center gap-4 p-3 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                    <h5
                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {cinemaname}
                    </h5>
                    <div className="flex items-center gap-0 5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="w-5 h-5 text-yellow-700">
                        <path fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="w-5 h-5 text-yellow-700">
                        <path fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="w-5 h-5 text-yellow-700">
                        <path fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="w-5 h-5 text-yellow-700">
                        <path fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="w-5 h-5 text-yellow-700">
                        <path fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"></path>
                    </svg>
                    </div>
                </div>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                    {movie}
                </p>
                </div>
            </div>
            </div>
            </Link>
        </div>
    )
}

export default CinemaCard