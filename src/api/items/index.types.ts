export interface IGetItemResponse {
  imageUrl : string
  title: string;
  value: string;
  condition: string;
  soldQuantity: string;
  description: string;
  categoryList: string[]
}

export interface IGetItemResultApi {
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

export interface IGetDescriptionResultApi {
  plain_text:string
}
