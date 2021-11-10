// ******************************************************************
// Criando uma função que ao ser chamada abrirá um campo de login

function abrirJanela1() {
  let body = document.querySelector('body');
  body.classList.add('body2')
  body.innerHTML = `<main class="form-signin modallogin">
    <form method="post" action="index.html">
      <img class="mb-4" src="img/Acordes-y.jpg" alt="" width="100%" height="100%">
      <h1 class="h3 mb-3 fw-normal">Login</h1>
  
      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Endereço de Email</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Senha</label>
      </div>
  
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Lembra
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
      <p class="mt-5 mb-3 text-muted">&copy Acordes</p>
    </form>
  </main>
  <svg id="fechar" xmlns="http://www.w3.org/2000/svg" width="6%" height="6%" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" onclick="fecharJanela()">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`
}
// ******************************************************************
// Criando uma função que ao ser chamada fechará o campo de login

function fecharJanela() {
  let body = document.querySelector('body');
  body.classList.remove('body2')
  body.innerHTML = `
    <nav class="navbar navbar-expand-lg">

<div class="container-fluid">
    <img id='logo' src="img/Acordes-y.jpg"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" id="btnNav"></span>
    </button>

    <div class="collapse navbar-collapse tamanho" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="Index.html">Home |</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Oficinas.html">Oficinas |</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Padrinho.html">Padrinhos |</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="quemsomos" href="QuemSomos.html" id="navbarDropdown"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Quem Somos
                </a>
                <ul class="dropdown-menu cor-amarelo" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item cor" href="QuemSomos.html">Nossa história</a></li>
                    <li><a class="dropdown-item cor" href="QuemSomos.html#p1">Depoimentos</a></li>
                </ul>
            </li>
            <a href="#"><button class="amarelo-btn" id="login" onclick="abrirJanela1()" >Login</button></a>
        </ul>

    </div>

</div>
</nav>
<main>
<section>
  <a href="Padrinho.html">
    <img src="img/1000Padrinhos.png" id="bannerIndex">
  </a>
  <div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
</section>
<section class="container-fluid" id="mainIndex">
  <div class="row">
    <div class="col-lg-4 col-md-12 col-sm-12 mt-5 mb-5 d-flex justify-content-center">
      <div class="card cardIndex" style="width: 16rem;">
        <img src="img/img.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="tituloCards"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
          </svg> Acordes</h3>
          <p class="card-text">Organização não governamental, sem fins lucrativos. Atua com famílias de
            baixa renda, no âmbito do desenvolvimento pessoal através da cultura e do aprendizado de instrumentos
            musicais.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-12 col-sm-12 mt-5 mb-5 d-flex justify-content-center">
      <div class="card cardIndex" style="width: 16rem;">
        <img src="img/img1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
         <h3 class="tituloCards"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
        </svg> Música</h3>
         <p class="card-text"> Música é uma manifestação artística e cultural de um povo, em determinada época ou
            região. A música é um veículo usado para expressar os sentimentos e até mesmo o pensamento dos indivíduos.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-12 col-sm-12 mt-5 mb-5 d-flex justify-content-center">
      <div class="card cardIndex" style="width: 16rem;">
        <img src="img/img2.jpg" class="card-img-top" alt="..." id="fotoIndex">
        <div class="card-body">
          <h3 class="tituloCards"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
          </svg> Oficinas</h3>
          <p class="card-text"> Nós desenvolvemos oficinas de cordas, sopro e percursão, com objetivo de realizar
            inclusão social na periféria de São Paulo, para crianças e adolescentes, com a missão de proporcionar
            lazer, saúde, educação.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="container w-75 pb-5 textPad"  id="tituloIndex" >
    <h2 class="py-5">Através da música levamos inclusão social para a periferia de São Paulo!</h2>
    <p>Desenvolvemos aspectos físicos e mentais por exigir dos alunos a atenção, criatividade e dinamismo.
      Disponibilizamos oficinas de cordas, sopros e percussões no contraturno escolar.</p>
      <p>O acesso as oficinas de música da Acordes é universal e gratuito, porém, desenvolvemos políticas e práticas com foco na inclusão e na atração e manutenção de alunos em situação de vulnerabilidade econômica e social. A partir do momento em que passam a integrar a Acordes, os alunos recebem atenção que vai muito além do ensino musical. O programa possui metas específicas relativas ao acompanhamento social das crianças, adolescentes e jovens atendidos, observando todas as condições que afetam a vida e o bem estar de cada um – incluindo educação, assistência social, saúde, habitação, cultura, lazer, trabalho e outros.</p>
        <p>Para concretizar esse acompanhamento, realizamos oficinas de música , com foco, além do aprendizado musical, em integrações socioculturais no contraturno escolar.
        </p>
    <p>Requisitos: idade entre 6 e 20 anos; estar matriculado na escola e com frequência acima de 90%; renda
      familiar até R$ 500,00 por pessoa; residir nos bairros Capão Redondo, Carapicuíba e Guaianases. Os alunos
      menores de idade, precisarão dos dados do responsável legal.</p>
  </div>
</section>
</main>
  
    <footer class="cor-azul">
    <div class="row g-0 pt-2 ctn-footer">
    <div class="col-6 teste2">
    <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link active p-0  tamanho-a" href="index.html">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-0 tamanho-a" href="Oficinas.html">Oficinas</a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-0 tamanho-a" href="QuemSomos.html">Quem Somos</a>
        </li>
    </ul>
    </div>
    <div class="col-6 pe-5 pt-4 icons text-end teste2">
        <section >
            <a class="icon-facebook text-decoration-none" href="#facebook" class="iconsMidias"
                style="margin-right: 10px;"></a>
            <a class="icon-instagram text-decoration-none" href="#instagram" style="margin-right: 10px;"></a>
            <a class="icon-whatsapp text-decoration-none" href="#whats" style="margin-right: 10px;"></a>
            <a class="icon-twitter text-decoration-none" href="#twitter" style="margin-right: 10px;"></a>
            <a class="icon-youtube text-decoration-none" href="#youtube" style="margin-right: 10px;"></a>
        </section>
    </div>
    <!-- Copyright -->
    <div id="copyright">
        © 2021 Acordes
    </div>
    <footer id="footer2">
        <div id="copyright-1" class="col-4  p-0">
        <div id="textcopy">© 2021 Acordes</div>
        </div>
    </footer>
</div>
    </footer>
  
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script>
      new window.VLibras.Widget('https://vlibras.gov.br/app');
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"></script>`
}


