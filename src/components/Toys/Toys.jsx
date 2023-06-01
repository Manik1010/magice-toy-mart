import { useEffect, useState } from "react";
import Table from "./Table";
import useTitle from "../../../hooks/useTitle";

const Toys = () => {
    const [toys, setToys] = useState([]);
    // useTitle("Login")
    useTitle("Toys")
    // function setPageTitle(route) {
    //     var pageTitle = document.getElementById('pageTitle');
    //     pageTitle.innerText = 'toyMart | ' + route;
    //   }
    //   var aboutRoute = 'About us';
    //   setPageTitle(aboutRoute);

    // const handleSearch = event =>{
    //     event.preventDefault();
    //     const searchText = event.target.searchText.value;
    //     console.log(searchText)
    //     // fetch(`https://assignment-11-server-brown-sigma.vercel.app/toys?name=${searchText}`)
    //     // .then(res=>res.json())
    //     // .then(data=>setToys(data))
    // }

    useEffect(() => {
        fetch("https://magice-toy-mart-server-manik1010.vercel.app/allToy")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setToys(result);
            })
    }, [])

    useEffect(() => {
        fetch(`https://magice-toy-mart-server-manik1010.vercel.app/toySearchByName/e`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // setToys(result);
            })
    }, [])
    const handleSearch = event =>{
        event.preventDefault();
        const searchText = event.target.searchText.value;
        console.log(searchText)
        fetch(`https://assignment-11-server-brown-sigma.vercel.app/toySearchByName?name=${searchText}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    }


    return (
        <div className="overflow-x-auto w-full">
            {/* <div className="flex items-center justify-center my-2">
                <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-300 py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button onSubmit={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">
                    Search
                </button>
            </div> */}
            <div className="md:w-1/5 mx-auto my-5">
                <form onSubmit={handleSearch} className="input-group w-full">
                    <input type="text" name="searchText" placeholder="search by toy name" className="input input-bordered" />
                    <button type="submit" className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </form>
            </div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Toy</th>
                        <th>Supplier</th>
                        <th>Supplier Email</th>
                        <th>Category</th>
                        <th>Sub-category</th>
                        <th>Ratting</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    toys?.map(toy => (
                        <Table
                            key={toy._id}
                            toy={toy}
                        ></Table>
                    ))
                }
            </table>
        </div>
    );
};

export default Toys;