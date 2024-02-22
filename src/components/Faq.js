import React, { useEffect} from 'react';
import Header from './Header.js'
import { BrowserRouter } from 'react-router-dom';
import { getAuth} from 'firebase/auth';

function Faq({ user,username,useremail,setUsername,setUserEmail,userNumber,setUserNumber  }) {
    
    
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
            } else {
                <BrowserRouter>
                navigate("/signin");
                </BrowserRouter>
            }
        });
    
        return unsubscribe;
    }, []);

    return (
        
        <div>
            <Header setUserEmail={setUserEmail} setUsername={setUsername} username={username} useremail={useremail} setUserNumber={setUserNumber} userNumber={userNumber}/>

            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-gray-600">This section serves as a repository of answers to frequently encountered inquiries, providing comprehensive solutions to common concerns.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Question 1?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Answer 1. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Question 2?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Answer 2. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Question 3?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Answer 3. </p>
                        </details>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Faq;