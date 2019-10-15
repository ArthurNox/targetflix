import ApiService from './api-service'

export default class DetalhesFilmeService {
    buscarDetalhes (filmeId) {
        const api = new ApiService()
        return api.get('filmes/' + filmeId)
    }
}
