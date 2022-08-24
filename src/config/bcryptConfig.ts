import bcrypt, { hash } from 'bcrypt';

const salt = 15;

export async function gemHash(password:string){

    const hash = await bcrypt.hashSync(password,salt);

    return hash;
}

export async function verifyHash(password:string,hash:string){

    return await bcrypt.compareSync(password,hash);

}