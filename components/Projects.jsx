import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { projects } from "../data/projects";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import required modules
import { Navigation, Pagination } from "swiper/modules";

const ProjectsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Atualizar a navegação quando o Swiper estiver pronto
  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="relative px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-violet-950">
        Meus Projetos
      </h2>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3 }
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group w-fit"
            >
              <Link
                to={project.online ? `/project/${project.id}` : "#"}
                className={`block h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                  !project.online ? "opacity-70 cursor-default" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {!project.online && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg bg-red-500 px-4 py-2 rounded-full">
                        Em breve
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {project.shortDescription || 
                      (project.description && project.description.replace(/<[^>]*>/g, '').substring(0, 100) + '...')}
                  </p>
                  {project.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="flex justify-center items-center mt-9 space-x-4 w-[400px] md:mx-auto md:w-min">
        <button
          ref={prevRef}
          className="swiper-button-prev-custom w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center hover:bg-indigo-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Projetos anteriores"
          disabled={activeIndex === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Custom pagination - Agora centralizada */}
        <div className="custom-pagination flex justify-center space-x-2 max-w-fit" />
        
        <button
          ref={nextRef}
          className="swiper-button-next-custom w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center hover:bg-indigo-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Próximos projetos"
          disabled={activeIndex === projects.length - 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        :global(.custom-pagination) {
          display: flex;
          justify-content: center;
          position: relative;
          width: auto;
        }
        
        :global(.swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background-color: #d1d5db;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        
        :global(.swiper-pagination-bullet-active) {
          background-color: #4f46e5;
          opacity: 1;
          transform: scale(1.2);
        }
        
        :global(.swiper-button-disabled) {
          opacity: 0.4;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default ProjectsSection;