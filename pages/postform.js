import { useState } from 'react';
import { useRouter } from 'next/router';

const PostForm = () => {
    const router = useRouter();
    const pageName = router.pathname.split('/').pop() || 'home';

    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({ title: '', content: '' });

    const saveData = async (pgname, formData) => {
        try {
            const response = await fetch('/api/savePost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pgname, formData }),
            });

            const result = await response.json();
            console.log(result.message || result.error);
        } catch (error) {
            console.error('Failed to save data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePost = async (e) => {
        e.preventDefault();
        if (formData.title && formData.content) {
            setPosts((prevPosts) => [...prevPosts, formData]);
            await saveData(pageName, formData);
            setFormData({ title: '', content: '' });
        }
    };

    return (
        <div>
            <form
                id="postForm"
                onSubmit={handlePost}
                className="postForm w-full h-1/16 fixed bg-gray-400 bottom-0 right-0 p-4 mt-2 mx-auto flex flex-wrap"
            >
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                    className="w-[20%] h-10 min-w-[120px] font-bold border-2 border-blue-800 rounded-xl p-2 mt-2 mx-2"
                />
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Content"
                    className="w-[60%] h-20 font-bold min-w-[160px] rounded-xl border-2 border-blue-800 p-2 mt-2 mx-2 text-wrap resize-none"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-1 w-[10rem] h-[2rem] rounded mt-8"
                >
                    Submit
                </button>
            </form>
            <div className="mainBd flex mx-auto font-bold w-[80%] p-4 flex-wrap overflow-auto">
                {posts.map((post, index) => (
                    <span
                        key={index}
                        className="w-full h-fit min-h-[10%] p-4 mt-2 md:max-w-[80%] my-2 mx-auto border-2 border-purple-700 rounded-xl"
                    >
                        <u>
                            <strong className="text-xl">{post.title}</strong>
                        </u>
                        <p>{post.content}</p>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PostForm;
