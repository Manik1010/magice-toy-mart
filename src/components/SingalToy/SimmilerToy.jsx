import { FaHeart, FaCookie } from 'react-icons/fa'

const SimmilerToy = ({ toy }) => {
    const { category, details, name, price, qunatity, rating, sub_category, supplier, supplierEmail, url, _id } = toy

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-medium mt-24">{name}</h2>
                <p className='text-1xl font-medium'>Category:<span className='font-serif'>{category}</span></p>
                <p>Supplier: <span>{supplier}</span></p>
                <p>Numbers of Qunatity:{qunatity}</p>
                <div className='grid grid-cols-1'>
                    <div>
                        <FaHeart></FaHeart>Ratting{rating}
                    </div>
                    <div>
                        
                        <FaCookie></FaCookie>Qunatity:{price}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimmilerToy;