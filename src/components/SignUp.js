import React, { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { reactLocalStorage } from 'reactjs-localstorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp({ user, app, setUserEmail, setUsername, setUserNumber }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setcnfPassword] = useState("");
  const [fullname, setname] = useState("");
  // const [success, setSuccess] = useState(null);
  // const [error, setError] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();


  useEffect(() => {
    if (user != null)
      navigate("/gatepass");
  }, [])




  const createUser = (e) => {

    e.preventDefault()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // setError(null)
        setButtonDisabled(true)
        // setSuccess('Sign up success')
        toast.success('Signup successful, You will now be redirected to the dashboard.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
        addNewUser()
          .then(() => {
            reactLocalStorage.remove('udata');
            reactLocalStorage.setObject('udata', {
              'name': fullname,
              'email': email
            });

            navigate("/signin")
          }).catch((e) => {
            console.log(e);

          });
      })
      .catch((error) => {
        let errorMessage = error.code.split("/").pop().replace(/-/g, " ");

        errorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
        // console.log(errorMessage);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      });
  };

  //Updated google auth

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {


        reactLocalStorage.remove('udata');
        reactLocalStorage.setObject('udata', {
          'name': auth.currentUser.displayName,
          'email': auth.currentUser.email
        });

        navigate("/signin")



      }).catch((error) => {
        // Handle Errors here.
        let errorMessage = error.code.split("/").pop().replace(/-/g, " ");

        errorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
        // console.log(errorMessage);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
        // setError('Google Sign-in Failed');
      });
  };


  async function addNewUser() {
    const db = getFirestore(app);
    try {
      const docRef = await setDoc(doc(db, "signUp", email), {
        fullname,
        email

      });

      setUserEmail(email)
      setUsername(fullname)
    } catch (error) {
      console.error(error);
      let errorMessage = error.code.split("/").pop().replace(/-/g, " ");

      errorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
      // console.log(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
  }

  return (

    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
        <div className="relative sm:max-w-sm w-full">

          <div className="sm:absolute inset-0 -mr-3.5 bg-gradient-to-r from-blue-100 to-cyan-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl hidden sm:block"></div>

          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 ">
            <a href="/"><span className="px-32 mb-2 text-cyan-600 flex justify-center">GuestGuard</span></a>
            <label htmlFor="" className="block mt-3 text-lg text-gray-700 text-center font-semibold">
              Sign Up
            </label>
            <form method="#" action="#" className="mt-10" onSubmit={createUser}>

              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm">Name</label>
                <input
                  onChange={(e) => setname(e.target.value)}
                  value={fullname}
                  type="text" placeholder="Name" className="p-3 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required />
              </div>

              <div className="mt-7 flex flex-col">
                <label htmlFor="email" className="text-sm">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email" placeholder="Email" className="p-3 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required
                />
              </div>

              <div className="mt-7 flex flex-col">
                <label htmlFor="password" className="text-sm">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password" className="p-3 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required />
              </div>

              <div className="mt-7 flex flex-col">
                <label htmlFor="password" className="text-sm">Password</label>
                <input
                  onChange={(e) => setcnfPassword(e.target.value)}
                  value={cnfpassword}
                  placeholder="Confirm Password"
                  type="password"
                  className="p-3 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required />
              </div>

              <div className="mt-7 flex flex-col">
                <button disabled={buttonDisabled} type="submit" className="bg-cyan-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Sign Up
                </button>
              </div>

              {/* {success &&
                <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl bg-gray-50 text-gray-800 divide-gray-300 mt-7">
                  <div className="flex flex-1 flex-col p-4 border-l-8 border-cyan-600">
                    <span className="text-2xl">Success</span>
                    <span className="text-xs text-gray-600">You have been successfully registered. Please sign in with your details</span>
                  </div>
                </div>
              } */}

              {/* {error &&
                <div className="flex items-center rounded shadow-md overflow-hidden max-w-xl relative bg-gray-50 text-gray-800 mt-7">
                  <div className="self-stretch flex items-center px-3 flex-shrink-0 bg-gray-300 text-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-xl font-bold">Error</h3>
                    <p className="text-sm text-gray-600">Error occurred while registering. Please try later.</p>
                  </div>
                  <button className="absolute top-2 right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 p-2 rounded cursor-pointer">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              } */}

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Or Continue With
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button type="button" onClick={handleGoogle} className="bg-red-500 border-none px-20 py-3 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>

              <div className="mt-7 mb-4">
                <div className="flex justify-center items-center">
                  <label className="mr-2">Already a user?</label>
                  <a href="/signin" className=" text-cyan-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Sign In
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>

  )
}

export default SignUp;