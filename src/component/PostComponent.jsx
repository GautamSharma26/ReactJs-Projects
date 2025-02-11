import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../component/Slice/CounterSlice';

const PostsComponent = () => {
    const dispatch = useDispatch();

    // Get posts, loading state, and error from Redux store
    const posts = useSelector((state) => state.counter.posts);
    const status = useSelector((state) => state.counter.status);
    const error = useSelector((state) => state.counter.error);

    // Function to handle button click and fetch data
    const handleFetchData = () => {
        dispatch(fetchPosts()); // Dispatch the async action to fetch posts
    };

    let content;

    if (status === 'loading') {
        content = <p className="text-gray-500 text-lg">Loading...</p>;
    } else if (status === 'succeeded') {
        content = (
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                        <p className="text-gray-600">{post.body}</p>
                    </li>
                ))}
            </ul>
        );
    } else if (status === 'failed') {
        content = <p className="text-red-500 text-lg">Error: {error}</p>;
    }

    return (
        <div className="my-8 max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Posts</h2>

            {/* Button to trigger fetch */}
            <div className="text-center mb-6">
                <button
                    onClick={handleFetchData}
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                >
                    Fetch Data
                </button>
            </div>

            {/* Display the content based on the status */}
            {content}
        </div>
    );
};

export default PostsComponent;
