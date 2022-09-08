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

export interface IGetSearchListResult {
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

export interface IGetItemResponse {
  imageUrl : string
  title: string;
  value: string;
  condition: string;
  soldQuantity: string;
  description: string;
  categoryList: string[]
}

export interface IGetItemResult {
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
  pictures: {
    url: string
  }[]
}

export interface IGetDescriptionResult {
  plain_text:string
}