// ******************************************************************
// Criando variáveis header e footer

var header = document.querySelector('header');
var footer = document.querySelector('footer');


// ******************************************************************
// Atribuindo ao header todo o menu Nav, permitindo adicionar o modelo nav em qualquer página que a chamar, facilitando futuras correções ou melhorias

header.innerHTML = `<nav class="navbar navbar-expand-lg">

<div class="container-fluid">
    <img id='logo' src="img/Acordes-y.jpg"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" id="btnNav"></span>
    </button>

    <div class="collapse navbar-collapse tamanho" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="Index.html">Home |</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Oficinas.html">Oficinas |</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Padrinho.html">Padrinhos |</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="quemsomos" href="QuemSomos.html" id="navbarDropdown"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Quem Somos
                </a>
                <ul class="dropdown-menu cor-amarelo" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item cor" href="QuemSomos.html">Nossa história</a></li>
                    <li><a class="dropdown-item cor" href="QuemSomos.html#p1">Depoimentos</a></li>
                </ul>
            </li>
            <a href="#"><button class="amarelo-btn" id="login" onclick="abrirJanela1()" >Login</button></a>
        </ul>

    </div>

</div>
</nav>`;

// ******************************************************************
// Atribuindo ao footer todo o rodapé personalizado, permitindo adicionar o modelo em qualquer página que o chamar, facilitando futuras correções ou melhorias

footer.innerHTML = `
<div class="row g-0 pt-2 ctn-footer">
    <div class="col-6 teste2">
    <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link active p-0  tamanho-a" href="index.html">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-0 tamanho-a" href="Oficinas.html">Oficinas</a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-0 tamanho-a" href="QuemSomos.html">Quem Somos</a>
        </li>
    </ul>
    </div>
    <div class="col-6 pe-5 pt-4 icons text-end teste2">
        <section >
            <a class="icon-facebook text-decoration-none" href="#facebook" class="iconsMidias"
                style="margin-right: 10px;"></a>
            <a class="icon-instagram text-decoration-none" href="#instagram" style="margin-right: 10px;"></a>
            <a class="icon-whatsapp text-decoration-none" href="#whats" style="margin-right: 10px;"></a>
            <a class="icon-twitter text-decoration-none" href="#twitter" style="margin-right: 10px;"></a>
            <a class="icon-youtube text-decoration-none" href="#youtube" style="margin-right: 10px;"></a>
        </section>
    </div>
    <!-- Copyright -->
    <div id="copyright">
        © 2021 Acordes
    </div>
    <footer id="footer2">
        <div id="copyright-1" class="col-4  p-0">
        <div id="textcopy">© 2021 Acordes</div>
        </div>
    </footer>
</div>`

