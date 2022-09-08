import api from '../index';
import { IGetSearchList } from './index.types';

export const getSearchList = async (search: string) => {
  const data = await api.get<IGetSearchList>(`/sites/MLA/search?q=${search}&limit=4`);

  const itemsList = data.data.results.map((item) => {
    return ({
      id: item.id,
      title: item.title,
      value: item.price,
      location: item.address.state_name,
      imageUrl: item.thumbnail,
    });
  });

  return itemsList;
};

export const getDescription = async (id:string) => {
  const data = await api.get(`/items/${id}/description`);

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
  const { data } = await api.get(`/items/${id}`);
  const { data: descriptionDate } = await getDescription(id);
  const { data: categoryData } = await getCategoryDetail(data.category_id);

  const itemData = {
    title: data.title,
    value: data.price,
    condition: data.condition,
    soldQuantity: data.sold_quantity,
    description: descriptionDate.plain_text,
    imageUrl: data.pictures[data.pictures.length - 1].url,
    categoryList: categoryData,
  };

  return itemData;
};
