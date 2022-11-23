import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Front-End "
                        icon="/icons/design.svg"
                        description="I develop Front-end with HTML5 , CSS3 ,  React JS."
                        projects={7} />
                    <AboutCard
                        title="Back-End "
                        icon="/icons/code.svg"
                        description="I develop Back-End with coding PHP , Node JS."
                        projects={3} />
                    <AboutCard
                        title="Mobile Application"
                        icon="/icons/phone.svg"
                        description="I develop Android and ios apps with Python ."
                        projects={4} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m  Ferchichi Ghaith , غيث الفرشيشي</h1>
                    <h3 className="white">Developement it&#39;s not magic , it&#39;s how it works!</h3>
                    <p className="gray">I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.<br/><br/> I have proceeded my dream to be a developer as it has been my lifelong ambition. I am a talented Front-End developer. As the saying goes,a journey of Thousand miles begins with a single step.Three years ago i started learning Programming and web developement on the internet and took it as my course of study, Now im in ISET DJERBA to get my license as web devolper. <br/><br/>
                    Two years ago i started working to get some money with my coding skills that&#39;s why i need to upgrade them more than any time <br></br> !-Dont forget to commit ...</p>
                </div>
            </div>
            <div className="flex partners justify-space-icon">
                <Image className="khedmalik"src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
            </div>
           
            
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="project">{projects.toString()} projects</span>
        </div>
    )
}