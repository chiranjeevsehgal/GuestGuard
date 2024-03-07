import {getFirestore,} from "firebase/firestore";
import { doc, setDoc,getDoc } from "firebase/firestore"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Admin1({app}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dbpassword, setdbPassword] = useState("");
    const [admindata, setAdminData] = useState("");

    const navigate = useNavigate();

    const signinAdmin = (e)=>{
        e.preventDefault();
        fetchUserData(email)
    }


    const fetchUserData = async (email) => {
        const db = getFirestore(app);       
        const userRef = doc(db, "admin", email);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            console.log("Data Available");
            console.log(docSnap.data());
            setdbPassword(docSnap.data()["password"])
            console.log(dbpassword);
            if ( dbpassword == password) {
                console.log("True");
                navigate("/admin");
            }
            else{
                console.log("False");
            }
            
        } else {
            console.log("No such document!");
            setAdminData(null);
        }
    };

    return (
        <div>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800  m-auto mt-48">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Admin Sign in</h1>
                    <p className="text-sm text-gray-600">Sign in to access your account</p>
                </div>
                <form className="space-y-12" method="#" onSubmit={signinAdmin}>
                    <div className="space-y-4">
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email"  className="w-full px-e3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"  
                            onChange={(e)=>setEmail(e.target.value)} 
                            value={email} />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                            onChange={(e)=>setPassword(e.target.value)} 
                            value = {password}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-cyan-600 text-gray-50">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?
                            <a rel="noopener noreferrer" href="#" className="hover:underline text-cyan-600">Sign up</a>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Admin1;