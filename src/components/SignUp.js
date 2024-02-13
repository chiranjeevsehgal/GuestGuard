import React, { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function SignUp({ user, app }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (user != null)
      navigate("/gatepass");
  }, [])

  async function addNewUser() {
    const db = getFirestore(app);
    try {
      const docRef = await addDoc(collection(db, "users"), {
        // first: "Ada",
        name:{name},
        email: {email},
        password:{password}

      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  const createUser = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Sign up success");
        addNewUser()
          .then(() => {
            navigate("/signin")
          }).catch(() => {
            //  Show Relevant Error Message
          });
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };

  return (

    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">

          {/* <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
          <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-purple-500 to-red-100 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div> */}
          <div class="absolute inset-0 -mr-3.5 bg-gradient-to-r from-blue-100 to-cyan-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>


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
            <form method="#" action="#" className="mt-10">

              <div>
                <input
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                  type="text" placeholder="Name" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 focus:cursor" />
              </div>

              <div className="mt-7">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email" placeholder="Email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
              </div>

              <div className="mt-7">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
              </div>

              <div className="mt-7">
                <input placeholder="Confirm Password" 
                type="password"
                className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
              </div>

              <div className="mt-7">
                <button onClick={createUser} type="button" className="bg-cyan-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Sign Up
                </button>
              </div>

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