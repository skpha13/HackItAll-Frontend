import {reactive} from "vue";
import {type IStation} from "@/models/Station";

export const store = reactive({
    brand: "",
    model: "",
    isFiltered: false,
    stations: [] as IStation[]
})