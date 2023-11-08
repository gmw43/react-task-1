import React from "react";

const Form = function () {
    return (
        <div className="flex flex-col items-center w-full bg-gray-400">
            <form className="px-2 py-2  w-1/2">
                <div className=" grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="fname" className="block mt-2">First Name:</label>
                        <input className="w-full rounded-[5px] border border-gray-500 px-3 py-1.5 text-sm text-blue-gray-700 focus:border-2 focus:border-blue-400 focus:outline-0 disabled:border-0" type="text" id="fname" placeholder="Muhammad" />
                    </div>

                    <div>
                        <label htmlFor="lname" className="block mt-2">Last Name:</label>
                        <input className="w-full rounded-[5px] border border-gray-500 px-3 py-1.5 text-sm text-blue-gray-700 focus:border-2 focus:border-blue-400 focus:outline-0 disabled.border-0" type="text" id="lname" placeholder="Ali" />
                    </div>

                    <div>
                        <label htmlFor="company" className="block mt-2">Company:</label>
                        <input className="w-full rounded-[5px] border border-gray-500 px-3 py-1.5 text-sm text-blue-gray-700 focus:border-2 focus:border-blue-400 focus:outline-0 disabled:border-0" type="text" id="company" placeholder="TechOverFlow" />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block mt-2">Phone:</label>
                        <input className="w-full rounded-[5px] border border-gray-500 px-3 py-1.5 text-sm text-blue-gray-700 focus:border-2 focus:border-blue-400 focus:outline-0 disabled:border-0" type="number" id="phone" placeholder="123-456-789" />
                    </div>
                </div>

                <div >
                    <label htmlFor="email" className="block mt-2">Email:</label>
                    <input className="w-full rounded-[5px] border border-gray-500 px-3 py-1.5 text-sm text-blue-gray-700 focus:border-2 focus:border-blue-400 focus:outline-0 disabled:border-0" type="email" id="email" placeholder="TechOverFlow@gmail.com" />
                </div>

                <div >
                    <label htmlFor="email" className="block mt-2">Password:</label>
                    <input className="w-full rounded-[5px] border border-gray-500 px-3 py-1.5 text-sm text-blue-gray-700 focus:border-2 focus:border-blue-400 focus:outline-0 disabled:border-0" type="password" id="email" placeholder="........" />
                </div>

                <div >
                    <label htmlFor="email" className="block mt-2">Confirm Password:</label>
                    <input className="w-full rounded-[5px] border border-gray-500 px-3 py-1.5 text-sm text-blue-gray-700 focus:border-2 focus:border-blue-400 focus:outline-0 disabled:border-0" type="password" id="email" placeholder="........" />
                </div>
                <div className="mt-4">
                    <input type="checkbox"  id="checkbox" />
                    <label htmlFor="checkbox"> I agree with term and conditions</label>
                </div>
                <button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>

              
            </form>
        </div>
    );
}

export default Form;