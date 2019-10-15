const apiUrl = 'http://localhost:3000/api/'

export default class ApiService {
    get (url) {
        return new Promise((sucesso) => {
            const requisicao = new XMLHttpRequest()
            requisicao.open('GET', apiUrl + url)
            
            requisicao.onload = () => {
                const resultadoConvertidoEmJson = JSON.parse(requisicao.responseText)
                sucesso(resultadoConvertidoEmJson)
            }
    
            requisicao.send()
        })
    }
}
