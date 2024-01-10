document.addEventListener('DOMContentLoaded', function() {

    const divIconePesquisa = document.querySelector('#search-icons');
    const IconeFechar = document.querySelector('#close');
    const IconeAbrir = document.querySelector('#search');
    const listaItens = document.querySelector('#lista-Menu');

    divIconePesquisa.addEventListener("click", (evt) => {
        listaItens.innerHTML = "";
        evt.target.style.display = "none";
        elementInput();
        IconeFechar.style.display = "block";
    });

    IconeFechar.addEventListener("click", (evt) => {
        evt.stopPropagation();
        evt.target.style.display = "none"
        let contentListaItens = `<li class="items"><a href="#" target="_blank" rel="next" id="Home">Home</a></li>
        <li class="items"><a href="#" target="_blank" rel="next">Como baixar?</a></li>
        <li class="items">
            <a href="#" target="_blank" rel="next" id="sites">Sites<i class="fa-solid fa-angle-down" style="color: #fff; margin-left: 0.3rem;"></i>
            </a>
        </li>
        <li class="items">
            <a href="#" target="_blank" rel="next" id="parceiros">Parceiros<i class="fa-solid fa-angle-down" style="color: #fff; margin-left: 0.3rem;"></i>
            </a>
        </li>
        <li class="items">
            <a href="#" target="_blank" rel="next" id="torrent">Torrents<i class="fa-solid fa-angle-down" style="color: #fff; margin-left: 0.3rem;"></i>
            </a>
        </li>
        <li class="items"><a href="#" target="_blank" rel="next">Youtube</a></li>
        <li class="items"><a href="#" target="_blank" rel="next">Reels</a></li>
        <li class="items"><a href="#" target="_blank" rel="next">TikTok</a></li>
        <li class="items"><a href="#" target="_blank" rel="next">Insta</a></li>
        <li class="items"><a href="#" target="_blank" rel="next">Shorts</a></li>
    </ul>
    <div class="dropdown-menu-for-site">
        <ul id="dropdown-list">
            <li>Tech Bench</li>
            <li>Arquive.org</li>
            <li>Rg aguard</li>
        </ul>
    </div>
    <div class="dropdown-menu-for-parceiros">
        <ul id="dropdown-list1">
            <li>Sayro digital</li>
            <li>Raton downloads</li>
            <li>Bennitch Tech</li>
            <li>Fabiano tech</li>
        </ul>
    </div>
    <div class="dropdown-menu-for-torrents">
        <ul id="dropdown-list2">
            <li>1377x</li>
            <li>bt4g</li>
            <li>btdig</li>
            <li>eztv</li>
            <li>limotorrents</li>
            <li>nyaa</li>
            <li>rytracker</li>
            <li>theparatybay</li>
            <li>torlock</li>
            <li>torrentsdownloads</li>
            <li>torrentsgalaxy</li>
            <li>torrentseek</li>
            <li>yts</li>
        </ul>`
        listaItens.innerHTML = contentListaItens;
        IconeAbrir.style.display = "block";
    });
    function elementInput() {
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "pesquisa");
        input.setAttribute("id", "pesquisa");
        listaItens.appendChild(input);
        input.focus();
    }

    document.addEventListener("mouseenter", function (evt) {
        if (evt.target.matches('#sites')) {
            $('.dropdown-menu-for-site').css('display', 'block');
        } else if (evt.target.matches('#parceiros')) {
            $('.dropdown-menu-for-parceiros').css('display', 'block');
        } else if (evt.target.matches('#torrent')) {
            $('.dropdown-menu-for-torrents').css('display', 'block');
        }
    });
    document.addEventListener("mouseleave", function (evt) {
        if (evt.target.matches('.dropdown-menu-for-site')) {
            $('.dropdown-menu-for-site').css('display', 'none');
        } else if (evt.target.matches('.dropdown-menu-for-parceiros')) {
            $('.dropdown-menu-for-parceiros').css('display', 'none');
        } else if (evt.target.matches('.dropdown-menu-for-torrents')) {
            $('.dropdown-menu-for-torrents').css('display', 'none');
        }
    });
});


