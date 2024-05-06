import { Link } from "react-router-dom";

function Dash({ user }) {

	return (
		<div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10">
    <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">

        {/* Conditional background gradient */}
        <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-blue-100 to-cyan-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl hidden sm:block"></div>

        <div className="relative bg-white shadow-lg sm:rounded-3xl">

					<div className="px-6 sm:px-10 lg:px-20 py-6">
						<div className="bg-gray-100 text-gray-800">
							<div className="container flex flex-col justify-center p-4 sm:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
								<div className="flex flex-col justify-center p-4 sm:p-6 text-center sm:text-left rounded-sm lg:max-w-md xl:max-w-lg">
									<h1 className="text-3xl sm:text-5xl font-bold leading-snug sm:leading-normal">Guest
										<span className="text-cyan-600">Guard</span>
									</h1>
									<p className="mt-4 sm:mt-6 mb-6 sm:mb-8 text-sm sm:text-lg">Seamlessly Generate gate passes and Navigate with our Intuitive Web App for an enhanced Campus Experience!</p>
									<div className="flex flex-col sm:flex-row sm:space-x-4 lg:justify-start">
										<Link to={user == null ? "/signin" : (user.email === "admin@gmail.com" ? "/admin" : "/gatepass")} className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded text-gray-50 bg-cyan-600 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 shadow-xl">Generate Gate Pass</Link>
										<Link to="/about" className="px-6 sm:px-8 py-2 sm:py-3 mt-2 sm:mt-0 text-sm sm:text-lg font-semibold border rounded border-gray-800 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 shadow-xl">About</Link>
									</div>
								</div>
								<div className="flex items-center justify-center p-4 sm:p-6 mt-6 sm:mt-0">
									{/* <img src="Business_SVG.svg" alt="" className="object-contain h-40 sm:h-72 lg:h-80 xl:h-96 2xl:h-112" /> */}
									<img src="landing.png" alt="" className="object-contain h-40 sm:h-72 lg:h-80 xl:h-96 2xl:h-112" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dash;
