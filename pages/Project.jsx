import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { Link, useParams } from "react-router";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    const timer = setTimeout(() => {
      const foundProject = projects.find((p) => p.id === parseInt(id));
      setProject(foundProject);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-700 font-medium">Carregando projeto...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Projeto não encontrado!</h2>
          <Link
            to="/"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Voltar para o Portfólio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-50 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header e navegação */}
        <header className="mb-10 max-w-[900px] m-auto">
          <Link
            to="/"
            className="inline-flex items-center text-gray-50 hover:text-indigo-800 font-medium transition-colors group mb-6"
          >
            <FiArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
            Voltar para o Portfólio
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-50">{project.title}</h1>
          </div>
          
        </header>

        {/* Imagem principal do projeto */}
        {project.image && (
          <div className="flex md:max-w-[900px] md:max-h-[450px] mb-4 rounded-2xl overflow-hidden shadow-xl m-auto">
            <img
              src={project.image}
              alt={project.title}
              className="md:max-w-[900px] h-auto object-cover"
            />
          </div>
        )}

        {project.link && (
          <div className="flex items-center space-x-4 mt-8 mx-auto w-fit">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="m-auto shadow-2xs text-sm inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <FiGithub className="mr-2" />
                Código Fonte
              </a>
            )}
          </div>
        )}

        {project.tags && (
          <div className="flex flex-wrap gap-2 mt-4 w-fit mx-auto mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white text-[#6a1f88] text-sm font-semibold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-8">
            <section className="w-fit bg-white rounded-2xl p-6 shadow-sm md:max-w-[900px] ml-auto mr-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre o Projeto</h2>
              <div
                className="prose prose-lg text-gray-700 max-w-none"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            <div className="flex mt-[10px] ml-auto mr-0 w-fit">
              <img src={project.empresaImg} className="max-h-[30px] md:max-h-[50px] rounded-2xl"/>
            </div>
            </section>
            {
              project.model3d &&
              <div className="prose prose-lg text-gray-700 ml-auto mr-auto" dangerouslySetInnerHTML={{ __html: project.model3d }}/>
            }
            {project.developmentDetails && (
              <section className="max-w-[900px] md:bg-white rounded-2xl p-6 md:shadow-sm mt-0 ml-auto mr-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Detalhes do Desenvolvimento</h2>
                
                {project.designImage && (
                  <div className="mb-6">
                    <div className="rounded-xl overflow-hidden shadow-md mb-2">
                      <img
                        src={project.designImage}
                        alt={`Design System do ${project.title}`}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-center text-gray-500 text-sm">Design System</p>
                  </div>
                )}
                
                <div
                  className="prose prose-lg text-gray-700 max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.developmentDetails }}
                />
              </section>
            )}
        </div>
      </div>
    </div>
  );
}

export default Project;