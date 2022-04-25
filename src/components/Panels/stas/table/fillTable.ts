import {WorkerService} from "../../../../API/WorkerService";
import {workerColumns} from "./columns/workerColumns";
import {TableQuery, TableTypeEnum} from "../../../../store/stasReducer/types/table.types";


export async function fillTable({type, query}: TableQuery, setTableState: any) {
    try {
        switch (type) {

            case TableTypeEnum.WORKER:
                setTableState({
                    columns: workerColumns,
                    data: await WorkerService.getDataByPersonnelNumber(query.personnelNumber)
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