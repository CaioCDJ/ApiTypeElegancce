
export class Results {

  constructor(code:number,msg:string){

    this.message = msg;
    this.code = code;
  }
  
  // -- approved Message --
  static ok(){
    
    return new Results(200,"");
  }
  
  // -- Error Message --
  static badRequest(msg:string){
    
    return new Results(400,msg);
  }

  static notFound(msg:string){

    return new Results(404,msg);
  }

  static forbidden(msg:string){

    return new Results(403,msg);
  }

  static Results(msg:string){

    return new Error(406,msg);
  }

}
