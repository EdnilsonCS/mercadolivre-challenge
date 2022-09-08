export interface ItemResult {
  id: string;
  title: string;
  price: string
  address: {
    state_name: string
  }
  shipping : {
    logistic_type: 'xd_drop_off' | 'cross_docking' | 'self_service' | 'fulfillment'
  }
  thumbnail: string
}

export interface IGetSearchList {
  results :ItemResult[]
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
