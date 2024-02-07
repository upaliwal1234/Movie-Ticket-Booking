import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import axios from "axios"
import baseURL from "../../DB"
import { Link } from "react-router-dom";

function Movies() {
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
                <Link to={`/movies`}>
                    <MovieCard key={index}
                        image={item.poster}
                        title={item.name}
                        language={item.language}
                        certificate={item.certificate}
                    />
                </Link>
            ))}
        </div>
    )
}

export default Movies