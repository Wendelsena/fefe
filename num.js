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
   
        