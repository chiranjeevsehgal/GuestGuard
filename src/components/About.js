function About() {
    return (
        <div>

            <div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-5 sm:p-10">
                <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">

                <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-blue-100 to-cyan-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl hidden sm:block"></div>
                    <div className="relative bg-white shadow-lg sm:rounded-3xl">


                        <div className="px-5 sm:px-20 py-6">
                            <div className="bg-gray-100 text-gray-800">


                                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                                    {/* <a href="/adminsignin"><span className="px-24 sm:px-32 block text-cyan-600">Admin Sign In</span></a> */}
                                    <h2 className="text-3xl sm:text-5xl font-bold mt-7">Revolutionizing Campus Security and Efficiency
                                    </h2>
                                    <p className="text-gray-600">Centralized Tracking, GPS Integration, and Seamless Navigation for a Safer and More Streamlined Visitor Experience.</p>
                                </div>
                                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="flex flex-col items-center p-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-cyan-600">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                                        </svg>
                                        <h3 className="my-3 text-xl sm:text-3xl font-semibold">Gate Pass Generation</h3>
                                        <div className="space-y-1 leadi">
                                            <p>Effortlessly generate secure gate</p>
                                            <p>passes through our user-friendly</p>
                                            <p>system, ensuring quick and hassle-</p>
                                            <p>free access to the college campus.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center p-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-cyan-600">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                                        </svg>
                                        <h3 className="my-3 text-xl sm:text-3xl font-semibold">Navigation Assistance</h3>
                                        <div className="space-y-1 leadi">
                                            <p>Navigate the campus with ease using</p>
                                            <p>our navigation feature. Whether you're</p>
                                            <p>a visitor or a regular, our system</p>
                                            <p>ensures seamless assistance, for a</p>
                                            <p>stress-free and efficient experience</p>
                                            <p>within the premises.</p>
                                        </div>

                                    </div>
                                    <div className="flex flex-col items-center p-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-cyan-600">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                                        </svg>
                                        <h3 className="my-3 text-xl sm:text-3xl font-semibold">Emergency Preparedness</h3>
                                        <div className="space-y-1 leadi">
                                            <p>Stay informed and secure during</p>
                                            <p>unforeseen events with real-time</p>
                                            <p>alerts, evacuation routes, and vital</p>
                                            <p>information readily available.</p>


                                        </div>
                                    </div>
                                </div>


                                <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                                    <p className="p-2 text-sm font-medium tracki text-center uppercase">Development team</p>
                                    <h1 className="text-2xl sm:text-4xl font-bold leadi text-center">The talented people behind the scenes</h1>
                                    <div className="flex flex-col lg:flex-row justify-center lg:space-x-8 mt-16 gap-y-4">

                                        <div className="flex flex-col justify-center w-full px-4 my-6 sm:w-96 bg-cyan-500 text-gray-100 rounded-md">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500 p-2" src="user.png" />
                                            <div className="flex-1 my-4">
                                                <p className="text-lg font-semibold leadi text-center">Chiranjeev Sehgal</p>
                                                <p className="text-center">Frontend Developer</p>
                                            </div>
                                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                                <a rel="noopener noreferrer" href="mailto:chiranjeevsehgal2002@gmail.com" title="Email" className="text-gray-50 hover:text-cyan-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                                    </svg>
                                                </a>
                                                <a rel="noopener noreferrer" href="https://twitter.com/sehgal09_" target="_blank" title="Twitter" className="text-gray-50 hover:text-cyan-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                                    </svg>
                                                </a>
                                                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/chiranjeevsehgal/" target="_blank" title="LinkedIn" className="text-gray-50 hover:text-cyan-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                                    </svg>
                                                </a>
                                                <a rel="noopener noreferrer" href="https://github.com/chiranjeevsehgal" target="_blank" title="GitHub" className="text-gray-50 hover:text-cyan-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-center w-full px-4 my-6 sm:w-96 bg-cyan-500 text-gray-100 rounded-md">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500 p-2" src="user.png" />
                                            <div className="flex-1 my-4">
                                                <p className="text-lg font-semibold leadi text-center">Hemangshu Dey</p>
                                                <p className="text-center">Backend Developer</p>
                                            </div>
                                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                                <a rel="noopener noreferrer" href="mailto:hemangshu1904@gmail.com" title="Email" className="text-gray-50 hover:text-cyan-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                                    </svg>
                                                </a>
                                                <a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-50 hover:text-cyan-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                                    </svg>
                                                </a>
                                                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/hemangshu-dey-2a2221276/" target="_blank" title="LinkedIn" className="text-gray-50 hover:text-cyan-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                                    </svg>
                                                </a>
                                                <a rel="noopener noreferrer" href="https://github.com/Hemangshu1904" target="_blank" title="GitHub" className="text-gray-50  hover:text-cyan-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                    <a rel="noopener noreferrer" href="/" class="block mx-auto mt-8 sm:mt-0 sm:inline-block px-4 my-6 sm:px-6 py-3 text-lg font-semibold rounded text-gray-50 bg-cyan-500 sm:py-4 hover:bg-cyan-700 hover:text-white">Back to dashboard</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default About;