import styles from './banner.module.scss';
import Link from "next/link";
import React from 'react';
import ExperienceTabs from './ExperienceTabs';
import FeatureProject from './FeatureProject';
import Cto from '../cto/cto';
// import { useRouter } from 'next/router'


export default function OurPortfolioData() {

    
    
    return (
        <>
            <div className={styles.banner}>
                <div className="our_portfolio bg-gray-100 pt-28 pb-28 ">
                    <div className={"container"}>
                        <div className="welcome pb-3">
                            <p>Hey, I’m</p>
                        </div>
                        <div className="name">
                            <h2 class="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 color_red">ABDULLAH NASIR</h2>
                        </div>
                        <div className="description">
                            <p>I'm a UI UX designer based in Pakistan and also a computer science student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for many years now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work. I have expertise in website design, mob app design, desktop application design and game design.</p>
                        </div>
                        <div className="button_section mt-20">

                            <div class="portfolio-tabs mb-5 ">
                                <button class="btn  py-2 px-4  rounded-md m-1 inline-block hover:text-black border_button">  <img src="images/social/Group 310.png " alt="" /></button>
                                <button class=" btn btn-light py-2 px-4  rounded-md m-1 inline-block hover:text-black border_button"><img src="images/social/Group 309.png " alt="" /></button>
                                <button class="btn btn-light py-2 px-4  rounded-md m-1 inline-block hover:text-black border_button"><img src="images/social/Group 308.png" alt="" /></button>
                                <button class="btn btn-light py-2 px-4  rounded-md m-1 inline-block hover:text-black border_button"> <img src="images/social/Group 307.png " alt="" /></button>
                                <button className='py-3 px-4 '> <img src="images/social/Vector (4).png" alt="" /></button>
                                <button className='py-3 px-4 '> <img src="images/social/linkedin.png" alt="" /></button>
                                <button className='py-3 px-4 '> <img src="images/social/square-instagram.png" alt="" /></button>
                                <button className='py-3 px-4 '> <img src="images/social/square-twitter.png" alt="" /></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
              {/* experice tabs */}
              <ExperienceTabs />  <hr />
              {/* feature Projects */}
              <FeatureProject />
              {/* CTO */}
              <Cto />
        </>
    )
}
