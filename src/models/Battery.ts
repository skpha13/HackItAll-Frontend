import {Generic} from "@/models/Generic";

export class BatteryModel extends Generic {
    protected routeName: string = "Battery";
}

export interface IBatteryInitial {
    model: string,
    maxCapacity: number,
    capacity: number,
    state: number,
}