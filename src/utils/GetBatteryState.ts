export default function getStatus(nr: number) {
    switch (nr) {
        case 0: return "Available"
        case 1: return "Charging"
        case 2: return "Reserved"
        default: return ""
    }
}