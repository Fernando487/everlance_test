import { useQuery } from "@tanstack/react-query";
import React from "react";
import { searchUsers } from "../services/api";
import ListUsers from "../components/users/ListUsers";
import HeaderUsers from "../components/users/HeaderUsers";
const Users = () => {

    const [search, setSearch] = React.useState('gabriel');
    const [page, setPage] = React.useState(1);

    const { isLoading, error, data, isFetching} = useQuery({
        queryKey: ['users', page, search],
        queryFn: () => searchUsers({search, page}),
        keepPreviousData: true,
    })

    let content = null;
    
    if (isLoading || isFetching) {
        content = (
            <div>
                Loading...
            </div>
        )
    }
    
    if (error) {
        content = (
            <div>
                Error: {error.message}
            </div>
        )
    }
       
    if(data?.items?.length > 0){
        content = (
            <ListUsers users={data.items} page={page} setPage={setPage} />
        )
    }else{
        content = (
            <div>
                Not matches found
            </div>
        )
    }

    
    return <>
        <HeaderUsers setSearch={setSearch} />
        {content}
    </>;
}

export default Users;

