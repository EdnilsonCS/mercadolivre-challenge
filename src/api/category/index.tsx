import api from '../index';
import { IGetCategoryResultAPI } from './index.types';

export const getCategoryDetail = async (id: string) => {
  const { data } = await api.get<IGetCategoryResultAPI>(`/categories/${id}`);

  const dataFormatted = data.path_from_root.map((item) => {
    return item.name;
  });

  return {
    data: dataFormatted,
  };
};
