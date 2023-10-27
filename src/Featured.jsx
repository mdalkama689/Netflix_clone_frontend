import React from "react";

const Featured = ({ type }) => {
  return (
    <div className=" bg-slate-500" >
      {type && (
        <div className="ml-[100px] py-6" >
          <span className="text-white text-2xl font-medium" >{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" className="ml-4 rounded-lg text-white bg-black text-base font-medium border border-white outline-none py-1 px-2" >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Featured;
