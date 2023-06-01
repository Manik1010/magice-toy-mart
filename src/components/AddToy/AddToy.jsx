import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import useTitle from "../../../hooks/useTitle";

const AddToy = () => {

    const { user } = useContext(AuthContext)
    useTitle("AddToy")

    const handelAddToy = event => {
        event.preventDefault();

        const frm = event.target;

        const name = frm.name.value;
        const qunatity = frm.qunatity.value;
        const supplier = frm.supplier.value;
        const supplierEmail = frm.supplierEmail.value;
        const price = frm.price.value;
        const rating = frm.rating.value;
        const category = frm.category.value;
        const sub_category = frm.sub_category.value;
        const details = frm.details.value;
        const url = frm.url.value;

        // console.log(name, qunatity, supplier, teast, category, details, url);
        const addToy = { name, qunatity, supplier, supplierEmail, price, category, sub_category, details, url, rating }
        // console.log(addToy);
        
        console.log(user.name)
        fetch('http://localhost:5000/postToy', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                      frm.reset();
                  }
            })

    }
    return (
        <div className='bg-[#F4F3F0] p-16'>
            <h2 className='text-3xl font-extrabold text-center'>Add a Toy</h2>
            <form onSubmit={handelAddToy}>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Qunatity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='qunatity' placeholder="Available Qunatity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' placeholder="Supplier Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Supplier Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplierEmail' value={user.email} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' value='Educational and Learning Toys' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='sub_category' placeholder="Sub-category" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='rating' placeholder="Rating " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='url' placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type='submit' value="Add Toy" className="btn btn-block" />
                
            </form>
        </div>
    );
};

export default AddToy;