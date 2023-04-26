export enum CATEGORIES_ACTION_TYPE {
  FETCH_CATEGORY_START = "FETCH_CATEGORY_START",
  FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS",
  FETCH_CATEGORY_FAILD = "FETCH_CATEGORY_FAILD",
}

export type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Category = {
  title: string;
  name: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};
