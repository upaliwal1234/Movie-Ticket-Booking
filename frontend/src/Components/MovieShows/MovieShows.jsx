import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import baseURL from "../../DB";

function MovieShows() {

    const { movieName, date } = useParams();

    const [data, setDate] = useState(null);

    const [map, setMap] = useState({});
    const [map1, setMap1] = useState([]);

    const fetchDate = async () => {
        try {
            let response = await axios(`${baseURL}/movie/banner/${movieName}/${date}`);
            let map = new Map();
            let map1 = new Map();
            for (let x of response.data) {
                if (!map.has(x.cinema._id)) {
                    map.set(x.cinema._id, []);
                    map1.set(x.cinema._id, {});
                }
                map.get(x.cinema._id).push(x);
                map1.set(x.cinema._id, x.cinema)

            }
            setDate(response.data);
            setMap(Object.fromEntries(map));
            setMap1([...map1.values()]);
        } catch (err) {
            console.error(err);
        }
    }

    // console.log(map);
    console.log(map);

    useEffect(() => {
        fetchDate();
    }, [])
    return (
        <div>
            <div className="py-8 px-28 border ">
                <h1 className="text-4xl">{movieName}</h1>
            </div>
            <div className="border-bottom py-4 px-28">
                <h2>Date and all</h2>
            </div>
            <div className=" py-2 px-20 bg-gray-200 h-[400px]">
                <div className="bg-white">
                    <div className="flex text-xs justify-end px-4 py-2 items-center gap-4 font-extralight border-b">
                        <div className="flex items-center gap-2">
                            <div className=" w-2.5 h-2.5 bg-light-green-400 rounded-full" />
                            <h1>Available</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className=" w-2.5 h-2.5 bg-red-400 rounded-full" />
                            <h1>Fast Filling</h1>
                        </div>
                    </div>

                    <div>
                        {map1.map((item, index) => {

                            return (
                                <div key={index} className="border-b min-h-24 py-5 px-12 flex gap-8">
                                    <div>
                                        <h1 className="text-sm font-bold">{item.name}</h1>
                                        <h2 className="text-sm">{item.address}</h2>
                                    </div>
                                    <div className="border">
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MovieShows