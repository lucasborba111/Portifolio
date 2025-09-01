import { BsGithub, BsLinkedin, BsUbuntu} from "react-icons/bs";
import 'swiper/css';
import 'swiper/css/autoplay';
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import { Link } from "react-router";

export default function AboutMe () {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("devlucasborba@gmail.com");
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col h-full justify-center min-w-[400px] md:m-5 mt-16">
            <div className="flex flex-col items-center gap-3 flex-wrap w-fit ml-auto mr-auto">
                <img src="profile.jpg" className="m-auto rounded-full w-42 h-42 object-cover bg-"/>
                <p className="text-[25px] m-auto">
                    Lucas Borges Borba
                </p>
                <p className="text-[20px]">Engenheiro de software</p>
                <div className="flex flex-row gap-6">
                    <div className="relative flex items-center m-0 cursor-pointer">
                        <SiGmail size={25} onClick={handleCopy} />

                        <p
                            className={`absolute left-[90%] top-full mt-2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-[14px] whitespace-nowrap select-none transition-all duration-300 ease-in-out
                            ${copied ? "opacity-100 translate-y-0 translate-x-[-50%]" : "opacity-0 translate-y-2"}
                            `}
                        >
                            {copied ? "Copiado!" : "devlucasborba@gmail.com"}
                        </p>
                    </div>
                    <Link to={"https://github.com/lucasborba111"}>
                        <div className="flex flex-row items-center gap-3 flex-wrap m-0 cursor-pointer">
                            <BsGithub size={25}/> 
                        </div>
                    </Link>
                    <Link to={"https://www.linkedin.com/in/devlucasborba/"}>
                        <div className="flex flex-row items-center gap-3 flex-wrap m-0 cursor-pointer">
                            <BsLinkedin size={25}/> 
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};