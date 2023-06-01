import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Edit = () => {
    const editToy = useLoaderData();
    // const { title, _id, price, img } = singalToy;
    // console.log(editToy);
    const [control, setControl] = useState(false)

    const { category, details, name, price, qunatity, rating, sub_category, supplier, supplierEmail, url, _id } = editToy
    const handelUpdate = event => {
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
        // const id = frm.id.value;

        // console.log(name, qunatity, supplier, teast, category, details, url);
        const updateToy = {name, qunatity, supplier, supplierEmail, price, category, sub_category, details, url, rating }
        console.log(updateToy);

        fetch(`https://magice-toy-mart-server-manik1010.vercel.app/updateToy/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    //   frm.reset();
                    setControl(!control);
                }
            })



    }


    return (
        <div className='bg-[#F4F3F0] p-16'>
            <h2 className='text-3xl font-extrabold text-center'>Edit Toy</h2>
            <form onSubmit={handelUpdate}>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Qunatity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='qunatity' defaultValue={qunatity} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' defaultValue={supplier} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Supplier Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplierEmail' defaultValue={supplierEmail} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' defaultValue={category} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='sub_category' defaultValue={sub_category} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='rating' defaultValue={rating} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' defaultValue={details} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='url' defaultValue={url} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' defaultValue={price} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="input-group">
                        <input type="text" name='id' defaultValue={_id} className="input input-bordered w-full hidden" />
                    </label>
                </div>

                <input type='submit' value="Update Toy" className="btn btn-block" />

            </form>
        </div>
    );
};

export default Edit;