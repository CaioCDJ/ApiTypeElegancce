export interface RequestInterface{

  products:Array<Products>,
  date:Date,
  user_id:number,
  status:string
}

export interface Products{

  id:number,
  qt:number
}
