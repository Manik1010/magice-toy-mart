import { Link } from "react-router-dom";


const Table = ({ toy }) => {
    // console.log(toy)
    const { category, details, name, price, qunatity, rating, sub_category, supplier, supplierEmail, url, _id } = toy || {}
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-25 h-20">
                                <img src={url} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold"> {name}</div>

                        </div>
                    </div>
                </td>
                <td>
                    {supplier}
                </td>
                <td>{supplierEmail}</td>
                <td> {category}</td>
                <td> {sub_category}</td> 
                <td>{rating}</td>
                <th>
                    <Link to={`/allToy/${_id}`}>
                        <button className="btn btn-ghost btn-xs">View</button>
                    </Link>
                </th>
            </tr>
        </tbody>
    );
};

export default Table;