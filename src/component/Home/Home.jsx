import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from "../Slice/CounterSlice"
import { useState } from 'react'
import PostsComponent from '../PostComponent'
import SocketComponent from '../Socket/socketConnection'

export function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState(0); // Track user input

    const handleInputChange = (event) => {
        const value = event.target.value;
        // Make sure the input is a number
        if (!isNaN(value)) {
            setInputValue(Number(value));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mx-auto"> 
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Counter</h2>

                <div className="flex items-center justify-center space-x-4 mb-6">
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                        className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Increment
                    </button>

                    <span className="text-3xl font-bold text-gray-700">{count}</span>

                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                        className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        Decrement
                    </button>
                </div>

                <div className="mb-6">
                    <input
                        type="number"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-300"
                        placeholder="Enter value"
                    />
                </div>

                <button
                    aria-label="Increment by Amount"
                    onClick={() => dispatch(incrementByAmount(inputValue))}
                    className="w-full py-3 bg-green-600 text-white rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                    Increment by Value
                </button>
            </div>
            
            {/* PostsComponent Section */}
            <div className="mt-8 w-full">
                <PostsComponent />
                <SocketComponent/>
            </div>
        </div>
    )
}

export default Home;
