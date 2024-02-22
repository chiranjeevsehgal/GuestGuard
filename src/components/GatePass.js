import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.js'

import {getFirestore,} from "firebase/firestore";
import { doc, setDoc,getDoc } from "firebase/firestore"; 



function GatePass({ user, app,username,useremail,setUsername,setUserEmail }) {
    const [showDetails, setShowDetails] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [ID, setID] = useState("");
    const [IDtype, setIDType] = useState("");
    const [purpose, setPurpose] = useState("");;
    const [userData, setUserData] = useState("");


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
    });

    async function addNewUser() {
        const db = getFirestore(app);
        try {
          const docRef = await setDoc(doc(db, "gatepass",phonenumber), {
            fullname,
            phonenumber,
            email,
            address,
            ID,
            purpose
    
          });
          console.log("Document written with ID: ");
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }

      const fetchUserData = async (phonenumber) => {
        const db = getFirestore(app);       
         const userRef = doc(db, "gatepass", phonenumber);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            setUserData(docSnap.data());
        } else {
            console.log("No such document!");
            setUserData(null);
        }
    };


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleButtonClick = (e) => {
        e.preventDefault()
        if (handlevalidation()) {
            addNewUser()
            setShowDetails(!showDetails);
            setButtonDisabled(true);
            fetchUserData(phonenumber); 

        }
        else {
            console.log("Error");
        }
    };

    const handlevalidation = () => {
        const datobj = {
            name: { fullname },
            phonenumber: { phonenumber },
            email: { email },
            address: { address },
            IDtype: { IDtype },
            ID: { ID },
            purpose: { purpose }
        }

        let flag = true
        for (const key in datobj) {
            if (datobj.hasOwnProperty(key)) {

                // console.log(datobj[key][Object.keys(datobj[key])[0]]);
                if (datobj[key][Object.keys(datobj[key])[0]] === "") {
                    flag = false
                }
            }
        }
        return flag
    }


    return (
        <div>
            
            <Header setUserEmail={setUserEmail} setUsername={setUsername}username={username} useremail={useremail} />


            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="mr-12 bg-gray-100 text-gray-900">
                        
                    
                        <form method="#" action="#" className="container flex flex-col mx-auto space-y-12" onSubmit={handleButtonClick}>
                            <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm bg-gray-50 ">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium">Required Information</p>
                                    <p className="text-sm">Please ensure that all mandatory fields are completed accurately. The information provided in these fields is essential for us to effectively process your request.</p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="name" className="text-sm">Name</label>
                                        <input id="name"
                                            onChange={(e) => {
                                                setFullName(e.target.value)
                                            }}
                                            value={fullname}
                                            type="text" placeholder="Name" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" 
                                            required/>
                                    </div>
                                    
                                    <div className="col-span-full sm:col-span-1">
                                        <label htmlFor="ID" className="text-sm">ID</label>
                                        
                                        <select id="id" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-400" 
                                        onChange={(e) => {
                                            setIDType(e.target.value === "1" ? "Aadhar Card" : (e.target.value === "2" ? "Driving License" : "Pan Card"))
                                        }}
                                        datap={IDtype}
                                        required>
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
                                            type="text" placeholder="ID Number" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" 
                                            required/>
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="phone" className="text-sm">Phone Number</label>
                                        <input id="phone"
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            value={phonenumber}
                                            type="tel" placeholder="Phone Number" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" pattern="[0-9]{10}"
                                            required/>
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="email" className="text-sm">Email</label>
                                        <input id="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email} type="email" placeholder="Email" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" 
                                            required/>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="address" className="text-sm">Address</label>
                                        <input id="address"
                                            onChange={(e) => setAddress(e.target.value)}
                                            value={address}
                                            type="text" placeholder="Address" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" 
                                            required/>
                                    </div>
                                    <div className="col-span-full sm:col-span-full">
                                        <label htmlFor="purpose" className="text-sm">Purpose</label>
                                        <input id="purpose"
                                            onChange={(e) => setPurpose(e.target.value)}
                                            value={purpose}
                                            type="text" placeholder="Purpose of Visit" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" 
                                            required/>
                                    </div>
                                    <div className="col-span-full sm:col-span-full">

                                    </div>
                                    <div className="col-span-full sm:col-span-full">
                                        
                                        <button disabled={buttonDisabled}
                                            type="submit" className="self-center px-8 py-3 font-semibold rounded bg-cyan-600 text-gray-50">Generate Pass</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>

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
                                        
                                        <p><span className="font-bold">Gate Pass ID:</span>1234556</p>
                                        <p><span className="font-bold">Name:</span> {userData.fullname}</p>
                                        <p><span className="font-bold">Number:</span> {userData.phonenumber}</p>
                                        <p><span className="font-bold">Purpose of Visit:</span> {userData.purpose}</p>
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