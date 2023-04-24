
import { createAction } from "../../utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPE } from "./categoriesType";


  export const fetchCategoryStart=()=>createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_START);
  export const fetchCategorySuccess=(categoriesArray)=>createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_SUCCESS,categoriesArray);
  export const fetchCategoryFaild=(error)=>createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_FAILD,error);

  
