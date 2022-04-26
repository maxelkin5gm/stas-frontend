export class CellService {

    static async findAllStoByCellAndStas(cellNumber: number, side: string, stasIndex: number) {
        const res = await fetch("/data/cell.findAllStoByCellAndStas.json")

        if (res.status !== 200) throw Error("Произошла ошибка связи с сервером")

        const data = await res.json();
        return data;
    }
}