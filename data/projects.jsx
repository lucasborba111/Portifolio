export const projects = [
    {
      title: "Blog & CMS",
      online: true,
      tags: ["VPS", "NGINX", "Ubuntu", "Docker", "CI/CD", "GitHub Actions", "React", "Redux", ".NET Core", "MySQL"],
      designImage: "/Portifolio/designsystem.svg",
      image: "/Portifolio/blog.png",
      link: "https://github.com/orgs/CMS-Content-Management-System/repositories",
      description: `O projeto foi desenvolvido como um produto digital personalizado para um humorista.
        O site foi pensado para refletir a personalidade leve e divertida do humorista, mas também dar espaço profissional para suas campanhas publicitárias e projetos paralelos. A proposta visual equilibra o entretenimento com a apresentação séria dos conteúdos de mídia e comunicação, visto que o humorista precisava de um ambiente que pudesse crescer junto com suas oportunidades comerciais e presença digital.`,
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
      title: "Controle e Impressão de Cheques Emitidos",
      online: true,
      image: "/Portifolio/signingcheque.png",
      empresaImg: "/Portifolio/maestrodobrasil.png",
      tags: ["C#", ".NET Framework", "Windows Forms", "SQL Server", "Stored Procedures", "Financeiro"],
      model3d: 
      `
        <iframe 
          title="Epson LX 300" 
          class="h-[200px] md:h-[450px] md:w-[550px]"
          frameborder="0" 
          allowfullscreen 
          mozallowfullscreen="true" 
          webkitallowfullscreen="true" 
          allow="autoplay; fullscreen; xr-spatial-tracking" 
          xr-spatial-tracking 
          execution-while-out-of-viewport 
          execution-while-not-rendered 
          web-share 
          src="https://sketchfab.com/models/5a51192e4bef415e811b5d675128f53d/embed">
        </iframe>
        </div>
      `,
      description: `Este projeto foi desenvolvido para atender a uma necessidade levantada pela empresa Maestro do Brasil,
        que identificou a emissão manual e o controle de 1.804 cheques em um período específico.
        A solução consistiu na criação de um módulo de "Cheque Emitido" dentro do sistema financeiro M2,
        permitindo maior segurança, rastreabilidade e automação do processo de emissão e controle de cheques.`,
      developmentDetails: `
        <b>Objetivo:</b><br/>
        Automatizar a emissão e impressão de cheques, controlar talões e sequências, 
        além de integrar o fluxo de cheques ao módulo de Contas a Pagar.<br/><br/>
        
        <b>Funcionalidades:</b><br/>
        • Cadastro e controle de talões (inclusão, liberação, cancelamento)<br/>
        • Emissão e impressão de cheques de forma manual e em lote<br/>
        • Status de cheques: Carteira, Vinculado, Compensado, Cancelado, Devolvido e Sustado<br/>
        • Integração com Contas a Pagar e baixa de títulos<br/>
        • Assistente de impressão validando sequência numérica<br/>
        • Histórico e relatórios para auditoria e acompanhamento<br/><br/>

        <b>Tecnologias Utilizadas:</b><br/>
        • C# .NET (Windows Forms)<br/>
        • SQL Server (tabelas e stored procedures dedicadas)<br/>
        • Integração com impressoras para emissão física<br/><br/>

        <b>Resultados:</b><br/>
        • Redução de erros manuais na emissão de cheques<br/>
        • Maior segurança e rastreabilidade financeira<br/>
        • Automação do processo de numeração e vinculação de cheques<br/>
        • Integração completa ao fluxo financeiro da empresa Maestro
      `,
      id: 2
    },
    {
      title: "English SRS App (EM DESENVOLVIMENTO⚠️)",
      designImage: "/Portifolio/inprogress.png",
      description: "Aplicação em desenvolvimento com foco em auxiliar estudantes de inglês através da metodologia SRS (Spaced Repetition System). O sistema propõe um ciclo de revisões espaçadas e personalizadas com base no desempenho do usuário. Esse projeto é o tema do Trabalho de Conclusão de Curso (TCC).",
      tags: ["SRS", "Educação", "React", "ASP.NET Core", "TCC", "Inglês"],
      id: 3
    }
];