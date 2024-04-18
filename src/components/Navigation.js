import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header from './Header.js'

function Navigation({ user, username, useremail, setUsername, setUserEmail, userNumber, setUserNumber }) {

    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // User is signed in, do nothing
                
                // if (user.email == "admin@gmail.com"){
                //     navigate("/error");
                // }
            } else {
                navigate("/signin");                
            }
        });

        return unsubscribe;
    });

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };



    return (

        <div>
            <Header setUserEmail={setUserEmail} setUsername={setUsername} username={username} useremail={useremail} setUserNumber={setUserNumber} userNumber={userNumber} />
            <section className="pt-12 bg-gray-100 text-gray-800">
                <div className="px-12 mx-auto max-w-7xl">
                    <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                            <span>Campus Navigation</span>
                        </h1>
                        <div className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">

                            <p>Navigate the campus with ease using our navigation feature.</p>
                            <p>Whether you're a visitor or a regular, our system
                                ensures seamless assistance, for a stress-free and
                                efficient experience within the premises.</p>
                        </div>
                    </div>
                    <div className="w-full mx-auto mt-20 text-center md:w-10/12">
                        <div className="relative z-0 w-full mt-8 mb-20">
                            <div className="relative overflow-hidden">
                                {!imageLoaded && (
                                    <div className="flex justify-center items-center h-16">
                                        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-600"></div>
                                    </div>

                                )}
                                <img src="map.jpg" alt="Campus Map" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-100 " onLoad={handleImageLoad} />
                                <div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5845191752337!2d77.60360607424994!3d12.934404087377604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15392f6ea2f9%3A0x851befe3b3f1d0b0!2sCentral%20campus%2C%20Christ%20University!5e0!3m2!1sen!2sin!4v1709110561417!5m2!1sen!2sin"
                                        title='Map'
                                        className="w-full md:w-600 h-450 border-0 mt-10"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navigation;