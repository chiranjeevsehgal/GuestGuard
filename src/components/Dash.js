import { Link } from "react-router-dom";

function Dash({ user }) {

	return (

		<div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10">
			<div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
				{/* <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div> */}
				<div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-blue-100 to-cyan-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
				<div className="relative bg-white shadow-lg sm:rounded-3xl">

					<div className="px-20 py-6">
						<div className="bg-gray-100 text-gray-800">
							<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
								<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
									{/* <h1 className="text-5xl font-bold leadi sm:text-6xl">Ac mattis
				<span className="text-cyan-600">senectus</span>erat pharetra
			</h1> */}
									<h1 className="text-5xl font-bold leadi sm:text-6xl">Guest
										<span className="text-cyan-600">Guard</span>
									</h1>
									{/* <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
			</p> */}
									<p className="mt-6 mb-8 text-lg sm:mb-12">Seamlessly Generate gate passes and Navigate with our Intuitive Web App for an enhanced Campus Experience!
									</p>
									<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
										<Link to={user == null ? "/signin" : "/gatepass"} className="px-8 py-3 text-lg font-semibold rounded text-gray-50 bg-cyan-600" >Generate Gate Pass</Link>
										<Link to="/about" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">About</Link>
									</div>
								</div>
								<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
									<img src="Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
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