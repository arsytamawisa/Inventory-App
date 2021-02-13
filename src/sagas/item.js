import { delay } from "redux-saga/effects";
import { put, takeLatest } from "redux-saga/effects"
import {
  FIND_ALL_ITEM, FIND_ALL_ITEM_SUCCESS, FIND_ALL_ITEM_FAILURE,
  FIND_ITEM_BY_ID, FIND_ITEM_BY_ID_FAILURE, FIND_ITEM_BY_ID_SUCCESS, 
  REMOVE_ITEM_BY_ID, REMOVE_ITEM_BY_ID_FAILURE, REMOVE_ITEM_BY_ID_SUCCESS, 
  SAVE_ITEM, SAVE_ITEM_FAILURE, SAVE_ITEM_SUCCESS, 
  UPDATE_ITEM, UPDATE_ITEM_SUCCESS
} from "../constants/actions"
import axios from "../configs/api"


function* findAllItem() {
  let result = yield axios.get(`/items`)
    .then(data => {
      return ({
        type: FIND_ALL_ITEM_SUCCESS,
        data: data.list
      })
    })
    .catch(err => {
      return ({
        type: FIND_ALL_ITEM_FAILURE,
        error: err
      })
    })
  yield put(result)
}


function* findItemById(action) {
  let result = yield axios.get(`/items/${action.id}`)
    .then(data => {
      return ({
        type: FIND_ITEM_BY_ID_SUCCESS,
        data
      })
    })
    .catch(error => {
      return ({
        type: FIND_ITEM_BY_ID_FAILURE,
        error
      })
    })
  yield put(result)
}


function* removeItemById(action) {
  console.log("removed");
  let result = yield axios.delete(`/items/${action.id}`)
    .then(data => {
      return ({
        type: REMOVE_ITEM_BY_ID_SUCCESS,
        data: data
      })
    })
    .catch(error => {
      return ({
        type: REMOVE_ITEM_BY_ID_FAILURE,
        error: error
      })
    })
  yield put(result)
}


function* saveItem(action) {
  console.log(action);
  let model = action.model;
  let method = 'POST', url = '/items';

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
      console.log("success");
      return {
        type: SAVE_ITEM_SUCCESS,
        data
      }
    })
    .catch(error => {
      console.log("error");
      return {
        type: SAVE_ITEM_FAILURE,
        error
      }
    })

  yield put(result)
}


function* updateItem(action) {
  let result = false

  yield put({
    type: UPDATE_ITEM_SUCCESS,
    data: result
  })
}



export function* watchRemoveItemById() {
  yield takeLatest(REMOVE_ITEM_BY_ID, removeItemById)
}

export function* watchFindItemById() {
  yield takeLatest(FIND_ITEM_BY_ID, findItemById)
}

export function* watchFindAllItem() {
  yield takeLatest(FIND_ALL_ITEM, findAllItem)
}

export function* watchUpdateItem() {
  yield takeLatest(UPDATE_ITEM, updateItem)
}

export function* watchSaveItem() {
  yield takeLatest(SAVE_ITEM, saveItem)
}