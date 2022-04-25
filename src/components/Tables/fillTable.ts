import {WorkerService} from "../../API/WorkerService";
import {receivedStoTableColumns} from "./columns/receivedStoTableColumns";
import {TableQuery, TableTypeEnum} from "../../store/stasReducer/types/table.types";


export async function fillTable({type, query}: TableQuery, setTableState: Function) {
    switch (type) {

        case TableTypeEnum.WORKER:
            setTableState({
                columns: receivedStoTableColumns,
                data: await WorkerService.getDataByPersonnelNumber(query.personnelNumber)
            })
            return;

        case TableTypeEnum.DETAIL:
            return;

    }
}