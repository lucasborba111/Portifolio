export const projects = [
    {
      title: "Blog & CMS",
      online: true,
      tags: ["React", "Redux", ".NET Core", "Docker", "NGINX", "Ubuntu", "CI/CD", "GitHub Actions"],
      designImage: "/designsystem.svg",
      image: "/blog.png",
      link: "https://balaiodoteobaldo.com.br/",
      description: `O projeto foi desenvolvido como um produto digital personalizado para um humorista local, que além de seu trabalho no humor, também está diretamente envolvido com ações publicitárias e faz parte da equipe da rádio Tabelando FC, reconhecida pelas narrações dos jogos do Criciúma Esporte Clube.
        O site foi pensado para refletir a personalidade leve e divertida do humorista, mas também dar espaço profissional para suas campanhas publicitárias e projetos paralelos. A proposta visual equilibra o entretenimento com a apresentação séria dos conteúdos de mídia e comunicação.
        Além disso, o projeto foi desenvolvido com foco em performance, <b>responsividade para múltiplos dispositivos (mobile, tablet e desktop)</b>, e facilidade de atualização de conteúdos, visto que o humorista precisava de um ambiente que pudesse crescer junto com suas oportunidades comerciais e presença digital.`,
      developmentDetails: `
        A criação deste projeto teve como objetivo construir um sistema de blog escalável, fácil de manter e altamente customizável. Durante o desenvolvimento, tomei algumas decisões importantes para garantir a qualidade e flexibilidade do sistema:
        <br/><br/>
        <b>Frontend:</b><br/>
        O frontend foi desenvolvido utilizando <b>React, Redux e Styled Components</b>. React foi escolhido pela sua capacidade de criar interfaces dinâmicas e reativas, enquanto o Redux foi usado para gerenciar o estado da aplicação de forma eficiente. Styled Components foi utilizado para garantir que a estilização fosse modular e fácil de manter. Além disso, o frontend foi projetado de forma adaptável para diferentes dispositivos, utilizando técnicas de design responsivo, garantindo que a interface fosse otimizada para desktop, tablets e smartphones.
        <br/><br/>
        <b>Backend:</b><br/>
        O backend foi desenvolvido em <b>ASP.NET</b> Core devido à sua alta performance, suporte robusto a APIs RESTful e fácil integração com banco de dados. Além disso, o uso de C# proporcionou uma boa consistência com as tecnologias que já utilizava.
        <br/><br/>
        <b>Docker e Automação de Deploy:</b><br/>
        A escolha de utilizar <b>Docker</b> foi fundamental para garantir que os serviços fossem isolados e facilmente escaláveis. Docker também facilitou o processo de deployment, tornando-o mais previsível e sem conflitos de ambiente. A automação de deploy foi feita utilizando GitHub Actions, o que permitiu que o deploy fosse automatizado e integrado diretamente com o pipeline de CI/CD.
        <br/><br/>
        <b>NGINX como Proxy Reverso:</b><br/>
        Para gerenciar as requisições e distribuir as cargas de forma eficiente, utilizei o <b>NGINX</b> como proxy reverso. Isso permitiu a separação dos containers de frontend e backend, além de garantir que a aplicação tivesse suporte a HTTPS com SSL via Let's Encrypt.
        <br/><br/>
        <b>Infraestrutura e VPS:</b><br/>
        O sistema foi hospedado em uma <b>VPS fornecida pela Locaweb</b>, que oferece boa performance e confiabilidade para ambientes de produção. A VPS foi configurada com Ubuntu Server, garantindo um ambiente de desenvolvimento estável e eficiente. A escolha do Ubuntu Server foi estratégica por sua robustez e facilidade de administração, além de ser amplamente suportado pela comunidade.
        <br/><br/>
        <b>Provedora de DNS - Locaweb:</b><br/>
        A Locaweb também foi escolhida como provedora de DNS. A plataforma oferece um serviço de DNS seguro e eficiente, que é essencial para garantir a disponibilidade do site e a performance de carregamento. A utilização da Locaweb para gerenciar os registros DNS ajudou a manter a aplicação acessível de forma confiável.
        <br/><br/>
        <b>Escolhas Técnicas e Desafios:</b><br/>
        Durante o desenvolvimento, enfrentei alguns desafios como <b>otimizar</b> o desempenho da aplicação e garantir a escalabilidade do sistema. No entanto, a escolha de tecnologias como Docker e ASP.NET Core ajudou a mitigar muitos desses problemas. A integração com o <b>GitHub Actions</b> também foi uma escolha acertada, pois automatizou várias etapas do processo de desenvolvimento e deployment.
      `,
      id: 1
    },  
    {
      title: "English SRS App (EM DESENVOLVIMENTO⚠️)",
      online: false,
      designImage: "/inprogress.png",
      description: "Aplicação em desenvolvimento com foco em auxiliar estudantes de inglês através da metodologia SRS (Spaced Repetition System). O sistema propõe um ciclo de revisões espaçadas e personalizadas com base no desempenho do usuário. Esse projeto é o tema do Trabalho de Conclusão de Curso (TCC).",
      tags: ["SRS", "Educação", "React", "ASP.NET Core", "TCC", "Inglês"],
      id: 2
    }
];