import {TableState, TableTypeEnum} from "../../../../store/tableReducer/tableReducer.type";
import {WorkerService} from "../../../../API/WorkerService";
import {Worker} from "../../../../store/stasReducer/stasReducer.type";
import {workerColumns} from "./columns/workerColumns";



export async function fillTable(tableInfo: TableState, worker: Worker, setTableState: any) {
    try {
        switch (tableInfo.type) {

            case TableTypeEnum.WORKER:
                setTableState({
                    columns: workerColumns,
                    data: await WorkerService.getDataByPersonnelNumber(worker.personnelNumber)
                })
                return;

            case TableTypeEnum.DETAIL:
                return;

        }
    } catch (e) {
        console.log(e)
        setTableState({
            columns: [],
            data: []
        })
    }
}