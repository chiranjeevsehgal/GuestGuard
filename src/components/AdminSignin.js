import { getFirestore, } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AdminSignin({ app, admin, setAdmin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [dbpassword, setdbPassword] = useState("");
    // const [admindata, setAdminData] = useState("");

    const navigate = useNavigate();

    const signinAdmin = (e) => {
        e.preventDefault();
        fetchUserData(email)
    }


    const fetchUserData = async (email) => {
        const db = getFirestore(app);
        const userRef = doc(db, "admin", email);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            
            setdbPassword(docSnap.data()["password"])
            
            if (dbpassword === password) {
                
                setAdmin("logged")
                navigate("/admin");
            }
            else {
                
                setError('Invalid Username or Password')
            }

        } else {
            
            setError('Invalid Username or Password')
            // setAdminData(null);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-800 shadow-xl">
                <div className="mb-8 text-center">
                    <a href="/"><span className="px-32 block text-cyan-600">GuestGuard</span></a>
                    <h1 className="my-3 text-4xl font-bold">Admin Sign in</h1>
                    <p className="text-sm text-gray-600">Sign in to access your account</p>
                </div>
                <form className="space-y-12" method="#" onSubmit={signinAdmin}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email} />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-cyan-600 text-gray-50">Sign in</button>
                        </div>
                    </div>
                    {error ?
                        <div className="flex items-center rounded shadow-md overflow-hidden max-w-xl relative bg-gray-50 text-gray-800 mt-7">
                            <div className="self-stretch flex items-center px-3 flex-shrink-0 bg-gray-300 text-red-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div className="p-4 flex-1">
                                <h3 className="text-xl font-bold">Error</h3>
                                <p className="text-sm text-gray-600">Invalid credentials.</p>
                            </div>
                            <button className="absolute top-2 right-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 p-2 rounded cursor-pointer">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        : null}
                </form>
            </div>
        </div>
    )

}

export default AdminSignin;