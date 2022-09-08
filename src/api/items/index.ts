import { formatCondition } from '../../utils/formatCondition';
import api from '../index';
import { IGetDescriptionResult, IGetItemResult, IGetSearchListResult } from './index.types';

export const getSearchList = async (search: string) => {
  const data = await api.get<IGetSearchListResult>(`/sites/MLA/search?q=${search}&limit=4`);

  const itemsList = data.data.results.map((item) => {
    return ({
      id: item.id,
      title: item.title,
      value: item.price,
      location: item.address.state_name,
      imageUrl: item.thumbnail,
      isFullShipping: item.shipping?.logistic_type === 'fulfillment',
    });
  });

  return itemsList;
};

export const getDescription = async (id:string) => {
  const data = await api.get<IGetDescriptionResult>(`/items/${id}/description`);

  return data;
};

export const getCategoryDetail = async (id: string) => {
  const { data } = await api.get(`/categories/${id}`);

  const dataFormatted = data.path_from_root.map((item: any) => {
    return item.name;
  });

  return {
    data: dataFormatted,
  };
};

export const getItem = async (id: string) => {
  const { data } = await api.get<IGetItemResult>(`/items/${id}`);
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
