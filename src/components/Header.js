import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from "react";



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
                        </ul>
                        
                        <button onClick={handleSignOut} className="self-center ml-8 px-8 py-3 font-semibold rounded bg-cyan-600 text-gray-50">Sign Out</button>
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
    `}</style>
                </div>

            </header>
        </div>
    )
}
export default Header;