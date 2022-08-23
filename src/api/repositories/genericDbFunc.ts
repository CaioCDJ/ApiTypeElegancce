import { exec } from "../services/database";

export default class genericDbFunc{

    static async findById(tbName:string, id:number){

        const query:string = `SELECT * FROM ${tbName} WHERE id = ${id};`;

        const row = await exec(query);

        return row;
    }

    static async findAll(tbName:string){
      
      const query = `SELECT * FROM ${tbName}`;

      const row = await exec(query);

      return row;

    }

    static async deleteById(tbName:string,id:number){

      const query = `DELETE FROM ${tbName} WHERE id = ${id}`;

      const row = await exec(query);

      return row;
    }

}
