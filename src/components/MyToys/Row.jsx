// import { useState } from "react";
import { Link } from "react-router-dom";
import Edit from "./Edit";
import Modal from "./Modal";
// import Swal from 'sweetalert2'

const Row = ({ mytoy, index, handelDeleteToy }) => {
    // const [toys, setToys] = useState(mytoy);
    // console.log(toys);


    const { category, details, name, price, qunatity, rating, sub_category, supplier, supplierEmail, url, _id } = mytoy

    // const handelDeleteToy = _id => {
    //     // console.log('delete person ID: ', _id);

    //     fetch(`https://magice-toy-mart-server-manik1010.vercel.app/deleteToy/${_id}`, {
    //         method: "DELETE"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount > 0) {

    //                 Swal.fire({
    //                     title: 'Successfully Deleted 🔥',
    //                     showClass: {
    //                         popup: 'animate__animated animate__fadeInDown'
    //                     },
    //                     hideClass: {
    //                         popup: 'animate__animated animate__fadeOutUp'
    //                     }
    //                 })
    //                 // toys = Array.from(toys);
    //                 const remaining = toys.filter(toy => toy._id !== _id);
    //                 setToys(remaining);


    //             }
    //         })
    // }
    const handelEditToy = () => {
        <Edit></Edit>
    }
    return (
        <tr>

            <td> {index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-25 h-20">
                            <img src={url} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td> {category}</td>
            <td> {sub_category}</td>
            <td>{qunatity}</td>
            <td>{rating}</td>
            <td>{price}</td>
            <th>

                {/* <label htmlFor="my-modal-5" className="btn btn-ghost btn-xs">Edite</label> */}
                {/* <button onClick={handelEditToy} className="btn btn-ghost btn-xs">Edite</button> */}
                <Link to={`/edit/${_id}`}>
                    <button className="btn btn-ghost btn-xs">Edite</button>
                </Link>

                <button onClick={() => handelDeleteToy(_id)} className="btn btn-ghost btn-xs">DELETE</button>
                {/* Put this part before </body> tag */}
                {/* <input type="checkbox" id="my-modal-5" className="modal-toggle" /> */}
                {/* <Modal
                key={mytoy._id}
                    mytoy={mytoy} 
                ></Modal> */}
            </th>
        </tr>
    );
};

export default Row;