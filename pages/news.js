
import React from 'react';
import PostForm from './postform';
import { useEffect, useState } from "react";
// using home.css

// export default function news() {
  

//   return (
//     <main>
//       <PostForm/>
      
      

//     </main>
//   )
// }



export default function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('../JSON/news.json');
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            }
        };

        fetchNews();
    }, []);

    return (

     <div>
       <PostForm/>
        <div className="mainBd flex mx-auto font-bold w-[80%] p-4 flex-wrap overflow-auto">
            {news.map((item, index) => (
                <span
                    key={index}
                    className="w-full h-fit min-h-[10%] p-4 mt-2 md:max-w-[80%] my-2 mx-auto border-2 border-purple-700 rounded-xl"
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
