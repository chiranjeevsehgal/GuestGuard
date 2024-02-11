import React, { useState } from 'react';

function GatePass() {
    const [showDetails, setShowDetails] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleButtonClick = () => {
        setShowDetails(!showDetails);
        setButtonDisabled(true);
    };

    return (
        <div>
            <header className="p-4 bg-gray-100 text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 text-cyan-600">
                            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                        </svg>
                    </a>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="/gatepass" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-cyan-600 border-cyan-600">Gate Pass</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="/navigation" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Navigation</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">FAQ</a>
                        </li>
                        {/* <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                    </li> */}
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        {/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
                        <button className="self-center px-8 py-3 font-semibold rounded bg-cyan-600 text-gray-50">Sign Out</button>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>

            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="mr-12 bg-gray-100 text-gray-900">
                        <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12">
                            <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium">Personal Information</p>
                                    <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full sm:col-span-3">
                                        <label for="firstname" className="text-sm">First name</label>
                                        <input id="firstname" type="text" placeholder="First name" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label for="lastname" className="text-sm">Last name</label>
                                        <input id="lastname" type="text" placeholder="Last name" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label for="phone" className="text-sm">Phone Number</label>
                                        <input id="phone" type="tel" placeholder="Phone Number" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label for="email" className="text-sm">Email</label>
                                        <input id="email" type="email" placeholder="Email" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full">
                                        <label for="address" className="text-sm">Address</label>
                                        <input id="address" type="text" placeholder="Address" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-1">
                                        <label for="ID" className="text-sm">ID</label>
                                        {/* <input id="id" type="text" placeholder="ID" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" /> */}
                                        <select id="id" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-400">
                                            <option value="">Select ID</option>
                                            <option value="1">Aadhar Card</option>
                                            <option value="2">Driving License</option>
                                            <option value="3">Pan Card</option>
                                        </select>
                                    </div>
                                        

                                    <div className="col-span-full sm:col-span-2">
                                        <label for="idnumber" className="text-sm">ID Number</label>
                                        <input id="idnumber" type="text" placeholder="ID Number" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-full">
                                        <label for="purpose" className="text-sm">Purpose</label>
                                        <input id="purpose" type="text" placeholder="Purpose of Visit" className="w-full h-10 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-full">
                                        <button onClick={handleButtonClick} disabled={buttonDisabled} className="self-center px-8 py-3 font-semibold rounded bg-cyan-600 text-gray-50">Generate Pass</button>
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