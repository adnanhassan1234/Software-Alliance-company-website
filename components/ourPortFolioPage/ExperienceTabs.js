import React from 'react';


const ExperienceTabs = () => {

    const [openTab, setOpenTab] = React.useState(1);

    return (
        <>
            {/* // experience_section */}
            <div className="experience pt-20 pb-10">
                <div className="container">
                    <div className="title uppercase my-2">
                        <p className='font-bold'>experience <span className='float-right capitalize text-xs font-normal'>Jun 2022 - Present</span></p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full tabs_mul">
                            <ul
                                className="flex  mb-0 list-none flex-wrap pt-3 pb-4 flex-row tabs_col"
                                role="tablist"
                            >
                                {/* 1st */}
                                <li className="-mb-px tabs_width_max font-bold bg-red-600 mr-2 my-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-medium uppercase px-5 py-3 tabs_width  shadow-lg rounded block leading-normal " +
                                            (openTab === 1
                                                ? "text-black text-white bg-blueGray-600"
                                                : "text-blueGray-600 bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(1);
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        Software Alliance
                                    </a>
                                </li>
                                {/* 2nd */}
                                <li className="-mb-px font-bold bg-red-600 mr-2 my-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-medium uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 2
                                                ? "text-black text-white bg-blueGray-600"
                                                : "text-blueGray-600 bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(2);
                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        Dtech Systems
                                    </a>
                                </li>
                                {/* 3rd */}
                                <li className="-mb-px font-bold bg-red-600 mr-2 my-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-medium uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 3
                                                ? "text-black text-white bg-blueGray-600"
                                                : "text-blueGray-600 bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(3);
                                        }}
                                        data-toggle="tab"
                                        href="#link3"
                                        role="tablist"
                                    >
                                        Idenbrid INC.
                                    </a>
                                </li>
                                {/* 4th */}
                                <li className="-mb-px  font-bold bg-red-600 mr-2 my-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-medium uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 4
                                                ? "text-black text-white bg-blueGray-600"
                                                : "text-blueGray-600 bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(4);
                                        }}
                                        data-toggle="tab"
                                        href="#link4"
                                        role="tablist"
                                    >
                                        Powerstar Group
                                    </a>
                                </li>
                                {/* 6th */}
                                <li className="-mb-px  font-bold bg-red-600 mr-2 my-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-medium uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 5
                                                ? "text-black text-white bg-blueGray-600"
                                                : "text-blueGray-600 bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(5);
                                        }}
                                        data-toggle="tab"
                                        href="#link5"
                                        role="tablist"
                                    >
                                        Upwork
                                    </a>
                                </li>
                                {/* 5th */}
                                <li className="-mb-px  font-bold bg-red-600 mr-2 my-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-medium uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 6
                                                ? "text-black text-white bg-blueGray-600"
                                                : "text-blueGray-600 bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(6);
                                        }}
                                        data-toggle="tab"
                                        href="#link6"
                                        role="tablist"
                                    >
                                        Fiverr
                                    </a>
                                </li>
                            </ul>

                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="tab-content tab-space">
                                        {/* 1st ans */}
                                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                            <div className="designation">
                                                <h5 className="font-medium mb-4 leading-tight text-xl mt-0 mb-2 text-blue-600">UI/UX Designer</h5>
                                            </div>
                                            <div className="location my-3 font-medium text-red-600">
                                                <p>Johar Town - Lahore</p>
                                            </div>
                                            <div className="des my-3">
                                                <ul>
                                                    <li className='my-4'>- Designing UI screens for the web application using Figma and Adobe XD.</li>
                                                    <li className='my-4'>- Design graphic user interface elements, like menus, tabs and widgets.</li>
                                                    <li className='my-4'>- Conduct layout adjustments based on user feedback.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                            <div className="designation">
                                                <h5 className="font-medium mb-4 leading-tight text-xl mt-0 mb-2 text-blue-600">Backend Developer</h5>
                                            </div>
                                            <div className="location my-3 font-medium text-red-600">
                                                <p>Johar Town - Lahore</p>
                                            </div>
                                            <div className="des my-3">
                                                <ul>
                                                    <li className='my-4'>- Designing UI screens for the web application using Figma and Adobe XD.</li>
                                                    <li className='my-4'>- Design graphic user interface elements, like menus, tabs and widgets.</li>
                                                    <li className='my-4'>- Conduct layout adjustments based on user feedback.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* 2nd ans */}
                                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                            <div className="designation">
                                                <h5 className="font-medium mb-4 leading-tight text-xl mt-0 mb-2 text-blue-600">Web Developer</h5>
                                            </div>
                                            <div className="location my-3 font-medium text-red-600">
                                                <p>Johar Town - Lahore</p>
                                            </div>
                                            <div className="des my-3">
                                                <ul>
                                                    <li className='my-4'>- Designing UI screens for the web application using Figma and Adobe XD.</li>
                                                    <li className='my-4'>- Design graphic user interface elements, like menus, tabs and widgets.</li>
                                                    <li className='my-4'>- Conduct layout adjustments based on user feedback.</li>
                                                    <li className='my-4'>- Design graphic user interface elements, like menus, tabs and widgets.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                            <div className="designation">
                                                <h5 className="font-medium mb-4 leading-tight text-xl mt-0 mb-2 text-blue-600">Graphic Designer</h5>
                                            </div>
                                            <div className="location my-3 font-medium text-red-600">
                                                <p>Johar Town - Lahore</p>
                                            </div>
                                            <div className="des my-3">
                                                <ul>
                                                    <li className='my-4'>- Designing UI screens for the web application using Figma and Adobe XD.</li>
                                                    <li className='my-4'>- Design graphic user interface elements, like menus, tabs and widgets.</li>
                                                    <li className='my-4'>- Designing UI screens for the web application using Figma and Adobe XD.</li>
                                                    <li className='my-4'>- Conduct layout adjustments based on user feedback.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                                            <div className="designation">
                                                <h5 className="font-medium mb-4 leading-tight text-xl mt-0 mb-2 text-blue-600">Business Developer</h5>
                                            </div>
                                            <div className="location my-3 font-medium text-red-600">
                                                <p>Johar Town - Lahore</p>
                                            </div>
                                            <div className="des my-3">
                                                <ul>
                                                    <li className='my-4'>- Designing UI screens for the web application using Figma and Adobe XD.</li>
                                                    <li className='my-4'>- Design graphic user interface elements, like menus, tabs and widgets.</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                                            <div className="designation">
                                                <h5 className="font-medium mb-4 leading-tight text-xl mt-0 mb-2 text-blue-600">Digital Marketing</h5>
                                            </div>
                                            <div className="location my-3 font-medium text-red-600">
                                                <p>Johar Town - Lahore</p>
                                            </div>
                                            <div className="des my-3">
                                                <ul>
                                                    <li className='my-4'>- Conduct layout adjustments  based on user feedback.</li>
                                                    <li className='my-4'>- Designing UI screens for the web application using Figma and Adobe XD.</li>
                                                    <li className='my-4'>- Design graphic user interface elements, like menus, tabs and widgets.</li>
                                                    <li className='my-4'>- Conduct layout adjustments based on user feedback.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ExperienceTabs;