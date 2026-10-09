Nome do projeto:

    sobre-mim

Tecnologias permitidas: 

    javascript, html, css 

Estrutura de arquivos: 

    index.html -> página principal
    style.css -> estilos 
    scripts/
        <nome>.js -> scripts necessários 
    informacoes.md -> documento com as informações gerais do projeto
    PROMPTS.md -> registro dos comandos enviados ao agente de IA

Informações de estilo:

    0 - Estilo do projeto é "BLUEPRINT": Fundo azul rgb(0, 20, 132), texto branco rgb(230, 230, 230).
    1 - Projeto não deve apresentar gradientes de cores.
    2 - Para o tema blueprint, o fundo da página deve apresentar um quadriculado branco apagado rgb(150, 150, 150) simples.
    3 - Código da fonte a ser utilizado (inserido no HEAD):

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    4 - Cards de apresntação não podem conter fundo translucido, devem ter borda completamente branca e um leve "border radius"

Diretrizes:

    0 - O conteúdo de texto apresentado deve seguir de maneira estrita aquilo que é dado como "informação". 

Requisitos obrigatórios: 

    0 - Inclua todos os comandos diretamente enviados ao agente de IA no arquivo PROMPTS.md. O resultado final deve estar bem formatado.

    1 - A página deve incluir um nome e uma apresentação.
      Informações:
            nome: Henrique Reinaldi
            apresentação: Sou um aluno de CIÊNCIA DA COMPUTAÇÃO e participo do ACZG!


    2 - Uma seção "Sobre" com 2 ou 3 linhas sobre sua área de interesse
      Informações:
            area de interesse: Ciência da computação
            tom: leve, sem exageros.

    3 - Uma lista com 3 tecnologias que você quer aprender
      Informações:
            Docker
            Micronaut
            Kafka
            

    4 - Um link para o seu perfil do GitHub
      Informações:
            https://github.com/henriquereinaldi

    5 - CSS deve estar em um arquivo separado `style.css`

Requisitos opicionais:

    6 - Página deve ser responsiva

    7 - Adicionar um botão para alternar entre tema claro e escuro

    8 - Criar uma seção "Projetos" com cards. Coloque em display, por meio de texto, a tecnologia mais usada de cada projeto. 
      Informações:
        Projeto: https://github.com/HenriqueReinaldi/Linketinder-Project
        Descricao: Um aplicativo de contratação às cegas.

        Projeto: https://github.com/HenriqueReinaldi/TODO-list
        Descricao: Ninguem nunca viu uma lista de tarefas melhor.

        Projeto: https://github.com/HenriqF/java-encurtador
        Descricao: O melhor encurtador de links do planeta

        Projeto: https://github.com/HenriqF/c-hashmap
        Descricao: Hashmap simples base para C

    9 - Adicionar um favicon e uma animação suave ao carregar a página