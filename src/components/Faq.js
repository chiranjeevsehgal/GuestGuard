import React, { useEffect} from 'react';
import Header from './Header.js'
import { useNavigate } from 'react-router-dom';
import { getAuth} from 'firebase/auth';

function Faq({ user,username,useremail,setUsername,setUserEmail,userNumber,setUserNumber  }) {
    
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // if (user.email == "admin@gmail.com"){
                //     navigate("/error");
                // }
            } else {
                // <BrowserRouter>
                navigate("/signin");
                // </BrowserRouter>
            }
        });
    
        return unsubscribe;
    });

    return (
        
        <div>
            <Header setUserEmail={setUserEmail} setUsername={setUsername} username={username} useremail={useremail} setUserNumber={setUserNumber} userNumber={userNumber}/>

            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-gray-600">This section serves as a repository of answers to frequently encountered inquiries, providing comprehensive solutions to common concerns.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What are the office timings?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">The office timings are from 9:00 A.M to 4:00 P.M.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Does the mobile network work inside the campus?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">During peak hours, there are some issues with the network, but there are Wi-Fi facilities available near the offices for office-related work.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Are there any cafeterias inside the campus?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Yes! There are many cafeterias inside the campus. You can find them in our navigation menu.</p>
                        </details>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Faq;