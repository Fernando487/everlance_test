import React, {Component} from "react";


const ListUsers = (props) => {
    const { users, page, setPage } = props;

    return <>
        <div id='users' className="grid grid-cols-3 gap-3 pt-3">
                {users.map((user) => {
                    return (
                        <div key={user.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-5">
                            <div className="flex items-center space-x-3">
                                <img className="rounded-full w-9 h-9" src={user.avatar_url} alt={user.login} />
                                <div className="font-medium dark:text-white text-left">
                                    <div className="text-sm font-bold text-black">
                                        {user.login}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <a href={user.html_url} target="_blank" rel="noreferrer">
                                    <img src="https://img.icons8.com/ios-glyphs/512/github.png" alt="github" className="w-6 h-6" />
                                </a>
                                <a href={`/users/${user.login}`} className="text-sm font-bold text-blue-500">
                                    View Profile
                                </a>
                            </div>
                        </div>
                    )

                })}
        </div>
        {users.length > 9 &&
            <div className="flex justify-between items-center mt-3 mb-3">
                <button className="bg-blue-500 text-white rounded p-2" onClick={() => setPage(old => Math.max(old - 1, 1))} disabled={page === 1}>
                    Previous Page
                </button>
                <span>Page {page}</span>
                <button className="bg-blue-500 text-white rounded p-2" onClick={() => setPage(old => (!users || !users.length ? old : old + 1))} disabled={!users || !users.length}>
                    Next Page
                </button>
            </div>
        }
    </>
}

export default ListUsers;