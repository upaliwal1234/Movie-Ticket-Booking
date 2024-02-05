/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
function MovieCard({ image, title, language, id }) {

    const handleClick = async () => {
        try {
            const response = await axios.get(`http://localhost:5500/movie/${id}`);
            if (response.status == 200) {
                navigate(`/MovieDisplay/${id}`)
            }
        } catch (error) {
            toast.error("Not Available");
        }
    };
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
