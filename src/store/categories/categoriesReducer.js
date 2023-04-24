import { CATEGORIES_ACTION_TYPE } from "./categoriesType";

const INITIAL_STATE = {
  categories: [],
  isLoading:false,
  error:null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {

    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_START:
      return{
       ...state,isLoading:true,
      }
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading:false,
      };
      case CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_FAILD:
      return {
        ...state,
        error: payload,
        isLoading:false,
      };
    default:
      return state;
  }
};
