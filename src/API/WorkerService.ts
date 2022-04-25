import {Worker} from "../store/stasReducer/stasReducer.type";


export class WorkerService {

    static async findAllByName(name: string) {
        // if (res.status !== 200) {  }

        return [
            {
                name: "Елькин",
                personnelNumber: "1"
            },
            {
                name: "Елькин",
                personnelNumber: "228"
            },
            {
                name: "Елькин",
                personnelNumber: "229"
            }
        ] as Worker[]
    }

    static async findByPersonnelNumber(personnelNumber: string) {
        return null;

        return {
            name: "Елькин",
            personnelNumber: "228"
        } as Worker
    }

    static async getDataByPersonnelNumber(personnelNumber: string) {
        const res = await fetch("/data.json")
        const data = await res.json()
        return data;

        // return [{
        //     key: 1,
        //     sto: "sto1",
        //     received: "received",
        //     detail: "detail",
        //     operationNumber: "operationNumber",
        //     date: "date",
        //     side: "side",
        //     cellNumber: "cellNumber",
        //     status: "status",
        //     note: "note"
        // }]
    }
}