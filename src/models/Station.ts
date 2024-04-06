import {Generic} from "@/models/Generic";
import type {IBatteryInitial} from "@/models/Battery";

export class StationModel extends Generic {
    protected routeName: string = "Station";
}

export interface IBattery {
    id: string,
    model: {
        id: string,
        name: string
    }
    maxCapacity: number,
    capacity: number,
    state: number,
    percentage: number
}

export interface IStation {
    coordinateX: number,
    coordinateY: number,
    address: string,
    chargingStations: number,
    batteries: IBattery[],
}