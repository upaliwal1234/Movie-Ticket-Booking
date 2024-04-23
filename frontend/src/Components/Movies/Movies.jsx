import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { tokenCheck } from '../../../helperToken.js';
import { useNavigate } from "react-router-dom"; import axios from "axios"
import baseURL from "../../DB"
import Star from '../../icons/yellowstar.svg';
import { Link } from "react-router-dom";

function Movies() {
    const navigate = useNavigate();
    useEffect(() => {
        let response = tokenCheck();
        if (!response) {
            navigate('/login');
        }
        else {
            navigate('/movies');
        }
    }, [])
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            let response = await axios.get(`${baseURL}/movies`);
            setData(response.data);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="flex flex-row flex-wrap gap-8 justify-center mt-10 my-6 sm:mx-10 md:mx-20">
            {data.map((item, index) => (
                <Link to={`/movies/${item.name}/${item._id}`} key={index}>
                    <div className="relative">
                    <MovieCard
                        image={item.poster}
                        title={item.name}
                        language={item.language}
                        certificate={item.certificate}
                        className='relative'
                    />
                    <div className="absolute top-[350px] rounded-md flex text-white text-lg justify-center   bg-blue-gray-900/[0.50] w-[220px] h-[30px]">
                        <img className="p-[4.5px]" src={Star}></img>
                        <div>{item.ratings}/10 Ratings</div>
                    </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Movies