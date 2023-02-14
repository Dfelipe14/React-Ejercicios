import { API_RM } from "../constants/Api.constants";

class RickAndMortyService {

    async GetAllCharacters() {
        const response = await fetch(API_RM.CHARACTERS());
        // Interceptor
        return response.json();
    }
    async GetCharactersById(id) {
        const response = await fetch(API_RM.CHARACTER_BY_ID());
        // Interceptor
        return response.json(id);
    }
}

export default new RickAndMortyService();