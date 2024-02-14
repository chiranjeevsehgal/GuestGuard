import React, { useEffect, useState } from 'react';
// import { getAuth, signOut } from "firebase/auth";
import { getAuth} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header from './Header.js'


function Navigation({ user }) {

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

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };



    return (

        <div>
            <Header />
            <section className="pt-12 bg-gray-100 text-gray-800">
                <div className="px-12 mx-auto max-w-7xl">
                    <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                            <span>Campus Navigation</span>
                        </h1>
                        <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">

                            <p>Navigate the campus with ease using our navigation feature.</p>
                            <p>Whether you're a visitor or a regular, our system
                                ensures seamless assistance, for a stress-free and
                                efficient experience within the premises.</p>
                        </p>
                    </div>
                    <div className="w-full mx-auto mt-20 text-center md:w-10/12">
                        <div className="relative z-0 w-full mt-8 mb-20">
                            <div className="relative overflow-hidden">
                                    {!imageLoaded && (
                                        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-600"></div>
                                    )}
                                    <img src="map.jpg" alt="Campus Map" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-100 " onLoad={handleImageLoad} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    )
}

export default Navigation;