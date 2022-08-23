import {Client,Pool} from 'pg';
import config from '../../config/dbConfig';

const newPool = () =>{
  return new Pool(config);
}

const newClient = () =>{
  return new Client(config);
}

const exec = async (query:string,params:any[] = []) => {

    const client = newClient();

    client.connect();

    const {rows} = await client.query(query,params);

    client.end();

    return rows;
}

export {newClient,newPool,exec};
