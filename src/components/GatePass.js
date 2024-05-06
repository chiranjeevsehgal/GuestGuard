import { getAuth } from 'firebase/auth';
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.js'
import { getFirestore, } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { reactLocalStorage } from 'reactjs-localstorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';




function GatePass({ user, app, username, useremail, setUsername, setUserEmail, setUserNumber }) {
    const [showDetails, setShowDetails] = useState(true);
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
    const [time, setTime] = useState("");
    const [inpdisabled, setInpdisabled] = useState(false);
    const [passdetails, setPassDetails] = useState("");
    const [passflag, setPassFlag] = useState(0)

    const [pname, setPName] = useState("");
    const [pnumber, setPNumber] = useState("");
    const [ppurpose, setPPurpose] = useState("");
    const [pid, setPId] = useState("");

    const [preinpdisabled, setPreInpdisabled] = useState(true);

    const gatePassRef = useRef(null);
    const [downloadUrl, setDownloadUrl] = useState('');
    const downloadLinkRef = useRef(null); // Define downloadLinkRef

    const [date, setDate] = useState()


    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {

                // User is signed in, do nothing


                setPName(reactLocalStorage.getObject('passdata').name)
                setPNumber(reactLocalStorage.getObject('passdata').number)
                setPId(reactLocalStorage.getObject('passdata').id)
                setDate(reactLocalStorage.getObject('passdata').date)
                setPPurpose(reactLocalStorage.getObject('passdata').purpose)
                setPassFlag(reactLocalStorage.getObject('passdata').flag)
                setIsChecked(reactLocalStorage.getObject('passdata').flag)
                if (passflag) {
                    setButtonDisabled(true)
                }

                setFullName(reactLocalStorage.getObject('udata').name)
                setEmail(reactLocalStorage.getObject('udata').email)
                // setPhoneNumber(reactLocalStorage.getObject('udata').number)



            } else {
                navigate("/signin");
            }
        });

        return unsubscribe;
    });

    async function addNewUser() {
        const db = getFirestore(app);
        try {
            const docRef = await setDoc(doc(db, "gatepass", phonenumber), {
                fullname,
                phonenumber,
                email,
                date,
                address,
                ID,
                purpose,
                time
            });

        } catch (error) {
            // console.error(e);
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


    const fetchUserData = async (phonenumber) => {
        const db = getFirestore(app);
        const userRef = doc(db, "gatepass", phonenumber);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {

            reactLocalStorage.setObject('passdata', {
                'name': docSnap.data().fullname,
                'purpose': docSnap.data().purpose,
                'date': date,
                'id': docSnap.data().time,
                'number': docSnap.data().phonenumber,
                'flag': 1,

            });
            setUserData(docSnap.data());
            setShowDetails(true)
        } else {
            setUserData(null);
        }
    };
    //setstate

    const handleDownload = () => {
        if (gatePassRef.current) {

            html2canvas(gatePassRef.current)
                .then(canvas => {
                    // Convert canvas to data URL
                    const imageUrl = canvas.toDataURL('image/png');
                    setDownloadUrl(imageUrl);

                })
                .catch(error => {
                    // console.error('Error capturing gate pass:', error);
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
        }
    };

    useEffect(() => {
        handleDownload()
    }, [passflag])

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleButtonClick = (e) => {
        e.preventDefault()

        setDate(getFormattedDate())
        if (handlevalidation()) {
            // timehandler()
            // setTime(`${date.getDate()}${date.getMonth()+1}${date.getFullYear()%100}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()%100 }`)

            const date = new Date();
            const newTime = `${date.getDate()}${date.getMonth() + 1}${date.getFullYear() % 100}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds() % 100}`;
            setTime(newTime);

            // addNewUser()
            // setShowDetails(!showDetails);
            // setButtonDisabled(true);
            // fetchUserData(phonenumber); 

        }
        else {
        }
    };

    useEffect(() => {
        if (time !== "") {
            addNewUser();
            setInpdisabled(true);
            setPassFlag(true)
            setShowDetails(true);
            setButtonDisabled(true);
            fetchUserData(phonenumber);
            toast.success('Gate pass has been generated.', {
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
        // }, [time, showDetails, phonenumber,addNewUser,fetchUserData]);
    }, [time]);

    function getFormattedDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = today.getFullYear();

        return `${day}-${month}-${year}`;
    }



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

                if (datobj[key][Object.keys(datobj[key])[0]] === "") {
                    flag = false
                }
            }
        }
        return flag
    }


    return (
        <div>

            <Header setUserEmail={setUserEmail} setUsername={setUsername} setUserNumber={setUserNumber} username={username} useremail={useremail} />



            <section className="bg-gray-100 text-gray-800">

                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className=" bg-gray-100 text-gray-900">


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
                                            disabled={preinpdisabled}
                                            type="text" placeholder="Name" className="p-3 w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                                            required
                                        />
                                    </div>

                                    <div className="col-span-full sm:col-span-1">
                                        <label htmlFor="ID" className="text-sm">ID</label>

                                        <select id="id" className="p-1  w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-400"
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
                                            disabled={inpdisabled}
                                            type="text" placeholder="ID Number" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900 p-3"
                                            required />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="phone" className="text-sm">Phone Number</label>
                                        <input id="phone"
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            disabled={inpdisabled}
                                            value={phonenumber}
                                            type="tel" placeholder="Phone Number" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900 p-3" pattern="[0-9]{10}"
                                            required />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="email" className="text-sm">Email</label>
                                        <input id="email"
                                            disabled={preinpdisabled}
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email} type="email" placeholder="Email" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900 p-3"
                                            required />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="address" className="text-sm">Address</label>
                                        <input id="address"
                                            disabled={inpdisabled}
                                            onChange={(e) => setAddress(e.target.value)}
                                            value={address}
                                            type="text" placeholder="Address" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900 p-3"
                                            required />
                                    </div>
                                    <div className="col-span-full sm:col-span-full">
                                        <label htmlFor="purpose" className="text-sm">Purpose</label>
                                        <input id="purpose"
                                            disabled={inpdisabled}
                                            onChange={(e) => setPurpose(e.target.value)}
                                            value={purpose}
                                            type="text" placeholder="Purpose of Visit" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900 p-3"
                                            required />
                                    </div>
                                    <div className="col-span-full sm:col-span-full">

                                    </div>
                                    <div className="col-span-full sm:col-span-full">

                                        <button disabled={buttonDisabled}
                                            type="submit"    className={`self-center px-8 py-3 font-semibold rounded bg-cyan-600 text-gray-50 ${!buttonDisabled ? 'hover:bg-cyan-700 hover:text-white' : ''}`}
                                            >Generate Pass</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>

                        <div >
                            {showDetails && passflag ?
                                <div className="container flex flex-col w-full max-w-lg p-6 mt-10 divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800" ref={gatePassRef}>
                                    <div className="flex justify-between items-center p-4">
                                        <div className="flex space-x-4 items-center">
                                            <div>
                                                <h4 className="font-bold">Gate Pass</h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 gap-x-2">

                                            <a
                                                // onClick={handleDownload}
                                                href={downloadUrl}
                                                download="gate_pass.png"
                                                // style={{ display: 'none' }}
                                                ref={downloadLinkRef}
                                            >
                                                <Download height={22} />
                                            </a>
                                            <span className="text-x3 font-bold flex hidden">
                                                <label htmlFor="Toggle1" className="inline-flex items-center space-x-2 cursor-pointer text-gray-800">

                                                    <span className="relative">
                                                        <input id="Toggle1" type="checkbox" className="hidden peer"
                                                            checked={isChecked}
                                                            onChange={handleCheckboxChange}
                                                            disabled={isChecked}
                                                        />
                                                        <div className="w-10 h-6 rounded-full shadow-inner bg-gray-600 peer-checked:bg-cyan-600"></div>
                                                        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                                                    </span>
                                                    <span>Active</span>
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2 text-sm text-gray-600" >

                                        <p><span className="font-bold">Gate Pass ID: </span>{pid}</p>
                                        <p><span className="font-bold">Date: </span>{date}</p>
                                        <p><span className="font-bold">Name:</span> {pname}</p>
                                        <p><span className="font-bold">Number:</span> {pnumber}</p>
                                        <p><span className="font-bold">Purpose of Visit:</span> {ppurpose}</p>

                                        {/* <p><span className="font-bold">Gate Pass ID: </span>{time}</p>
                                        <p><span className="font-bold">Name:</span> {userData.fullname}</p>
                                        <p><span className="font-bold">Number:</span> {userData.phonenumber}</p>
                                    <p><span className="font-bold">Purpose of Visit:</span> {userData.purpose}</p> */}
                                    </div>
                                    {/* <button onClick={handleDownload}>Download Gate Pass</button> */}

                                    {/* <a
                                            onClick={handleDownload}
                                            href={downloadUrl}
                                            download="gate_pass.png"
                                            // style={{ display: 'none' }}
                                            ref={downloadLinkRef}
                                        >
                                            Download Gate Pass
                                        </a> */}

                                    <span className="text-x3 font-bold"></span>
                                    <p className='text-sm px-4 py-4'>*Keep the gate pass until you leave campus, signing out will expire it.</p>

                                </div>

                                : null}

                        </div>
                    </div>

                    <div className="hidden sm:flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ml-12">
                        {/* <img src="Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
                        <img src="gatepass1.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>

    )
}

export default GatePass;