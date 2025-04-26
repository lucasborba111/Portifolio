import { projects } from "../data/projects";
import { Link, useParams } from "react-router";

function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id)); // Encontrar o projeto com o id correspondente

  if (!project) {
    return <div className="text-center text-xl text-red-500">Projeto não encontrado!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      <div className="flex-1 bg-gray-50 py-12">
        <div className="text-start ml-3">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
          >
            Voltar para o Portfólio
          </Link>
        </div>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-900 text-center mb-6">{project.title}</h2>

          {project.image && (
            <div className="flex justify-center mb-8">
              <figure>
                  <img
                    src={project.image}
                    alt={project.title}
                    about="teste"
                    className="rounded-xl shadow-2xl w-full max-w-4xl"
                  />
                    <figcaption><a href={project.link} className="text-lg cursor-pointer text-blue-600 hover:text-blue-800 font-semibold">{project.link}</a></figcaption>
                </figure>
            </div>
          )}
          <p dangerouslySetInnerHTML={{ __html: project.description }} className="text-lg"></p>
          {project.developmentDetails && (
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8  mt-24">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Detalhes do desenvolvimento</h3>
              {project.image && (
                <div className="flex justify-center mb-8">
                <figure>
                  <img
                    src={project.designImage}
                    alt={project.title}
                    about="teste"
                    className="rounded-xl shadow-2xl w-full max-w-4xl"
                  />
                    <figcaption>Design System</figcaption>
                </figure>
                </div>
              )}
              <p className="text-lg text-gray-700 text-justify text-wrap" dangerouslySetInnerHTML={{__html: project.developmentDetails}}></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
