import ListaFilmes from './../components/lista-filmes'
import CategoriasService from'./../services/categorias-service'
import GenerosService from './../services/generos-service'

export default class Inicio {
    constructor () {
        this.exibindoMenu = false
    }

    async carregarGeneros () {
        const servico = new GenerosService()

        const listaGeneros = await servico.buscarGeneros()
        const ul = document.querySelector('#listaGeneros')
        
        for (const genero of listaGeneros) {
            const li = document.createElement('li')
            li.innerHTML = genero.descricao

            ul.appendChild(li)
        }
    }

    exibirGeneros () {
        const ul = document.querySelector('#listaGeneros')
        if (this.exibindoMenu == true) {
            this.exibindoMenu = false
            ul.className = ''
        } else {
            this.exibindoMenu = true
            ul.className = 'exibir'
        }
    }

    async renderizar () {
        const servico = new CategoriasService()

        const listaCategorias = await servico.buscarCategorias()
        
        for (const categoria of listaCategorias) {
            const listaFilmes = new ListaFilmes(categoria.descricao, categoria.filmes);
            listaFilmes.renderizar()    
        }

        this.carregarGeneros()

        const botaoMenuGeneros = document.querySelector('#generos')
        botaoMenuGeneros.onclick = this.exibirGeneros
    }
}