import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { Helmet } from 'react-helmet';
import { Button } from "@chakra-ui/react";




function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const location = useLocation();

    const currentPath = location.pathname;

    const navigate = useNavigate();

    const handleSignOut = () => {
        const auth = getAuth(); // Get authentication instance
        signOut(auth).then(() => {
            console.log("User signed out");
            navigate("/signin");
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

    let classn = "flex items-center px-4 -mb-1 border-b-2 border-transparent";
    let classActive = "flex items-center px-4 -mb-1 border-b-2 border-transparent text-cyan-600 border-cyan-600";

    return (
        <div>
            <Helmet>
                <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
            </Helmet>

            <header className="p-4 bg-gray-100 text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <Link rel="noopener noreferrer" to="/" aria-label="Back to homepage">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-11 text-cyan-600">
                            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                        </svg>
                    </Link>

                    <nav>
                        <section className="MOBILE-MENU flex lg:hidden">
                            <div
                                className="HAMBURGER-ICON space-y-2"
                                onClick={() => setIsNavOpen((prev) => !prev)}
                            >
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            </div>

                            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                                <div
                                    className="absolute top-0 right-0 px-8 py-8"
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    <svg
                                        className="h-8 w-8 text-gray-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                                    <li className="border-b border-gray-400 my-8 uppercase">
                                        {/* <a href="/gatepass">Gate Pass</a> */}
                                        <Link to="/gatepass">Gate Pass</Link>
                                    </li>
                                    <li className="border-b border-gray-400 my-8 uppercase">
                                        {/* <a href="/navigation">Navigation</a> */}
                                        <Link to="/navigation">Navigation</Link>
                                    </li>
                                    <li className="border-b border-gray-400 my-8 uppercase">
                                        {/* <a href="/faq">FAQ</a> */}
                                        <Link to="/faq">FAQ</Link>
                                    </li>

                                </ul>
                            </div>
                        </section>
                        
                        

                        <div className="items-center flex-shrink-0 hidden lg:flex">
                            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                            <section>
                        {/* ----------------------- */}
                            <Button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class=" hover:bg-gray-50 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 flex items-center justify-between w-full md:w-auto" onClick={() => setIsNavOpen((prev) => !prev)}>Profile
                            <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            {/* <div
                                className=" space-y-2"
                                onClick={() => setIsNavOpen((prev) => !prev)}
                                >
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            </div> */}
                            </Button>

                            <div className={isNavOpen ? "bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-6 absolute" : "hideMenuNav"}>
                                {/* <div
                                    className="absolute top-0 right-0 px-8 py-8"
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    <svg
                                        className="h-8 w-8 text-gray-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div> */}

                                <div className="max-w-md p-6 sm:flex sm:space-x-6 bg-gray-50 text-gray-800">
                                            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                                <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                                            </div>
                                            <div className="flex flex-col space-y-4">
                                                <div>
                                                    <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
                                                    <span className="text-sm text-gray-600">General manager</span>
                                                </div>
                                                <div className="space-y-1">
                                                    <span className="flex items-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                                            <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                                        </svg>
                                                        <span className="text-gray-600">leroy.jenkins@company.com</span>
                                                    </span>
                                                    <span className="flex items-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                                            <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                                                        </svg>
                                                        <span className="text-gray-600">+25 381 77 983</span>
                                                    </span>
                                                </div> 
                                                </div> 
                                                </div> 




                                
                            </div>
                        </section>

                                <li>
                                    {/* <a href="/about">About</a> */}
                                    <Link id="gatepass" to="/gatepass" className={currentPath == "/gatepass" ? classActive : classn}>Gate Pass</Link>
                                </li>
                                <li>
                                    {/* <a href="/portfolio">Portfolio</a> */}
                                    <Link id="navigation" to="/navigation" className={currentPath == "/navigation" ? classActive : classn}>Navigation</Link>
                                </li>
                                <li>
                                    {/* <a href="/contact">Contact</a> */}
                                    <Link id="faq" to="/faq" className={currentPath == "/faq" ? classActive : classn}>FAQ</Link>
                                </li>
                                <li>
                        {/* In process------------------------ */}
                    
                        
                        


                                    {/* <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class=" hover:bg-gray-50 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 flex items-center justify-between w-full md:w-auto">Profile <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button> */}
                                    
                                    {/* <!-- Dropdown menu --> */}
                                    
                                <div id="dropdownNavbar" class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4">
                                    
                                    
                                        {/* <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-50 text-gray-800">
                                            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                                <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                                            </div>
                                            <div className="flex flex-col space-y-4">
                                                <div>
                                                    <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
                                                    <span className="text-sm text-gray-600">General manager</span>
                                                </div>
                                                <div className="space-y-1">
                                                    <span className="flex items-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                                            <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                                        </svg>
                                                        <span className="text-gray-600">leroy.jenkins@company.com</span>
                                                    </span>
                                                    <span className="flex items-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                                            <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                                                        </svg>
                                                        <span className="text-gray-600">+25 381 77 983</span>
                                                    </span>
                                                </div> */}

                                                
                                            {/* </div> */}
                                        {/* </div> */}
                                    </div>
                                </li>
                            </ul>

                            <button onClick={handleSignOut} className="self-center ml-14 px-8 py-3 font-semibold rounded bg-cyan-600 text-gray-50">Sign Out</button>
                        </div>
                    </nav>
                    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      
      .showMenuNavProfile {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                </div>

            </header>
        </div>
    )
}
export default Header;