export interface ItemOfLIstResult {
  id: string;
  title: string;
  price: string
  address: {
    state_name: string
  }
  shipping : {
    logistic_type: 'xd_drop_off' | 'cross_docking' | 'self_service' | 'fulfillment'
  }
  thumbnail: string,
  condition: 'not_specified' | 'used' | 'new',
  sold_quantity: string;
  category_id: string;
}

export interface IGetSearchListResultApi {
  results :ItemOfLIstResult[]
}

export type IGetSearchListResponse = {
  id: string,
  title: string,
  value: string,
  location:string,
  imageUrl:string,
  isFullShipping: boolean;
}[];
