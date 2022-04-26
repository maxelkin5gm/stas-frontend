import {TableQuery, TableTypeEnum} from "../../../store/stasReducer/types/table.types";
import {WorkerService} from "../../../API/WorkerService";
import {CellService} from "../../../API/CellService";
import {receivedStoColumns} from "../columns/stas/receivedStoColumns";

export async function fillStasTable({type, query}: TableQuery, stasIndex: number, setTableState: Function) {
    switch (type) {

        case TableTypeEnum.WORKER:
            setTableState({
                columns: receivedStoColumns,
                data: await WorkerService.findAllStoByNumber(query.personnelNumber)
            })
            return;

        case TableTypeEnum.CELL:
            setTableState({
                columns: receivedStoColumns,
                data: await CellService.findAllByCellAndStas(query.cellNumber, query.side, stasIndex as number)
            })
            return;

    }
}