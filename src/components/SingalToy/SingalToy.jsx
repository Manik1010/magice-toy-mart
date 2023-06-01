import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from 'react';
import SimmilerToy from './SimmilerToy';
const SingalToy = () => {
    const singalToy = useLoaderData();
    // const { title, _id, price, img } = singalToy;
    console.log(singalToy);
    const [toys, setToys] = useState([]);
    const singalData = useLoaderData()
    // console.log(singalData);
    const {  details, name, price, qunatity, rating, sub_category, supplier, supplierEmail, url, _id } = singalData

    const res = sub_category;
    console.log(res);
    // let mat = "Math Learning";
    // let mat = 42;


    useEffect( () => {
        fetch("https://magice-toy-mart-server-manik1010.vercel.app/category/Math%20Learning")
        .then( res => res.json())
        .then(result => {
            // console.log(result);
            setToys(result);
        })
    } , [])
    

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={url} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-semibold">Name: <span>Educational Insights Multiplication</span></h1>
                        {/* <Rating
                            style={{ maxWidth: 180 }}
                            value={3}
                            readOnly
                        /> */}

                        <p className="py-2"><span className="font-semibold">Category:</span> {name}</p>
                        <p className="py-2"><span className="font-semibold">Sub-Category: </span> {sub_category}</p>
                        <p className="py-2"><span className="font-semibold">Number of Quantitiy: </span> {qunatity}</p>
                        <p className="py-2"><span className="font-semibold">Price: </span> {price}</p>
                        <p className="py-2"><span className="font-semibold">Supplier:</span> {supplier}</p>
                        <hr />
                        <p className="py-6"><span className="font-semibold">Details: </span>{details}</p>

                    </div>
                </div>
            </div>
            <h1 className="text-5xl font-bold text-center my-4 ">Similler Toys</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
    
                  {
                        toys?.map( toy => (
                            <SimmilerToy
                                key={toy._id}
                                toy={toy}
                            ></SimmilerToy>
                        ))
                    }


                
            </div>

        </div>
    );
};

export default SingalToy;