import { Link } from "react-router-dom";

const Sci = ({ toy }) => {
    const { category, details, name, price, qunatity, rating, sub_category, supplier, supplierEmail, url, _id } = toy
    return (
        <div className="card w-96 bg-base-100 shadow-xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <figure className="px-10 pt-10">
                <img src={url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Sub Category: {sub_category}</p>
                <p>Supplier: {supplier}</p>
                <p>Ratting: {rating}</p>
                {/* <div className="card-actions">
                    <Link to={`/singalToy/:${_id}`}>
                        <button className="btn btn-outline btn-secondary">View</button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default Sci;