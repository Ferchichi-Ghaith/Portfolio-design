import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <img className="imglogo" src="/images/love.png" alt="" />
                    <p className="love"> </p>
                    <h1 className="white">Talk is cheap </h1>
                    <h1 className="white">Show me the code ... !</h1>
                    <p className="love"> </p>
                    <a className="green" href="mailto:workjob148@gmail.com" target="_blank">Let&#39;s chat ! </a>
                </div>
                <Image src="/images/yellowghaith.png" width={460} height={530} alt="ghaith"   /> 
            </div>
        </header>
    )
}