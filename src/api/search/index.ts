import api from '../index';
import { IGetSearchListResultApi } from './index.types';

export const getSearchList = async (search: string) => {
  const data = await api.get<IGetSearchListResultApi>(`/sites/MLA/search?q=${search}&limit=4`);

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
