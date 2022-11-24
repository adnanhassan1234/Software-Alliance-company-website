import React from 'react';
import Link from "next/link";

const OurTeamDataCart = (CurrData) => {

    /* Destructuring the props. */
    const {id, image, name, designation, experience, description } = CurrData;

    return (
        <>
            <div className=" lg:w-1/1 md:w-full my-0 px-3">
                <div className="flex  border-2 my-2 bg-white rounded-lg border-gray-200 border-opacity-50 p-2 sm:flex-row flex-col">
                    <div className="flex">
                        <img src={image} width="100%" alt="" />
                    </div>
                    <div className="flex-grow p-3">
                        <p> {designation} </p>
                        <div className="flex justify-end">
                            <p className="mx-14 text-red-600 font-bold"> {experience} </p>
                        </div>
                        <p className="flex justify-end mb-0">Years of Experience</p>
                        <h2 className="text-gray-900 lg:text-2xl  font-bold text-lg title-font mb-0"> {name} </h2>
                        <p className="">  {description} </p>
                        <ul className="flex py-3 justify-between">
                            <li className="m-1 flex items-center gap-1">
                                <span className="block py-1 px-3 rounded-md bg-red-700 text-white">Java</span>
                                <span className="block py-1 px-3 rounded-md bg-purple-700 text-white">React Native</span>
                                <span className="block py-1 px-3 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white">C#</span>
                            </li>
                            <li>
                             {/* <Link href={`/OurPortfolioData/${CurrData.id}}`}> */}
                                <Link href={"/OurPortfolio"}>
                                <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> View Portfolio</button></Link>
                                <button className="h-9 px-4  text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">Hire now</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeamDataCart;