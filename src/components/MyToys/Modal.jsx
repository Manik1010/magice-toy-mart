import { useState } from 'react';
import Swal from 'sweetalert2'

const Modal = ({ mytoy }) => {
    const [control, setControl] = useState(false)
    console.log(mytoy);
    const { category, details, name, price, qunatity, rating, sub_category, supplier, supplierEmail, url, _id } = mytoy;
    // console.log(_id);
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
        const id = frm.id.value;

        // console.log(name, qunatity, supplier, teast, category, details, url);
        const updateToy = { id, name, qunatity, supplier, supplierEmail, price, category, sub_category, details, url, rating }
        console.log(updateToy);

        // console.log(user.name)
        fetch(`http://localhost:5000/updateToy/${id}`, {
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
        // <>
        //     <label htmlFor="my-modal-5" className="btn btn-ghost btn-xs">Edite</label>
        //     <div className="modal">
        //         <div className="modal-box w-11/12 max-w-5xl">
        //             <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        //             <div className='bg-[#F4F3F0] p-16'>
        //                 <h2 className='text-3xl font-extrabold text-center'>Update a Toy</h2>
        //                 <form>
        //                     <div className='md:flex mb-6'>
        //                         <div className="form-control md:w-1/2">
        //                             <label className="label">
        //                                 <span className="label-text">Toy Name</span>
        //                             </label>
        //                             <label className="input-group">
        //                                 <input type="text" name='name' value={name} className="input input-bordered w-full" />
        //                             </label>
        //                         </div>
        //                         <div className="form-control md:w-1/2 ml-4">
        //                             <label className="label">
        //                                 <span className="label-text">Available Qunatity</span>
        //                             </label>
        //                             <label className="input-group">
        //                                 <input type="text" name='qunatity' value={qunatity} className="input input-bordered w-full" />
        //                             </label>
        //                         </div>
        //                     </div>
        //                     <div className='md:flex mb-6'>
        //                         <div className="form-control md:w-1/2">
        //                             <label className="label">
        //                                 <span className="label-text">Supplier</span>
        //                             </label>
        //                             <label className="input-group">
        //                                 <input type="text" name='supplier' value={supplier} className="input input-bordered w-full" />
        //                             </label>
        //                         </div>
        //                         <div className="form-control md:w-1/2 ml-4">
        //                             <label className="label">
        //                                 <span className="label-text">Supplier Email</span>
        //                             </label>
        //                             <label className="input-group">
        //                                 <input type="text" name='supplierEmail' value={supplierEmail} className="input input-bordered w-full" />
        //                             </label>
        //                         </div>
        //                     </div>
        //                     <div className='md:flex mb-6'>
        //                         <div className="form-control md:w-1/2">
        //                             <label className="label">
        //                                 <span className="label-text">Category</span>
        //                             </label>
        //                             <label className="input-group">
        //                                 <input type="text" name='category' value={name} className="input input-bordered w-full" />
        //                             </label>
        //                         </div>
        //                         <div className="form-control md:w-1/2 ml-4">
        //                             <label className="label">
        //                                 <span className="label-text">Sub-category</span>
        //                             </label>
        //                             <label className="input-group">
        //                                 <input type="text" name='sub_category' value={sub_category} className="input input-bordered w-full" />
        //                             </label>
        //                         </div>
        //                     </div>
        //                     <div className='md:flex mb-6'>
        //                         <div className="form-control md:w-1/2">
        //                             <label className="label">
        //                                 <span className="label-text">Rating </span>
        //                             </label>
        //                             <label className="input-group">
        //                                 <input type="text" name='rating' value={rating} className="input input-bordered w-full" />
        //                             </label>
        //                         </div>
        //                         <div className="form-control md:w-1/2 ml-4">
        //                             <label className="label">
        //                                 <span className="label-text">Details</span>
        //                             </label>
        //                             <label className="input-group">
        //                                 <input type="text" name='details' value={details} className="input input-bordered w-full" />
        //                             </label>
        //                         </div>
        //                     </div>
        //                     <div className='md:flex mb-6'>
        //                         <div className="form-control md:w-1/2">
        //                             <label className="label">
        //                                 <span className="label-text">Photo URL</span>
        //                             </label>
        //                             <label className="input-group">
        //                                 <input type="text" name='url' value={url} className="input input-bordered w-full" />
        //                             </label>
        //                         </div>
        //                         <div className="form-control md:w-1/2 ml-4">
        //                             <label className="label">
        //                                 <span className="label-text">Price</span>
        //                             </label>
        //                             <label className="input-group">
        //                                 <input type="text" name='price' value={price} className="input input-bordered w-full" />
        //                             </label>
        //                         </div>
        //                     </div>

        //                     <input type='submit' value="UpDate" className="btn btn-block" />

        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </>
        <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div className='bg-[#F4F3F0] p-16'>
                    <h2 className='text-3xl font-extrabold text-center'>Update a Toy</h2>
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
                                    <input type="text" name='category' defaultValue={name} className="input input-bordered w-full" />
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
                                <label className="input-group">
                                    <input type="text" name='id' defaultValue={_id} className="input input-bordered w-full hidden" />
                                </label>
                            </div>
                        </div>

                        <input htmlFor="my-modal-5" type='submit' value="UpDate" className="btn btn-block" />
                        {/* <label htmlFor="my-modal-5">
                            <input htmlFor="my-modal-5" type='submit' value="UpDate" className="btn btn-block"></input>
                        </label> */}

                    </form>
                </div>
            </div>
        </div>

    );
};

export default Modal;