import {Worker} from "../store/stasReducer/types/worker.types";

export class WorkerService {

    static async findAllByName(name: string) {
        const res = await fetch("/data/worker.findAllByName.json");

        if (res.status !== 200) return null;

        const data = await res.json();
        return data as Worker[];
    }

    static async findByPersonnelNumber(personnelNumber: string) {
        const res = await fetch("/data/worker.findByPersonnelNumber.json");

        if (res.status !== 200) return null;

        const data = await res.json();
        // return data as Worker;
        return null;
    }

    static async findAllStoByWorker(personnelNumber: string) {
        const res = await fetch("/data/worker.findAllStoByNumber.json")

        if (res.status !== 200) throw Error("Произошла ошибка связи с сервером")

        const data = await res.json();
        return data;
    }

    // todo
    static async findAllStoByWorkerAndStas(personnelNumber: string, stasIndex: number) {
        const res = await fetch("/data/worker.findAllStoByNumber.json")

        if (res.status !== 200) throw Error("Произошла ошибка связи с сервером")

        const data = await res.json();
        return data;
    }
}