export interface UserTable
{
    data:Entry[];

}
export interface Entry{
    "id":number,
    "name":string,
    "email":string,
    "gender":string,
    "status":string;
}