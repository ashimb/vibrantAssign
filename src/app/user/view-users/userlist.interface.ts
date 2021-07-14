import { SingleUser } from "../single-user/single-user.interface";

export interface UserList{
    page:string,
    per_page: string,
    total: string,
    total_pages: string,
    data:SingleUser[]
}