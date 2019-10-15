import ApiService from './api-service'

export default class GenerosService {
    buscarGeneros () {
        const api = new ApiService()
        return api.get('generos')
    }
}
