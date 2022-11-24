
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import OurTeamDataCart from "./OurTeamDataCart";

const OurTeamPortfolio = () => {

    // array of object
    const ourTeamData = [
        {
            id: 1,
            image: "images/our1.png",
            name: 'Sylvester Stallone',
            designation: 'Senior Android Developer ',
            experience: '10 ',
            description: 'Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player',
            catagery: "Javascript",

            techLanguage: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'React Native',
                },
                {
                    tech: 'C#',
                }
            ]
        },
        {
            id: 2,
            image: "images/our2.png",
            name: 'Alejandra J.',
            designation: 'Senior Software Engineer',
            experience: '8 ',
            description: 'Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player',
            catagery: "Ruby",

            techLanguage: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'React ',
                },
                {
                    tech: 'C++',
                }
            ]
        },
        {
            id: 3,
            image: "images/our3.png",
            name: 'Oleksandr K.',
            designation: 'Java Developer ',
            experience: '15 ',
            description: 'Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player',
            catagery: "Javascript",

            techLanguage: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'React Native',
                },
                {
                    tech: 'HTML',
                }
            ]
        },
        {
            id: 4,
            image: "images/our3.png",
            name: 'Oleksandr K.',
            designation: 'Java Developer ',
            experience: '15 ',
            description: 'Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player',
            catagery: "Angular",

            techLanguage: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'React Native',
                },
                {
                    tech: 'HTML',
                }
            ]
        },
        {
            id: 5,
            image: "images/our3.png",
            name: 'Oleksandr K.',
            designation: 'Java Developer ',
            experience: '15 ',
            description: 'Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player',
            catagery: "React",

            techLanguage: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'React Native',
                },
                {
                    tech: 'HTML',
                }
            ]
        },
        {
            id: 6,
            image: "images/our3.png",
            name: 'Oleksandr K.',
            designation: 'Java Developer ',
            experience: '15 ',
            description: 'Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player',
            catagery: "Angular",

            techLanguage: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'React Native',
                },
                {
                    tech: 'HTML',
                }
            ]
        },
        {
            id: 7,
            image: "images/our3.png",
            name: 'Oleksandr K.',
            designation: 'Java Developer ',
            experience: '15 ',
            description: 'Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player',
            catagery: "Ruby",

            techLanguage: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'React Native',
                },
                {
                    tech: 'HTML',
                }
            ]
        },
        {
            id: 8,
            image: "images/our3.png",
            name: 'Oleksandr K.',
            designation: 'Java Developer ',
            experience: '15 ',
            description: 'Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player',
            catagery: "Java",

            techLanguage: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'React Native',
                },
                {
                    tech: 'HTML',
                }
            ]
        },
        {
            id: 9,
            image: "images/our3.png",
            name: 'Oleksandr K.',
            designation: 'Java Developer ',
            experience: '15 ',
            description: 'Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player',
            catagery: "Python",

            techLanguage: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'React Native',
                },
                {
                    tech: 'HTML',
                }
            ]
        },

    ];



    const [items, setItem] = useState(ourTeamData);
    const [active, setActive] = useState(true);

    //  *=== It takes a parameter called portfolioItem, and then it filters the ourTeamData array, and returns the updatedItem array ===* 
    const filterItem = (portfolioItem) => {
        const updatedItem = ourTeamData.filter((curElementDta) => {
            return curElementDta.catagery === portfolioItem;
        });
        setItem(updatedItem);
    }



    return (
        <div>
            <div className="our_team bg-center bg-cover pt-14 pb-14 mb-5" style={{ backgroundImage: "url(images/bg1.jpg)" }}>
                <div className="portfolio-tabs mb-5 text-center ">
                    <button className="btn rounded-md bg-stone-50 border-2 text-black py-2 px-3 hover:bg-gray-200" onClick={() => {
                        setItem(ourTeamData);
                    }}> Show All </button>
                    <button className=" btn btn-light  text-black border-2  bg-stone-50 py-2 px-3  rounded-md m-1 inline-block hover:bg-stone-50 hover:text-black" onClick={() => filterItem('Javascript')}> Javascript</button>

                    <button className=" btn btn-light text-black border-2  bg-stone-50 py-2 px-3  rounded-md m-1 inline-block hover:bg-stone-50 hover:text-black" onClick={() => filterItem('Angular')}> Angular </button>
                    <button className=" btn btn-light text-black border-2 bg-stone-50 py-2 px-3  rounded-md m-1 inline-block hover:bg-stone-50 hover:text-black" onClick={() => filterItem('React')}> React </button>
                    <button className=" btn btn-light text-black border-2 bg-stone-50 py-2 px-3  rounded-md m-1 inline-block hover:bg-stone-50 hover:text-black" onClick={() => filterItem('Ruby')}> Ruby on Rails </button>
                    <button className=" btn btn-light text-black border-2 bg-stone-50 py-2 px-3  rounded-md m-1 inline-block hover:bg-stone-50 hover:text-black" onClick={() => filterItem('Java')}> Java </button>
                    <button className=" btn btn-light text-black border-2 bg-stone-50 py-2 px-3  rounded-md m-1 inline-block hover:bg-stone-50 hover:text-black" onClick={() => filterItem('Python')}> Python </button>

                </div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap -m-4">

                            {
                                items.map((CurrData) => {
                                    return (
                                        <OurTeamDataCart {...CurrData} key={CurrData.id} />
                                    )
                                })
                            }

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default OurTeamPortfolio;

