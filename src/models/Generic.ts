import axios from '../helpers/AxiosInstance'

export abstract class Generic {
    protected routeName: string = '';

    public all = async (params: string = '') => {
        return await axios.get(`${this.routeName}/all${params}`)
            .then((response) => response.data)
            .catch((error) => {
                console.error(error.response);
                return [];
            });
    }

    public create = async (payload: any) => {
        return await axios.post(`${this.routeName}/create`, payload)
            .then((response) => response.data)
            .catch((error) => {
                console.error(error.response);
            })
    }
}