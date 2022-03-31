export interface User
{
    data:List[]
    
}
export interface List
{
    id: number;
    user_id: number;
    title: string;
    body: string;
}
//let obj: { string: User[] } = JSON.parse(u.toString());
