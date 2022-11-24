import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const FeatureProject = () => {

    // array of object
    const saporfolioList = [
        {
            image: "images/feature/f1.png",
            title: 'IntenseProxy',
            description: "A nicer look to Github profiles using features such as user search, authentication using Firebase and charts using the GitHub API.",
            tech: "Figma - Adobe Photoshop - Adobe Illustrator",
            url: 'https://www.google.com/',
            catagery: "game",
        },
        {
            image: "images/feature/f2.png",
            description: "TV application, displays different categories of movies/shows (popular, in theaters, trending etc) alongside a search option using TheMovieDB API for the data",
            tech: "Figma",
            title: '$AAPE Coin',
            url: 'https://www.google.com/',
            catagery: "game",
        },
        {
            image: "images/feature/f3.png",
            description: "Music search application, displays informations about artists such as albums, biography, songs that are available on youtube and much more using TheAudioDB API",
            tech: "Adobe XD - Adobe Illustrator",
            title: 'Blockchain Explorer: Hive Attention',
            url: 'https://www.google.com/',
            catagery: "blockchain",
        },
        {
            image: "images/feature/f4.png",
            description: "Discord music bot using Node.js and Discord's API library to play music through YouTube, added Genius API making the bot capable to pull the lyrics for the current playing song",
            tech: "Figma",
            title: 'GitProfile',
            url: 'https://www.google.com/',
            catagery: "blockchain",
        },
        {
            image: "images/feature/f5.png",
            description: "Proxy provider website including authentication, dashboard and dynamic features",
            tech: "Adobe XD",
            title: 'MovieDB',
            url: 'https://www.google.com/',
            catagery: "blockchain",
        },
        {
            image: "images/feature/f6.png",
            description: "My first Vue app using OpenWeather API and fetch API with no custom libraries for requests or styling.",
            tech: "Figma - Adobe Photoshop",
            title: 'Soundify',
            url: 'https://www.google.com/',
            catagery: "web",
        },
        {
            image: "images/feature/f7.png",
            description: "Used all what I was able to find publicly that is similar to Twitter's UI and also added the tweet function",
            tech: "Adobe XD",
            title: 'Mu6icbot',
            url: 'https://www.google.com/',
            catagery: "web",
        },
        {
            image: "images/feature/f8.png",
            description: "This app is totally designed for university student’s to find their CGPA and GPA.",
            tech: "Figma",
            title: 'IntenseProxy',
            url: 'https://www.google.com/',
            catagery: "web",
        },
        {
            image: "images/feature/f9.png",
            description: "Proxy provider website including authentication, dashboard and dynamic features",
            tech: "Adobe Photoshop",
            title: 'IntenseProxy',
            url: 'https://www.google.com/',
            catagery: "web",
        },

    ]


    return (
        <>
            <div className="feature_project py-20">
                <div className="container">
                    <div className="title mb-5">
                        <p className='uppercase font-bold'> FeatureProject </p>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-3 md:gap-4 "}>
                        {saporfolioList.map((saporfolioList) => (
                            <figure className="bg-white rounded-xl shadow overflow-hidden mb-3 md:mb-0">
                                <div className={"overflow-hidden"}>
                                    <Link href={saporfolioList.url}>
                                        <a className={"bg-center w-100 h-52 block overflow-hidden bg-no-repeat bg-cover hover:scale-105 transition"} style={{ backgroundImage: `url("${saporfolioList.image}")` }}> </a>
                                    </Link>
                                </div>
                                <div className="p-3 pb-5 space-y-4 ">
                                    <h3 className="text-md md:text-lg font-medium">{saporfolioList.title}</h3>
                                    <div className="des padding_p">
                                        <p>{saporfolioList.description}</p>
                                    </div>
                                    <div className="tech">
                                        <p className="text-red-500"> {saporfolioList.tech} </p>
                                    </div>
                                    <Link href={"#"}>
                                        <a className={"rounded-md border-2 border-red-700 inline-block px-4 py-3 hover:bg-red-700 hover:text-white"}>
                                            <FontAwesomeIcon
                                                icon={faLink}
                                                className={"mr-2 text-xs"}
                                            />
                                            Live demo
                                        </a>
                                    </Link>
                                    <button className="mx-4 my-5 alignment"><img src="images/behance 1 (2).png" width="90%" alt="" /></button>
                                </div>
                            </figure>
                        ))}
                    </div>
                    <div className={"text-center pt-10 "}>
                        <Link href={"#"}>
                            <a className={"btn rounded-md bg-red-700 text-white inline-block px-8 py-3 hover:bg-red-600"}>Show More</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureProject;