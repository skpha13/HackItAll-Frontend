import {Generic} from "@/models/Generic";
import axios from '../helpers/AxiosInstance';

export class Car extends Generic {
    protected routeName: string = "CarControlller";

    public getAllBrands = async () => {
        return await axios.get(`${this.routeName}/brands`)
            .then((response) => response.data)
            .catch((error) => {
                console.error(error)
            })
    }

    public getAllModelsFromBrand = async (brand: string) => {
        return await axios.get(`${this.routeName}/models?brand=${brand}`)
            .then((response) => response.data)
            .catch((error) => {
                console.error(error)
            })
    }


}

export interface ICar {
    brand: string,
    model: string,
    batteryModel: string,
}