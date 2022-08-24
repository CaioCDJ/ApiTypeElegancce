
export class Error {

  constructor(code:number,msg:string){

    this.message = msg;
    this.code = code;
  }


  static badRequest(msg){
    
    return new Error(400,msg);
  }

  static notFound(msg){

    return new Error(404,msg);
  }

  static forbidden(msg){

    return new Error(403,msg);
  }

  static notAcceptable(msg){

    return new Error(406,msg);
  }
}
