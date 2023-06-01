import { Link } from 'react-router-dom';
import login from '../../../assets/loginBanner.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../../../hooks/useTitle';

const Register = () => {
    const { createUser, saveProfile } = useContext(AuthContext)
    useTitle("Registation")
    const handelSingup = event => {
        event.preventDefault();

        const frm = event.target;

        const name = frm.name.value;
        const pass = frm.pass.value;
        const email = frm.email.value;
        const url = frm.url.value;
        // console.log(name, email, pass, url);

        createUser( email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                saveUserProfile(name,url);
                frm.reset();
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });

    }
    const saveUserProfile = (name,url)=>{
        saveProfile(name,url)
        .then(()=>{toast.success('Welcome! You registration is successfully done')})
        .catch((error)=>toast.error(error.message))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Register Here...!</h1>
                        <form onSubmit={handelSingup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='pass' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='url' placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type='submit' value='Register'></input>
                            </div>
                        </form>
                        <p className='my-3 text=center'>Already you are Registed!! <Link className='text-orange-500 font-bold' to="/login">Login</Link></p>
                    </div>
                </div>
                <div className="w-1/2 mr-12">

                    <img src={login}></img>
                </div>
            </div>
        </div>
    );
};

export default Register;