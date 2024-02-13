import React, { useState  } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Header from './Header.js'


function Navigation() {


    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
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
    
    
    return (
        
        // <div className="bg-gray-100 text-gray-800">
        <div>
            
            <Header />

            <div class="px-20 py-6">
                <div className="bg-gray-100 text-gray-800">


                    <section className="bg-gray-100 text-gray-800">
                        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                            <h1 className="text-5xl font-extrabold text-gray-900">Campus Navigation</h1>
                            <p>Navigate the campus with ease</p><p>using our navigation feature.</p>
                            <p>Whether you're a visitor</p>
                            <p>or a regular, our system</p>
                            <p>ensures seamless assistance,</p>
                            <p>for a stress-free and </p>
                            <p>efficient experience within the premises.</p>


                            {/* <h1 className="text-4xl font-bold leadi sm:text-5xl">Quisquam necessita vel
                                <span className="text-cyan-600">laborum doloribus</span>delectus
                            </h1>
                            <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p> */}
                            <div className="flex flex-wrap justify-center">
                                <div >
                                    {!imageLoaded && (
                                        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-600 absolute"></div>
                                    )}
                                    <img src="map.jpg" alt="Campus Map" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" onLoad={handleImageLoad} />
                                </div>
                            </div>
                        </div>
                    </section>



                    {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"> */}
                    {/* <img src="map.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
                    {/* </div> */}

                    {/* <section className="p-6 bg-gray-100 text-gray-800">
                        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-6 xl:grid-cols-5">
                            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-50"> */}
                    {/* <div className="mt-7">
                                            <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 mb-7" >
                                                Sign Out
                                            </button>
                                        </div> */}
                    {/* <a href="/"><span className="block mb-2 text-cyan-600">GuestGuard</span></a>
                                <h1 className="text-5xl font-extrabold text-gray-900">Campus Navigation</h1>
                                <p className="my-8"> */}
                    {/* <span className="font-medium text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at. */}
                    {/* <p>Navigate the campus with ease</p><p>using our navigation feature.</p>
                                    <p>Whether you're a visitor</p>
                                    <p>or a regular, our system</p>
                                    <p>ensures seamless assistance,</p>
                                    <p>for a stress-free and </p>
                                    <p>efficient experience within the premises.</p> */}
                    {/* </p> */}
                    {/* <div > */}
                    {/* {!imageLoaded && (
                                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-600 absolute"></div>
                                )}
                                <img src="map.jpg" alt="Campus Map" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" onLoad={handleImageLoad} />
                            </div>
                            </div> */}
                    {/* </div>
                    </section> */}

                </div>
            </div>
        </div>
    )
}

export default Navigation;