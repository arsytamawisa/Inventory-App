import { all } from "redux-saga/effects";
import { watchFindAllUnit, watchFindUnitById, watchRemoveUnitById, watchSaveUnit, watchUpdateUnit } from "./unit";
import { watchFindAllItem, watchFindItemById, watchRemoveItemById, watchSaveItem, watchUpdateItem } from "./item";
import { watchFindAllStock, watchFindStockById, watchRemoveStockById, watchSaveStock, watchSummaryStock, watchUpdateStock } from "./stock";

export default function* rootSaga() {
  yield all([
    watchFindAllUnit(), watchFindUnitById(), watchRemoveUnitById(), watchUpdateUnit(), watchSaveUnit(),
    watchFindAllItem(), watchFindItemById(), watchRemoveItemById(), watchUpdateItem(), watchSaveItem(),
    watchFindAllStock(), watchFindStockById(), watchRemoveStockById(), watchUpdateStock(), watchSaveStock(), watchSummaryStock()
  ])
}