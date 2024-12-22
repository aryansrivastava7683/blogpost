
import React from 'react';
import PostForm from './postform';
import { useEffect, useState } from "react";





export default function Write() {
    const [Write, setWrite] = useState([]);

    useEffect(() => {
        const fetchWrite = async () => {
            try {
                const response = await fetch('../JSON/writeups.json');
                const data = await response.json();
                setWrite(data);
            } catch (error) {
                console.error("Failed to fetch Write:", error);
            }
        };

        fetchWrite();
    }, []);

    return (

     <div>
       <PostForm/>
        <div className="mainBd flex mx-auto font-bold w-[80%] p-4 flex-wrap overflow-auto">
            {Write.map((item, index) => (
                <span
                    key={index}
                    className="w-full h-fit min-h-[10%] p-4 mt-2 md:max-w-[80%] my-2 mx-auto border-2 border-blue-700 rounded-xl"
                >
                    <u>
                        <strong className="text-xl">{item.title}</strong>
                    </u>
                    <p>{item.content}</p>
                </span>
            ))}
        </div>
     </div>
    );
}


