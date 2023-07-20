import React  from "react";
import { useSelector } from "react-redux";

const SongList = () => {
    let data = useSelector((state) => state.data);

    return (
        <div>
            <h1>Songs List</h1>
            {
                data.map((song) => (
                    <h3>{song.name}</h3>
                ))
            }
        </div>
    )
};

export default SongList;