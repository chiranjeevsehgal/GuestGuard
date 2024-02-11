function Navigation() {
    return (
        <div class="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10">
            <div class="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
                <div class="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
                <div class="relative bg-white shadow-lg sm:rounded-3xl">
                    <div class="px-20 py-6">
                        <div className="bg-gray-100 text-gray-800">


                            {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"> */}
                            {/* <img src="map.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
                            {/* </div> */}

                            <section className="p-6 bg-gray-100 text-gray-800">
                                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-50">
                                        <div className="mt-7">
                                            <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 mb-7" >
                                                Sign Out
                                            </button>
                                        </div>
                                        <a href="/"><span className="block mb-2 text-cyan-600">GuestGuard</span></a>
                                        <h1 className="text-5xl font-extrabold text-gray-900">Campus Navigation</h1>
                                        <p className="my-8">
                                            {/* <span className="font-medium text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at. */}
                                        </p>
                                    </div>
                                    <img src="map.jpg" alt="Campus Map" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" loading="eager" />
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;