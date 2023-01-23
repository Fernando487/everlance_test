import React from 'react';

const HeaderUsers = (props) => {
    
    const { setSearch } = props;
    const [searchInput, setSearchInput] = React.useState('');

    return (
        <div className="flex justify-between items-end">
            <h1 className="font-bold text-lg">Github Users</h1>
            <input className="border border-gray-300 rounded p-2" type="text" value={searchInput} onChange={(e) => {
                setSearchInput(e.target.value);
                setTimeout(() => {
                    setSearch(e.target.value);
                }, 1500);                
            }} placeholder='Search github user'/>
        </div>
    )
}

export default HeaderUsers;