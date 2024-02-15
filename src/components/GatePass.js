import { getAuth} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  addDoc, collection, getFirestore } from "firebase/firestore";
import Header from './Header.js'



function GatePass({ user,app }) {
    const [showDetails, setShowDetails] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [firstname, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [lastname, setLastName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [ID, setID] = useState("");
    const [purpose, setPurpose] = useState("");
 

    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // User is signed in, do nothing
            } else {
                navigate("/signin");
            }
        });
    
        return unsubscribe;
    }, []);

    async function addNewUser() {
        const db = getFirestore(app);
        try {
          const docRef = await addDoc(collection(db, "users"), {
            firstname:{firstname},
            lastname:{lastname},
            phonenumber:{phonenumber},
            email: {email},
            address:{address},
            ID:{ID},
            purpose:{purpose}
    
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }

          
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleButtonClick = () => {
        addNewUser()
        setShowDetails(!showDetails);
        setButtonDisabled(true);
    };


    return (
        <div>
            <Header />


            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="mr-12 bg-gray-100 text-gray-900">
                        <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                            <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm bg-gray-50 ">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium">Required Information</p>
                                    <p className="text-sm">Please ensure that all mandatory fields are completed accurately. The information provided in these fields is essential for us to effectively process your request.</p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstname" className="text-sm">First name</label>
                                        <input id="firstname" 
                                        onChange={(e) => setFirstName(e.target.value)}
                                        value={firstname}
                                        type="text" placeholder="First name" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="lastname" className="text-sm">Last name</label>
                                        <input id="lastname" 
                                        onChange={(e) => setLastName(e.target.value)}
                                        value={lastname}
                                        type="text" placeholder="Last name" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="phone" className="text-sm">Phone Number</label>
                                        <input id="phone" 
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        value={phonenumber}
                                        type="tel" placeholder="Phone Number" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="email" className="text-sm">Email</label>
                                        <input id="email" 
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}type="email" placeholder="Email" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="address" className="text-sm">Address</label>
                                        <input id="address" 
                                        onChange={(e) => setAddress(e.target.value)}
                                        value={address}
                                        type="text" placeholder="Address" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-1">
                                        <label htmlFor="ID" className="text-sm">ID</label>
                                        {/* <input id="id" type="text" placeholder="ID" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" /> */}
                                        <select id="id" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-400">
                                            <option value="">Select ID</option>
                                            <option value="1">Aadhar Card</option>
                                            <option value="2">Driving License</option>
                                            <option value="3">Pan Card</option>
                                        </select>
                                    </div>


                                    <div className="col-span-full sm:col-span-2">
                                        <label htmlFor="idnumber" className="text-sm">ID Number</label>
                                        <input id="idnumber" 
                                        onChange={(e) => setID(e.target.value)}
                                        value={ID}
                                        type="text" placeholder="ID Number" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-full">
                                        <label htmlFor="purpose" className="text-sm">Purpose</label>
                                        <input id="purpose" 
                                        onChange={(e) => setPurpose(e.target.value)}
                                        value={purpose}
                                        type="text" placeholder="Purpose of Visit" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-full">
                                        {/* <button onClick={addNewUser} type="button" className="self-center px-8 py-3 font-semibold rounded bg-cyan-600 text-gray-50">Generate Pass</button> */}
                                        <button onClick={handleButtonClick} disabled={buttonDisabled} 
 type="button" className="self-center px-8 py-3 font-semibold rounded bg-cyan-600 text-gray-50">Generate Pass</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>


                        {/* <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800"> */}
                        <div>
                            {showDetails ?
                                <div className="container flex flex-col w-full max-w-lg p-6 mt-10 divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
                                    <div className="flex justify-between p-4">
                                        <div className="flex space-x-4">
                                            <div>
                                                <h4 className="font-bold">Gate Pass has been generated.</h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 text-yellow-500">
                                            <span className="text-x3 font-bold">
                                                <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-800">
                                                    <span>New</span>
                                                    <span className="relative">
                                                        <input id="Toggle1" type="checkbox" className="hidden peer"
                                                            checked={isChecked}
                                                            onChange={handleCheckboxChange}
                                                            disabled={isChecked}
                                                        />
                                                        <div className="w-10 h-6 rounded-full shadow-inner bg-gray-600 peer-checked:bg-cyan-600"></div>
                                                        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                                                    </span>
                                                    <span>Used</span>
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2 text-sm text-gray-600">
                                        <p><span className="font-bold">Gate Pass ID:</span> 000</p>
                                        <p><span className="font-bold">Name:</span> John Doe</p>
                                        <p><span className="font-bold">Number:</span> 9999999999</p>
                                        <p><span className="font-bold">Purpose of Visit:</span> Test</p>
                                    </div>
                                </div>
                                : null}
                        </div>
                    </div>

                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GatePass;