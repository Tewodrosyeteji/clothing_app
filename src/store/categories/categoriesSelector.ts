import { createSelector } from "reselect";

import { CategoryState } from "./categoriesReducer";
import { CategoryMap } from "./categoriesType";
import { rootState } from "../store";

const selectCategoryReducer = (state: rootState): CategoryState =>
  state.categories;
export const selectCategoriesSlice = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategories = createSelector(
  [selectCategoriesSlice],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoryIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
