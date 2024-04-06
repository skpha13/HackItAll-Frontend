export default function getPercent(max: number, actual: number) {
    return Math.floor(actual / max * 100);
}