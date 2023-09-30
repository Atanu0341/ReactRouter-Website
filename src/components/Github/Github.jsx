import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Atanu0341")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md max-w-lg w-full">
        <img src={data.avatar_url} alt="Github Profile Picture" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-2xl font-bold mb-2">Username : {data.login}</h1>
        <div className="flex space-x-4 mb-4">
            <div className="flex items-center">
                <span className="font-bold">Followers:</span>
                <span className="ml-1">{data.followers}</span>
            </div>
            <div className="flex items-center">
                <span className="font-bold">Following:</span>
                <span className="ml-1">{data.following}</span>
            </div>
            <div className="flex items-center">
                <span className="font-bold">Repositories:</span>
                <span className="ml-1">{data.public_repos}</span>
            </div>
        </div>
    </div>
</div>
    
  );
}

export default Github;

export const githubInfoLoader = async () =>{
    const response =await fetch("https://api.github.com/users/Atanu0341")
    return response.json()
}
