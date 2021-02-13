import { delay } from "redux-saga/effects";
import { put, takeLatest } from "redux-saga/effects"
import axios from "../configs/api"
import {
  FIND_ALL_STOCK, FIND_ALL_STOCK_FAILURE, FIND_ALL_STOCK_SUCCESS,
  FIND_STOCK_BY_ID, FIND_STOCK_BY_ID_FAILURE, FIND_STOCK_BY_ID_SUCCESS,
  REMOVE_STOCK_BY_ID, REMOVE_STOCK_BY_ID_FAILURE, REMOVE_STOCK_BY_ID_SUCCESS, 
  SAVE_STOCK, SAVE_STOCK_FAILURE, SAVE_STOCK_SUCCESS, 
  SUMMARY_STOCK, SUMMARY_STOCK_FAILURE, SUMMARY_STOCK_SUCCESS, 
  UPDATE_STOCK, UPDATE_STOCK_SUCCESS,
} from "../constants/actions"


function* findStockById(action) {
  let result = yield axios.get(`/stocks/${action.id}`)
    .then(data => {
      return ({
        type: FIND_STOCK_BY_ID_SUCCESS,
        data
      })
    })
    .catch(error => {
      return ({
        type: FIND_STOCK_BY_ID_FAILURE,
        error
      })
    })
  yield put(result)
}


function* updateStock(action) {
  let data = false
  yield put({
    type: UPDATE_STOCK_SUCCESS,
    data
  })
}


function* findAllStock() {
  let result = yield axios.get('/stocks')
    .then(data => {
      return ({
        type: FIND_ALL_STOCK_SUCCESS,
        data: data.list
      })
    })
    .catch(error => {
      return ({
        type: FIND_ALL_STOCK_FAILURE,
        error
      })
    })
  yield put(result)
}


function* summaryStock() {
  let result = yield axios.get('/stocks/summary')
    .then(data => {
      return ({
        type: SUMMARY_STOCK_SUCCESS,
        data
      })
    })
    .catch(error => {
      return ({
        type: SUMMARY_STOCK_FAILURE,
        error
      })
    })
  yield put(result)
}


function* removeStockById(action) {
  let result = yield axios.delete(`/stocks/${action.id}`)
    .then(data => {
      return ({
        type: REMOVE_STOCK_BY_ID_SUCCESS,
        data
      })
    })
    .catch(error => {
      return ({
        type: REMOVE_STOCK_BY_ID_FAILURE,
        error
      })
    })
  yield put(result)
}


function* saveStock(action) {
  let model = action.model;
  let method = 'POST', url = '/stocks';
  if (model.id) {
    method = "PATCH";
    url += `/${model.id}`
  }

  let result = yield axios({
      url: url,
      method: method,
      data: model
    })
    .then(data => {
      return {
        type: SAVE_STOCK_SUCCESS,
        data: data
      }
    })
    .catch(e => {
      return {
        type: SAVE_STOCK_FAILURE,
        error: e
      }
    })

  yield put(result)
}




export function* watchRemoveStockById() {
  yield takeLatest(REMOVE_STOCK_BY_ID, removeStockById)
}

export function* watchFindStockById() {
  yield takeLatest(FIND_STOCK_BY_ID, findStockById)
}

export function* watchFindAllStock() {
  yield takeLatest(FIND_ALL_STOCK, findAllStock)
}

export function* watchSummaryStock() {
  yield takeLatest(SUMMARY_STOCK, summaryStock)
}

export function* watchUpdateStock() {
  yield takeLatest(UPDATE_STOCK, updateStock)
}

export function* watchSaveStock() {
  yield takeLatest(SAVE_STOCK, saveStock)
}