import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { BsPersonBadge, BsUbuntu} from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiTestTubeFill } from "react-icons/pi";
import { TbApi  } from "react-icons/tb";
import { BsFillOctagonFill } from "react-icons/bs";
import { Autoplay } from "swiper/modules";
import { IoLayersOutline } from "react-icons/io5";

import 'swiper/css';
import 'swiper/css/autoplay';
import { SiGithubactions, SiNginx } from "react-icons/si";

export default function Experience () {
    return (
        <div id="experience" className="px-6 m-auto h-screen max-w-[1000px] content-center justify-center">
            <h1 className="text-3xl md:text-5xl w-min m-auto">
                Experience
            </h1>
            <div className="w-full inline-grid grid-cols-1 lg:grid-cols-2 mt-[80px]">
                <div className="w-full flex flex-col gap-5 flex-wrap">
                    <div className="flex flex-row items-center gap-3 flex-wrap">
                        <HiOutlineBuildingOffice2 size={30}/> 
                        <p className="text-[20px] md:text-2xl">Useall Software</p>
                    </div>
                    <div className="flex flex-row items-center gap-3 flex-wrap">
                        <BsPersonBadge size={30}/> 
                        <p className="text-[20px] md:text-2xl">Full Stack Developer</p>
                    </div>
                    <div className="flex flex-row items-center gap-3 flex-wrap">
                        <SlLocationPin size={30}/> 
                        <p className="text-[20px] md:text-2xl">Criciúma, Santa Catarina, Brasil</p>
                    </div>
                    <div className="my-7 md:my-4 swiper-container-wrapper max-w-[500px]">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView="auto" // Troquei para valor fixo
                        loop={true}
                        speed={2000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        allowTouchMove={false}
                        freeMode={true}
                        freeModeMomentum={false}
                        modules={[Autoplay]}
                        onInit={(swiper) => {
                            swiper.params.slidesPerView = 'auto'; // Aplica auto após inicialização
                            swiper.update();
                        }}
                    >
                        <SwiperSlide style={{ width: 'auto' }}>
                            <div className="flex flex-row items-center gap-1 whitespace-nowrap px-2 py-1 bg-neutral-100 rounded-4xl w-fit">
                                <TbApi size={15} color="#512bd4"/>
                                <p className="text-sm sm:text-[12px]">RESTFul</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-row items-center gap-1 whitespace-nowrap px-4 py-1 bg-neutral-100 rounded-4xl w-fit">
                                <IoLayersOutline size={15} color="#2a2a2a"/>
                                <p className="text-sm sm:text-[12px]">DDD </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-row items-center gap-1 whitespace-nowrap px-4 py-1 bg-neutral-100 rounded-4xl w-fit">
                                <BsFillOctagonFill size={10} color="#640e74"/>
                                <p className="text-sm sm:text-[12px]">SOLID</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-row items-center gap-1 whitespace-nowrap px-2 py-1 bg-neutral-100 rounded-4xl w-fit">
                                <PiTestTubeFill size={15} color="#61fb63"/>
                                <p className="text-sm sm:text-[12px]">Unit Test</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-row items-center gap-1 whitespace-nowrap px-4 py-1 bg-neutral-100 rounded-4xl w-fit">
                                <SiGithubactions size={15} color="#2a2a2a"/>
                                <p className="text-sm sm:text-[12px]">CI/CD</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-row items-center gap-1 whitespace-nowrap px-4 py-1 bg-neutral-100 rounded-4xl w-fit">
                                <SiNginx size={20} color="#11880d"/>
                                <p className="text-sm sm:text-[12px]">NGINXS</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-row items-center gap-1 whitespace-nowrap px-3 py-1 bg-neutral-100 rounded-4xl w-fit overflow-hidden">
                                <BsUbuntu size={15} color="#11880d"/>
                                <p className="text-sm sm:text-[12px]">Ubuntu server</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
                    <div className="flex flex-row items-center gap-3 max-w-[500px]">
                        <p className="text-2xl tracking-wider h-full flex-1">
                            Gosto de aprender, compartilhar conhecimento e encarar novos desafios e oportunidades. Valorizo muito o trabalho em equipe, o bom diálogo e a troca de ideias.
                        </p>
                    </div>
                </div>
        </div>
    )
};