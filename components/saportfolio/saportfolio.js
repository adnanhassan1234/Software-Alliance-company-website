import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function SaPortfolio() {

    // array of object
    const saporfolioList = [
        {
            image: "images/portfolio/Rectangle1.jpg",
            title: 'Chase Race',
            url: 'https://www.google.com/',
            catagery: "game",
        },
        {
            image: "images/portfolio/Rectangle2.png",
            title: 'Wizkids',
            url: 'https://www.google.com/',
            catagery: "game",
        },
        {
            image: "images/portfolio/Rectangle3.png",
            title: 'Start Resumes',
            url: 'https://www.google.com/',
            catagery: "blockchain",
        },
        {
            image: "images/portfolio/Rectangle1.jpg",
            title: 'Chase Race',
            url: 'https://www.google.com/',
            catagery: "blockchain",
        },
        {
            image: "images/portfolio/Rectangle2.png",
            title: 'Chase Race',
            url: 'https://www.google.com/',
            catagery: "blockchain",
        },
        {
            image: "images/portfolio/Rectangle3.png",
            title: 'Chase Race',
            url: 'https://www.google.com/',
            catagery: "web",
        },
        {
            image: "images/portfolio/Rectangle1.jpg",
            title: 'Chase Race',
            url: 'https://www.google.com/',
            catagery: "web",
        },
        {
            image: "images/portfolio/Rectangle2.png",
            title: 'Chase Race',
            url: 'https://www.google.com/',
            catagery: "web",
        },
        {
            image: "images/portfolio/Rectangle3.png",
            title: 'Chase Race',
            url: 'https://www.google.com/',
            catagery: "web",
        },
        
    ]



    const [items, setItem] = useState(saporfolioList);
    const [active, setActive] = useState(true);

    //  *=== It takes a parameter called portfolioItem, and then it filters the saporfolioList array, and returns the updatedItem array ===* 
    const filterItem = (portfolioItem) => {
        const updatedItem = saporfolioList.filter((curElementDta) => {
            return curElementDta.catagery === portfolioItem;

        });
        setItem(updatedItem);
    }



    return (
        <section className={"section py-20"}>
            <div className={"container"}>
                <div className="portfolio-tabs mb-5 text-center ">
                    <button className="btn rounded-md bg-red-700 text-white px-5 py-3 hover:bg-red-600" onClick={() => {
                        setItem(saporfolioList);
                    }}> Show All </button>
                    <button className=" btn btn-light py-3 px-5 rounded-md m-1 inline-block hover:bg-red-700 hover:text-white" onClick={() => filterItem('blockchain')}> Blockchain and software development </button>
                    <button className="btn btn-light py-3 px-5 rounded-md m-1 inline-block hover:bg-red-700 hover:text-white" onClick={() => filterItem('game')}> Mobile and game apps </button>
                    <button className="btn btn-light py-3 px-5 rounded-md m-1 inline-block hover:bg-red-700 hover:text-white" onClick={() => filterItem('web')}> web and landing pages </button>
                </div>
                
                <div className={"grid grid-cols-1 md:grid-cols-3 md:gap-4 "}>
                    {items.map((saporfolioList) => (
                        <figure className="bg-white rounded-xl shadow overflow-hidden mb-3 md:mb-0">
                            <div className={"overflow-hidden"}>
                                <Link href={saporfolioList.url}>
                                    <a className={"bg-center w-100 h-52 block overflow-hidden bg-no-repeat bg-cover hover:scale-105 transition"} style={{ backgroundImage: `url("${saporfolioList.image}")` }}> </a>
                                </Link>
                            </div>
                            <div className="p-3 pb-5 space-y-4 text-center">
                                <h3 className="text-md md:text-lg font-medium">{saporfolioList.title}</h3>
                                <Link href={"#"}>
                                    <a className={"rounded-md border-2 border-red-700 inline-block px-5 py-3 hover:bg-red-700 hover:text-white"}>
                                        <FontAwesomeIcon
                                            icon={faLink}
                                            className={"mr-2 text-xs"}
                                        />
                                        Live demo
                                    </a>
                                </Link>
                            </div>
                        </figure>
                    ))}
                </div>
                <div className={"text-center pt-10"}>
                    <Link href={"#"}>
                        <a className={"btn rounded-md bg-red-700 text-white inline-block px-5 py-3 hover:bg-red-600"}>Show More</a>
                    </Link>
                </div>    

                {/* pagination */}
                <div className={"pagination"}>
                        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end mt-5">
                                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                    <a href="#" className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                      <p>prev</p>
                                    </a>
                                    <a href="#" aria-current="page" className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">1</a>
                                    <a href="#" className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">2</a>
                                    <a href="#" className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">3</a>
                                    <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
                                    <a href="#" className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">9</a>
                                    <a href="#" className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">10</a>
                                    <a href="#" className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                     <p>Next</p>
                                    </a>
                                </nav>
                        </div>
                    </div>
                </div>
        </section>
    )
}