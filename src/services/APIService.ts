import IResultsRow from "../DTOs/DTOs";

class HandleEnvoiroment {
    URL = process.env.NODE_ENV === 'production' ? 'einstein.herokuapp.com/api/' : process.env.REACT_APP_EINSTEIN_URL;

    async prepareFetch(url: string) {
        const _options = {
            method: 'GET'
        }

        const _r = await fetch(this.URL + url, _options)
        const parsedResult = await _r.json()
        return parsedResult;
    }

    async getResultsByQuery (query: string): Promise<IResultsRow[]> {
        //@ts-ignore
        const { matched } = (await this.prepareFetch(`search/${query}`))
        return matched?.length === 0 ? undefined : matched;
    }

    async getResultsById (id: string) {
        return await this.prepareFetch(`result/${id}`);
    }
}

const APIService = new HandleEnvoiroment();
export default APIService;