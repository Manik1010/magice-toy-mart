import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../assets/loginBanner.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa'
import useTitle from '../../../../hooks/useTitle';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log('Login page location: ', location);
    const from = location.state?.from?.pathname || "/";
    // console.log(location.state?.from?.pathname);
    useTitle("Login")

    const handelGoogleSineIn = ()=>{
        signInWithGoogle()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            // navigate('/')
            navigate(from, { replace: true });
        })
        .catch( error => console.log(error));
    }

    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.pass.value;
        // console.log(email, password);


        // signInUser( email, password)
        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const logUser = userCredential.user;
                console.log(logUser);
                //move home page ........................
                // navigate('/')
                navigate(from, { replace: true });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
                setError(errorMessage)
            });

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handelLogin}>
                            <h1 className="text-5xl font-bold">Login now!</h1>
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handelGoogleSineIn} className="btn btn-outline btn-success"><span className='mr-2'><FaGoogle></FaGoogle></span> Login With Google</button>
                            </div>

                            <p className='my-3 text=center'>First Register here... <Link className='text-orange-500 font-bold' to="/singup">Sing Up</Link></p>
                        </form>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <img src={login}></img>
                </div>
            </div>
        </div>
    )
};

export default Login;