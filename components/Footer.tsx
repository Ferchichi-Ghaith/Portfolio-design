import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="light-bg flex justify-space">
            <span className="white">Copyright © {year} <Link href="/">Ferchichi Ghaith </Link> - All rights reserved.</span>
            <ul className="flex">
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100052321292663" target="_blank" rel="noreferrer">
                        <Image src="/icons/facebook.svg" width={26} height={26} alt="facebook-icon" />
                    </a>
                </li>
               
                <li>
                    <a href="https://github.com/Ferchichi-Ghaith" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={26} height={26} alt="github-icon" />
                    </a>
                </li>
                
            </ul>
        </footer>
    )
}