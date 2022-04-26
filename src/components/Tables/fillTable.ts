import {WorkerService} from "../../API/WorkerService";
import {receivedStoColumns} from "./columns/receivedStoColumns";
import {TableQuery, TableTypeEnum} from "../../store/stasReducer/types/table.types";
import {cartColumns} from "./columns/cartColumns";


export async function fillTable({type, query}: TableQuery, setTableState: Function) {
    switch (type) {

        case TableTypeEnum.WORKER:
            setTableState({
                columns: receivedStoColumns,
                data: await WorkerService.getReceivedStoByPersonnelNumber(query.personnelNumber)
            })
            return;

        case TableTypeEnum.DETAIL:
            return;

        case TableTypeEnum.CART:
            setTableState({
                columns: cartColumns,
                data: query
            })
            return;

    }
}