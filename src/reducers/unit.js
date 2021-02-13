import {
  FIND_ALL_UNIT, FIND_ALL_UNIT_FAILURE, FIND_ALL_UNIT_SUCCESS,
  FIND_UNIT_BY_ID, FIND_UNIT_BY_ID_FAILURE, FIND_UNIT_BY_ID_SUCCESS,
  REMOVE_UNIT_BY_ID, REMOVE_UNIT_BY_ID_FAILURE, REMOVE_UNIT_BY_ID_SUCCESS,
  SAVE_UNIT, SAVE_UNIT_FAILURE, SAVE_UNIT_SUCCESS,
  UPDATE_UNIT, UPDATE_UNIT_FAILURE, UPDATE_UNIT_SUCCESS
} from "../constants/actions"

const initialState = {
  data: null,
  isLoading: false,
  error: null
}


export const removeUnitById = (state = { ...initialState, data: false }, action) => {
  switch (action.type) {
    case REMOVE_UNIT_BY_ID:
      return {
        ...state,
        data: false,
        loading: true
      }
    case REMOVE_UNIT_BY_ID_SUCCESS:
      return {
        data: action.data,
        loading: true,
        error: null
      }
    default:
      return false;
  }
}

export const findUnitById = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FIND_UNIT_BY_ID:
      return {
        ...state,
        isLoading: true
      }
    case FIND_UNIT_BY_ID_SUCCESS:
      return {
        data: action.data,
        isLoading: false,
        error: null
      };
    case FIND_UNIT_BY_ID_FAILURE:
      return {
        data: false,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
}

export const findAllUnit = (state = initialState, action) => {
  switch (action.type) {
    case FIND_ALL_UNIT:
      return {
        ...state,
        isLoading: true
      }
    case FIND_ALL_UNIT_SUCCESS:
      return {
        data: action.data,
        isLoading: false,
        error: null
      };
    case FIND_ALL_UNIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return {
        ...state,
        isLoading: false,
        error: null
      };
  }
}

export const updateUnit = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_UNIT:
      return true
    case UPDATE_UNIT_SUCCESS:
      return true
    default:
      return false;
  }
}

export const saveUnit = (state = { ...initialState }, action) => {
  switch (action.type) {
    case SAVE_UNIT:
      return {
        ...state,
        data: null,
        isLoading: true
      }
    case SAVE_UNIT_SUCCESS:
      return {
        data: action.data,
        isLoading: false,
        error: null
      };
    case SAVE_UNIT_FAILURE:
      return {
        data: null,
        isLoading: false,
        error: action.error
      };
    default:
      return {
        ...state,
        data: null,
        isLoading: false,
        error: null
      }
  }
}