import ApiService from './api-service'

export default class CategoriasService {
    buscarCategorias() { // usando Promise
        const api = new ApiService()
        return api.get('categorias')
    }


    // modelo de callback:
    // buscarCategorias(callback) {

    //     const requisicao = new XMLHttpRequest()
    //     requisicao.open('GET', 'http://localhost:3000/api/categorias')
        
    //     requisicao.onload = () => {
    //         const resultadoConvertidoEmJson = JSON.parse(requisicao.responseText)
    //         callback(resultadoConvertidoEmJson)
    //     }

    //     requisicao.send()
    // }
}
