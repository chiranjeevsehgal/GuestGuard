import React, { useState, useEffect } from 'react';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { reactLocalStorage } from 'reactjs-localstorage';
import Dialogue from './dialogue';

function Admin({ user, admin, setAdmin, app }) {
    const [visitors, setVisitors] = useState([]);
    const [filter, setFilter] = useState("today"); // Default filter by today
    const [customDate, setCustomDate] = useState(""); // State for custom date input



    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {


            } else {

                navigate("/signin");

            }
        });

        return unsubscribe;
    });

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore(app);
            let querySnapshot;
            if (filter === "today") {
                // Filter by today's date
                const formattedDate = getTodayDate(); // Get today's date in DD-MM-YYYY format
                querySnapshot = await getDocs(query(collection(db, "gatepass"), where("date", "==", formattedDate)));
            } else if (filter === "yesterday") {
                // Filter by yesterday's date
                const yesterday = getYesterdayDate() // Get yesterday's date in DD-MM-YYYY format
                querySnapshot = await getDocs(query(collection(db, "gatepass"), where("date", "==", yesterday)));
            } else {
                // No filter or custom filter
                querySnapshot = await getDocs(collection(db, "gatepass"));
            }
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setVisitors(data);
        };
        fetchData();
    }, [filter, app]);

    const handleCustomDate = () => {
        // Perform fetching based on custom date
        // Example:
        // fetchData(customDate);
    };

    function getTodayDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = today.getFullYear();

        return `${day}-${month}-${year}`;
    }

    function getYesterdayDate() {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1); // Subtract 1 day

        // Check if yesterday was in the previous month
        if (yesterday.getDate() === 1) {
            // If yesterday was the first day of the month, set it to the last day of the previous month
            yesterday.setMonth(yesterday.getMonth() - 1);
            // Get the last day of the previous month
            yesterday.setDate(new Date(yesterday.getFullYear(), yesterday.getMonth() + 1, 0).getDate());
        }

        const day = String(yesterday.getDate()).padStart(2, '0');
        const month = String(yesterday.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = yesterday.getFullYear();

        return `${day}-${month}-${year}`;
    }


    const handleSignOut = () => {
        const auth = getAuth(); // Get authentication instance
        signOut(auth).then(() => {
            // props.setUsername("")
            // props.setUserEmail("")
            // props.setUserNumber("")
            reactLocalStorage.remove('udata');

            navigate("/signin");
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };


    return (
        <div>
            <header className="p-4 bg-gray-100 text-gray-800">
                <div className="container flex justify-between h-16 mx-auto items-center">
                    <a href='/' rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 text-cyan-600">
                            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                        </svg> */}
                        <img src="logo1.png" alt="Logo" className="w-18 h-11 " />
                    </a>

                    <div className="items-center flex-shrink-0 lg:flex">
                        {/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
                        <button onClick={handleSignOut} className="self-center px-8 py-3 font-semibold rounded bg-cyan-600 text-gray-50">Sign Out</button>
                    </div>

                </div>
            </header>


            <div className="container p-2 mx-auto sm:p-4 text-gray-800">

                <div className="flex justify-between mb-4">
                    <div className="flex">
                        <button className={`mr-2 px-4 py-2 rounded-lg border-4 ${filter === "today" ? "bg-gray-300" : "bg-gray-100"}`} onClick={() => setFilter("today")}>Today</button>
                        <button className={`mr-2 px-4 py-2 rounded border-4 ${filter === "yesterday" ? "bg-gray-300" : "bg-gray-100"}`} onClick={() => setFilter("yesterday")}>Yesterday</button>
                    
                    
                        <input type="date" className='ml-16 p-2 bg-gray-100 rounded' onChange={(e) => setCustomDate(e.target.value)} />
                        
                        <button className="px-12 py-2 rounded bg-blue-500 text-white ml-8" onClick={handleCustomDate}>Search</button>
                    
                    </div>
                </div>


                <h2 className="mb-4 text-2xl font-semibold leadi">Visitors</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-m">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />

                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Phone Number</th>
                                <th className="p-3">Full Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Gate Pass ID</th>
                                <th className="p-3">Purpose</th>
                                <th className="p-3">Alert</th>
                                {/* Add more table headers if needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {visitors.map(visitor => (
                                <tr key={visitor.id} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                    <td className="p-3">{visitor.id}</td>
                                    <td className="p-3">{visitor.fullname}</td>
                                    <td className="p-3">{visitor.email}</td>
                                    <td className="p-3">{visitor.time}</td>
                                    <td className="p-3">{visitor.purpose}</td>
                                    <td className="p-3"><Dialogue email={visitor.email} /></td>
                                    {/* Add more table data cells if needed */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default Admin;