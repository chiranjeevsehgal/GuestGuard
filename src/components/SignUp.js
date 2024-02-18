import React, { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function SignUp({ user, app }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setcnfPassword] = useState("");
  const [name, setname] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    if (user != null)
      navigate("/gatepass");
  }, [])

  // async function addNewUser() {
  //   const db = getFirestore(app);
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       // first: "Ada",
  //       name:{name},
  //       email: {email},
  //       password:{password}

  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }


  const createUser = (e) => {
    // if (handlevalidation()) {
      // setError(null)
      e.preventDefault()
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setError(null)
          setButtonDisabled(true)
          // console.log("Sign up success")
          setSuccess('Sign up success')
            // addNewUser()
            .then(() => {
              navigate("/signin")
            }).catch(() => {
              //  Show Relevant Error Message
              console.log("failed");
            });
        })
        .catch((error) => {
          // console.error("Error signing up:", error);
          setError('Error occured')
        });
    // }
    // else {
    //   console.log("Error");
    //   setError('Invalid Username or Password')
    // }
  };

  // const handlevalidation = () => {
  //   const datobj = {
  //     name: { name },
  //     email: { email },
  //     password: { password },
  //     cnfpassword: { cnfpassword }
  //   }

  //   let flag = true
  //   for (const key in datobj) {
  //     if (datobj.hasOwnProperty(key)) {

  //       // console.log(datobj[key][Object.keys(datobj[key])[0]]);
  //       if (datobj[key][Object.keys(datobj[key])[0]] === "") {
  //         flag = false
  //       }
  //     }
  //   }
  //   return flag
  // }

  return (

    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">

          {/* <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
          <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-purple-500 to-red-100 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div> */}
          <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-blue-100 to-cyan-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>


          {/* <div className="card bg-red-100 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div> */}
          {/* <div className="card bg-purple-500 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div> */}

          {/* Actual */}
          {/* <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div> */}

          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <a href="/"><span className="px-32 block mb-2 text-cyan-600">GuestGuard</span></a>
            <label htmlFor="" className="block mt-3 text-lg text-gray-700 text-center font-semibold">
              Sign Up
            </label>
            <form method="#" action="#" className="mt-10"
            onSubmit={createUser}>

              <div>
                <input
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                  type="text" placeholder="Name" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 focus:cursor" 
                  required/>
              </div>

              <div className="mt-7">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email" placeholder="Email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required
                  />
              </div>

              <div className="mt-7">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" 
                  required/>
              </div>

              <div className="mt-7">
                <input 
                onChange={(e) => setcnfPassword(e.target.value)}
                value={cnfpassword}
                placeholder="Confirm Password"
                  type="password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" 
                  required/>
              </div>

              <div className="mt-7">
                <button disabled={buttonDisabled} type="submit" className="bg-cyan-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Sign Up
                </button>
              </div>

              {success ?
                <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl bg-gray-50 text-gray-800 divide-gray-300 mt-7">
                <div className="flex flex-1 flex-col p-4 border-l-8 border-cyan-600">
                  <span className="text-2xl">Success</span>
                  <span className="text-xs text-gray-600">You have been successfully registered. Please sign in with your details</span>
                </div>
              </div>
                : null}
              
              {error ?
                <div className="flex items-center rounded shadow-md overflow-hidden max-w-xl relative bg-gray-50 text-gray-800 mt-7">
                  <div className="self-stretch flex items-center px-3 flex-shrink-0 bg-gray-300 text-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-xl font-bold">Error</h3>
                    <p className="text-sm text-gray-600">Error occured while registering. Please try later.</p>
                  </div>
                  <button className="absolute top-2 right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 p-2 rounded cursor-pointer">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
                : null}

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Or Register Using
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full">

                <button className="bg-red-800 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>

              <div className="mt-7">
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
    </div>
  )
}

export default SignUp;