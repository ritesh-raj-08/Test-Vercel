import React from 'react'
import { getPost } from '../app/api/postApi';
import { useEffect } from 'react';

const Posts = () => {

    const [posts, setPosts] = React.useState([]);

    const getData = async () => {
        try {
            const response = await getPost();
            console.log("Data fetched from API:", response.data);
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <section className="py-12 px-6 bg-linear-to-br from-slate-50 to-slate-100 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Latest Posts</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {posts.map((curElem) => {
                        const { id, title, body } = curElem;
                        return (
                            <div
                                key={id}
                                className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 border border-gray-100/50 hover:border-purple-300/50 cursor-pointer"
                            >
                                <h2 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                                    {title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                    {body}
                                </p>
                                <div className="flex gap-3">
                                    <button className="flex-1 bg-linear-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-lg font-medium text-sm hover:shadow-lg hover:opacity-90 transition-all duration-200 active:scale-95">
                                        Read More
                                    </button>
                                    <button className="flex-1 bg-blue-100 text-blue-600 py-2 px-4 rounded-lg font-medium text-sm hover:bg-blue-200 hover:shadow-md transition-all duration-200 active:scale-95">
                                        Share
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Posts