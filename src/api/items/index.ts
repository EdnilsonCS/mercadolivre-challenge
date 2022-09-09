import { formatCondition } from '../../utils/formatCondition';
import { getCategoryDetail } from '../category';
import api from '../index';
import { IGetDescriptionResultApi, IGetItemResultApi } from './index.types';

export const getDescription = async (id:string) => {
  const data = await api.get<IGetDescriptionResultApi>(`/items/${id}/description`);

  return data;
};

export const getItem = async (id: string) => {
  const { data } = await api.get<IGetItemResultApi>(`/items/${id}`);
  const { data: descriptionDate } = await getDescription(id);
  const { data: categoryData } = await getCategoryDetail(data.category_id);

  const itemData = {
    title: data.title,
    value: data.price,
    condition: formatCondition(data.condition),
    soldQuantity: data.sold_quantity,
    description: descriptionDate.plain_text,
    imageUrl: data.pictures[data.pictures.length - 1].url,
    categoryList: categoryData,
  };

  return itemData;
};
