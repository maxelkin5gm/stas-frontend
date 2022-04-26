import {TableQuery, TableTypeEnum} from "../../../store/stasReducer/types/table.types";
import {WorkerService} from "../../../API/WorkerService";
import {CellService} from "../../../API/CellService";
import {receivedStoColumns} from "../columns/stas/receivedStoColumns";
import {cellColumns} from "../columns/stas/cellColumns";

export async function fillStasTable({type, query}: TableQuery, stasIndex: number, setTableState: Function) {
    switch (type) {

        case TableTypeEnum.WORKER:
            setTableState({
                columns: receivedStoColumns,
                data: await WorkerService.findAllStoByWorkerAndStas(query.personnelNumber, stasIndex)
            })
            return;

        case TableTypeEnum.CELL:
            setTableState({
                columns: cellColumns,
                data: await CellService.findAllStoByCellAndStas(query.cellNumber, query.side, stasIndex as number)
            })
            return;

    }
}