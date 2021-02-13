import { FIND_ALL_UNIT, FIND_UNIT_BY_ID, REMOVE_UNIT_BY_ID, SAVE_UNIT, UPDATE_UNIT } from "../constants/actions"


export function removeById(id) {
  return {
    type: REMOVE_UNIT_BY_ID,
    id
  }
}


export function findById(id) {
  return {
    type: FIND_UNIT_BY_ID,
    id
  }
}


export function findAll() {
  return {
    type: FIND_ALL_UNIT
  }
}


export function update(payload) {
  return {
    type: UPDATE_UNIT,
    payload
  }
}


export function save(model) {
  return {
    type: SAVE_UNIT,
    model
  }
}