import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Serivces from "../Serivces/Serivces";
import { useEffect, useState } from 'react';
import MathToys from "./MathToys";
import Eng from "./Eng";
import Sci from "./Sci";
import About from "../About/About";

const Home = () => {
    const [toys, setToys] = useState([]);
    const [engToys, setEngToys] = useState([]);
    const [sciToys, setSciToys] = useState([]);

    const [activeTab, setActiveTab] = useState('tab1');
    const handleTabSelect = (tab) => {
        setActiveTab(tab);
    };
    useEffect(() => {
        // fetch("http://localhost:5000/category/Math%20Learning")
        fetch("https://magice-toy-mart-server-manik1010.vercel.app/category/Math%20Learning")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setToys(result);
            })
    }, [])
    useEffect(() => {
        fetch("https://magice-toy-mart-server-manik1010.vercel.app/category/Engineering%20Kits")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setEngToys(result);
            })
    }, [])
    useEffect(() => {
        fetch("https://magice-toy-mart-server-manik1010.vercel.app/category/Science%20Kits")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setSciToys(result);
            })
    }, [])
    // console.log(toys)

    let tabContent;
    if (activeTab === 'sci') {
        tabContent = <>
            {/* <Sci></Sci> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    sciToys?.map(toy => (
                        <Sci
                            key={toy._id}
                            toy={toy}
                        ></Sci>
                    ))
                }
            </div>

        </>;
    } else if (activeTab === 'math') {
        tabContent = <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                    toys?.map(toy => (
                        <Eng
                            key={toy._id}
                            toy={toy}
                        ></Eng>
                    ))
                }

            </div>
        </>;
    } else if (activeTab === 'eng') {
        tabContent = <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                    engToys?.map(toy => (
                        <MathToys
                            key={toy._id}
                            toy={toy}
                        ></MathToys>
                    ))
                }
            </div>
        </>;
    }

    return (
        <div>
            <Banner></Banner>
            <div className="flex flex-col items-center my-10">
                <h1 className="text-center font-bold text-5xl mb-3">Educational and Learning Toys</h1>
                <div className="border-b border-gray-200">
                    <nav className="flex">
                        <button
                            className={`px-4 py-2 font-medium ${activeTab === 'sci' ? 'border-b-2 border-blue-500' : ''
                                }`}
                            onClick={() => handleTabSelect('sci')}
                        >
                            Science Kits
                        </button>
                        <button
                            className={`px-4 py-2 font-medium ${activeTab === 'math' ? 'border-b-2 border-blue-500' : ''
                                }`}
                            onClick={() => handleTabSelect('math')}
                        >
                            Math Learning
                        </button>
                        <button
                            className={`px-4 py-2 font-medium ${activeTab === 'eng' ? 'border-b-2 border-blue-500' : ''
                                }`}
                            onClick={() => handleTabSelect('eng')}
                        >
                            Engineering Kits
                        </button>
                    </nav>
                </div>
                <div className="mt-4">{tabContent}</div>
            </div>

            <Gallery></Gallery>

            <Serivces></Serivces>
            <About></About>
            
        </div>
    );
};

export default Home;