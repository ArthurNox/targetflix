import DetalhesFilme from './detalhes-filme'

export default class FilmeMiniatura {
    constructor (id, titulo, genero, avaliacao, imagem) {
        this.id = id
        this.titulo = titulo
        this.genero = genero
        this.avaliacao = avaliacao
        this.imagem = imagem
    }

    mostrarDetalhes () {
        const detalhes = new DetalhesFilme()
        detalhes.exibir(this.id)
    }

    renderizar () {
        const article = document.createElement('article')
        article.className = 'filme-miniatura'
        article.style.backgroundImage = `url(${this.imagem})`
        article.onclick = this.mostrarDetalhes.bind(this)

        const titulo = document.createElement('h1')
        titulo.innerHTML = this.titulo

        article.appendChild(titulo)

        return article
    }
}
