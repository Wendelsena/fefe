// Seleciona os elementos
const tabLinks = document.querySelectorAll('.tab-list a');
const tabContents = document.querySelectorAll('.tab-content');

// Adiciona o evento de clique aos links das abas
tabLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Remove a classe "active" de todos os links e conteúdos
    tabLinks.forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Adiciona a classe "active" ao link e conteúdo selecionados
    const selectedTab = document.querySelector(link.getAttribute('href'));
    link.classList.add('active');
    selectedTab.classList.add('active');
  });
});
function showSidebar() {
    document.querySelector('.sidebar').classList.remove('hidden');
  }
  
  function hideSidebar() {
    document.querySelector('.sidebar').classList.add('hidden');
  }
  
function exibirGif(resposta) {
    // Esconda todos os GIFs
    var gifs = document.getElementsByClassName("gif");
    for (var i = 0; i < gifs.length; i++) {
        gifs[i].style.display = "none";
    }

    // Exiba o GIF correspondente à resposta
    var gifId = "gif-" + resposta;
    var gif = document.getElementById(gifId);
    if (gif) {
        gif.style.display = "block";
    }
}

function limitarValor() {
    var input = document.getElementById("amor");
    var valor = parseInt(input.value);

    if (valor > 99) {
        input.value = "99";
    }
}

function calcularAmor() {
    var valor = parseInt(document.getElementById("amor").value);
    var mensagem = document.getElementById("mensagem");
    var videoContainer = document.getElementById("videoContainer");
    
    if (isNaN(valor)) {
        mensagem.innerHTML = "Digite um número válido.";
    } else if (valor >= 1 && valor <= 2) {
        mensagem.innerHTML = "Mds!?"
        videoContainer.innerHTML = '<video class="gif" autoplay loop><source src="videos/ines1.mp4"></video>';
    } else if (valor >= 3 && valor <= 4) {
        mensagem.innerHTML = "Já esperava!"
        videoContainer.innerHTML = '<video class="gif" autoplay loop><source src="videos/ines3.mp4"></video>';
    } else if (valor >= 5 && valor <= 6) {
        mensagem.innerHTML = "Kkkkkkk bem sua cara, trambolho"
        videoContainer.innerHTML = '<video class="gif" autoplay loop><source src="videos/ines4.mp4"></video>';
    } else if (valor >= 7 && valor <= 8) {
        mensagem.innerHTML = "Seu namorado te ama mais"
        videoContainer.innerHTML = '<video class="gif" autoplay loop><source src="videos/ines2.mp4"></video>';
    } else if (valor >= 9 && valor <= 10) {
        mensagem.innerHTML = "Seu namorado definitivamente te ama mais"
        videoContainer.innerHTML = '<video class="gif" autoplay loop><source src="videos/ines5.mp4"></video>';
    } else if (valor >= 11 && valor <= 98) {
        mensagem.innerHTML = "Boa tentativa, mas com certeza seu namorado te ama mais"
        videoContainer.innerHTML = '<video class="gif" autoplay loop><source src="videos/ines6.mp4"></video>';
    } else if (valor == 99) {
        mensagem.innerHTML = "Lamento informar que o número máximo de amor foi atingido, mas tenho uma ótima notícia: o amor do seu namorado continua além do infinito. p.s. amo ser crinjola"
        videoContainer.innerHTML = '<video class="gif" autoplay loop><source src="videos/ines7.mp4"></video>';
    } else {
        mensagem.textContent = "seu namorado chora no banho";
        videoContainer.innerHTML = '';
      }
    }
   
        