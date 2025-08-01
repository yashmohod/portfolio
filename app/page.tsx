"use client"
import Image from "next/image";
import mypic from "@/public/IMG_1591.png";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


// import resume from "@/public/"
export default function Home() {

    const temp_description = "orem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet augue vitae justo convallis semper. Etiam vel pulvinar ligula. Maecenas sit amet fringilla nisl, et aliquam mi. Nullam aliquam elit non magna mollis efficitur. Etiam condimentum vel justo at volutpat."

    const projects = [
        {
            title: "Anzen V2",
            description: "Anzen is a data logging and time card website. It was used by Student Auxiliary Safety patrol at Ithaca college Office of public Safety. ",
            img_path: ["anzen_v2/anzen1.png", "anzen_v2/anzen2.png", "anzen_v2/anzen3.png",],
            githubLink: "git@github.com:yashmohod/AnzenV2.git"
        },
        {
            title: "Thermal Diffusion",
            description: "This is a simulation of 1D thermal diffusion in a Copper rod, I created while working on a research paper with Professor Matthew C. Sullivan at Ithaca College.",
            img_path: ["thermalDiff/thm2.gif", "thermalDiff/thm1.png",],
            githubLink: "https://github.com/yashmohod/Thermal-Diffusion.git"
        },

        {
            title: "32-Bit CPU",
            description: "This is a 32-bit CPU simulation in digital circuit software in which I implemented a basic instruction set to move data, perform arithmetic, and perform some logical operations. ",
            img_path: ["cpu/cpu.png", "cpu/cpu2.png", "cpu/cpu3.png"],
            githubLink: "https://github.com/yashmohod/CPU"
        },
        {
            title: "ADA Map",
            description: "This web application was developed for the Occupational Therapy students at Ithaca College to make a map and rate routes. These rating will later be used to make a map to help new students with disabilities to plan their way around the hilly Ithaca College campus. ",
            img_path: ["ada/ada1.png", "ada/ada2.png", "ada/ada3.png",],
            githubLink: "https://github.com/yashmohod/ADA_maps.git"
        },
        {
            title: "SLM Interface",
            description: temp_description,
            img_path: ["slm/slm.png"],
            githubLink: "https://github.com/yashmohod/SLM_interface"
        },
        {
            title: "Anzen V1",
            description: "This is the first version of Anzen which was made using Django to create the entire app.",
            img_path: ["anzen_v1/anzen1.png", "anzen_v1/anzen2.png", "anzen_v1/anzen3.png",],
            githubLink: "https://github.com/yashmohod/Anzen.git"
        },
    ]

    return (
        <div className="flex flex-col ">
            <img src={"test.gif"}
                alt="Picture of the author"
                className="absolute fixed z-[-1]" />
            <div className="flex flex-col sm:flex-row w-100% h-dvh sm:h-dvh  justify-center">
                <div className="flex flex-col w-100% h-3/5 sm:h-full  sm:w-1/2 justify-end sm:justify-center items-center sm:pt-5">
                    <Image
                        src={mypic}
                        alt="Picture of the author"
                        className="rounded-[90] w-3/5 sm:w-3/4  "
                    />

                </div>
                <div className="flex flex-col w-100% h-2/5 sm:h-full   sm:w-1/2 justify-baseline mt-10 sm:mt-0 sm:justify-center items-center">
                    <h1 className="text-center text-4xl">
                        Hi, I am Yash.
                    </h1>
                    <p className="text-justify w-4/5 bg-black backdrop-opacity-10">
                        I am a curious person ready to jump onto the next exciting puzzle. Equipped with knowledge in Physics and Computer Science
                    </p>
                    <div className="flex flex-row w-100% pt-4">
                        <Link href={"https://www.instagram.com/kkuhhakku/"}>
                            <Button variant="outline" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                            </Button>
                        </Link>
                        <Link href={"https://github.com/yashmohod"} className="ml-2">
                            <Button variant="outline" size="icon" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                            </Button>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/yash-mohod-733a95132/"} className="ml-2">
                            <Button variant="outline" size="icon" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </Button>
                        </Link>
                    </div>
                    <a download href="/Yash Mohod Resume.pdf" className="mt-5">
                        <Button >
                            Download Resume
                        </Button>
                    </a>

                </div>
            </div>
            <div className="flex flex-col items-center  w-100% mt-8 sm:mt-0 mr-5 ml-5">
                <h3 className="text-4xl">
                    Projects
                </h3>
                <Separator className="" />
                <div className="flex flex-col w-100% justify-center">
                    {projects.map((item) =>
                        <div key={item.title}>
                            <div className="flex flex-col md:flex-row w-100%  mt-5 md:mt-2 items-center  justify-center">
                                <div className="flex flex-col  w-100% md:w-[350px] items-center justify-baseline ">
                                    <div className="flex flex-row w-100% justify-center space-x-3 items-center">

                                        <Link href={item.githubLink} className="flex flex-row  ml-2">
                                            <Button variant="ghost" size="lg" className="">
                                                <h3 className="text-2xl">
                                                    {item.title}
                                                </h3>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentcolor" className="bi bi-github" viewBox="0 0 16 16" >
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                                </svg>
                                            </Button>
                                        </Link>
                                    </div>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex flex-col w-95% md:w-3/5  mt-5 md:mt-2 items-center">
                                    <Carousel className="w-3/4 items-center"
                                        opts={{
                                            align: "start",
                                            loop: true
                                        }}>
                                        <CarouselContent>
                                            {item.img_path.map((pic) =>
                                                <CarouselItem className=" flex flex-row items-center" key={pic}>
                                                    <img src={pic}
                                                        alt="Picture of the author"
                                                        className="rounded-[10]  items-center" />
                                                </CarouselItem>
                                            )}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </div>
                            </div>
                            <Separator className="mt-5" />
                        </div>
                    )}

                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-stretch w-100% mb-10 mt-5 md:mt-10 ">
                <div className="flex flex-col w-3/4  items-center ml-5 sm:mr-5 md:mr-2">
                    <h3 className="text-4xl">
                        Education
                    </h3>
                    <Separator className="" />
                    <div>
                        <h3 className="">
                            Bachelor Of Science - Ithaca College - 2021-2025
                        </h3>
                        <p className="ml-3">
                            Majors: Computer Science & Physics
                            <br />
                            Minors: Mathematic
                        </p>
                    </div>

                </div>
                {/* <Separator orientation="vertical" className="h-100%" /> */}
                <div className="flex flex-col w-3/4  items-center mr-5 sm:ml-5 md:ml-2 mt-5 md:mt-0">
                    <h3 className="text-4xl">
                        Skills
                    </h3>
                    <Separator className="" />
                    <div>
                        <ul className="list-disc space-y-2">
                            <li>Programming Languages: Python, Java, C, Javascript, R</li>
                            <li>Technologies & Tools: ReactJS, Flask, Django, Git, VsCode, Linux terminal, GitHub</li>
                        </ul>

                    </div>
                </div>
            </div>

            {/* <div className="">
                <h3>
                    Contact
                </h3>
            </div> */}
        </div>
    );
}
