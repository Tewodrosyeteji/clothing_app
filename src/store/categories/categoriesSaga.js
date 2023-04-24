import {takeLatest,all,call,put} from "redux-saga/effects"
import { getCatagoriesAndDocuments } from "../../utils/firebase/firebase";
import { fetchCategorySuccess,fetchCategoryFaild } from "./categoriesAction";
import { CATEGORIES_ACTION_TYPE } from "./categoriesType";


 export function* fetchCategoriesAsync(){
    try{
        const categoriesArray = yield call(getCatagoriesAndDocuments,'categories');
        yield put(fetchCategorySuccess(categoriesArray))
  
      }catch(error){
       yield put(fetchCategoryFaild(error))
      } 
 }

 export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_START,fetchCategoriesAsync)
 }


 export function* categoriesSaga(){
    yield all([call(onFetchCategories)])
 }