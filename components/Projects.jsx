import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { projects } from "../data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="m-auto py-20 px-6 md:px-20 bg-white max-w-[1000px]">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid gap-8 grid-cols-1">
        {projects.map((project, index) => (
          <Link to={`${project.online ? `/project/${project.id}` : '#'}`}>
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <img
                    src={project.designImage}
                    alt={project.title}
                    about="teste"
                    className="rounded-xl w-auto m-auto max-h-[400px]"
                  />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-5 indent-10">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                    key={tag}
                    className="text-sm bg-gray-200 px-2 py-1 rounded-full text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 ml-auto mr-0 w-min"><div className={`size-3 rounded-full ${project.online ? 'bg-green-600' : 'bg-red-600'}`}></div><p>{project.online ? 'ONLINE' : 'OFFLINE'}</p></div>
              </div>
            </motion.div>
            </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
