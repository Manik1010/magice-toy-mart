import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Row from "./Row";
// import { key, keys } from "localforage";
import Swal from 'sweetalert2'
import useTitle from "../../../hooks/useTitle";

const MyToys = () => {

    const { user } = useContext(AuthContext)
    // console.log(user.email)
    const [mytoys, setMytoys] = useState([])

    useTitle("MyToys");
    



    useEffect(() => {
        fetch(`https://magice-toy-mart-server-manik1010.vercel.app/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMytoys(data);
            })
    }, [user])
    // const [toys, setToys] = useState(mytoys);
    const handelDeleteToy = _id => {
        // console.log('delete person ID: ', _id);

        fetch(`https://magice-toy-mart-server-manik1010.vercel.app/deleteToy/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {

                    Swal.fire({
                        title: 'Successfully Deleted 🔥',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    // toys = Array.from(toys);
                    const remaining = mytoys.filter(toy => toy._id !== _id);
                    setMytoys(remaining);


                }
            })
    }

    return (
        <div className="overflow-x-auto w-full">
            <h3 className="text-center font-bold text-5xl mb-3">My Toys</h3>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr className="text-center">
                        <th>
                            <label>
                                
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Toys</th>
                        <th>Category</th>
                        <th>Sub-category</th>
                        <th>Qunatity</th>
                        <th>Ratting</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <Row></Row> */}
                    {
                        mytoys?.map((mytoy, index) => (
                            <Row
                                key={mytoy._id}
                                index={index}
                                mytoy={mytoy}
                                handelDeleteToy={handelDeleteToy}
                            ></Row>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;