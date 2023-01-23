import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getByUsername } from "../services/api";

const Details = () => {
    const urlParams = useParams()
    const { username } = urlParams;

    const { isLoading, error, data, isFetching} = useQuery({
        queryKey: ['users', username],
        queryFn: () => getByUsername(username),
    })

    
    if (isLoading || isFetching) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (error) {
        return (
            <div>
                Error: {error.message}
            </div>
        )
    }
    

    return (
        <>
            <button className="bg-blue-500 text-white rounded p-2 mb-4" onClick={() => window.history.back()}>
                Back
            </button>
            <div key={data.id} className="bg-white border border-gray-200 rounded-lg shadow p-5 pb-8 flex">
                    <div className="flex-none mr-4">
                        <img className="rounded-full w-24 h-24" src={data.avatar_url} alt={data.login} />
                    </div>
                    <div className="flex w-64 flex-col justify-between">
                        <div className="font-medium dark:text-white text-left h-30">
                            <div className="font-bold text-black text-xl">
                                <p>{data.name}</p>
                                <p className="text-gray-400 text-sm mt-2">{data.login}</p>
                                <p className="text-gray-400 text-sm mt-2">{data.bio}</p>
                            </div>
                        </div>
                        <div>
                            {data.location &&
                                <a href={`https://maps.google.com/?q=${data.location}`} target="_blank" rel="noreferrer">
                                    <p className="text-gray-400 font-bold text-sm flex items-center">
                                        <img src="https://img.icons8.com/ios-filled/512/visit.png" alt="location" className="w-4 h-4" />
                                        {data.location}
                                    </p>
                                </a>
                            }
                            {data?.email &&
                                <a href={`mailto:${data.email}`} target="_blank" rel="noreferrer">
                                    <p className="text-gray-400 font-bold text-sm flex items-center mt-5">
                                        <img src="https://img.icons8.com/ios-filled/512/filled-message.png" alt="email" className="w-4 h-4" />
                                        {data.email}
                                    </p>
                                </a>
                            }
                        </div>
                    </div>
                    <div className="flex-none w-80">
                        <div>
                            <a href={data.html_url} className='flex items-center space-x-3'  target="_blank" rel="noreferrer">
                                <img className="rounded-full w-9 h-9" src="https://img.icons8.com/ios-glyphs/512/github.png" alt={data.login} />
                                <div className="font-medium dark:text-white text-left">
                                    <div className="text-sm font-bold text-gray-500">
                                        {data.login}
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="bg-gray-100 flex items-center justify-center mt-5 p-5 rounded-lg text-center">
                            <div className="flex-auto">
                                <p className="text-gray-400 text-sm">Repos</p>
                                <p className="text-gray-400 text-md font-bold">{data.public_repos}</p>
                            </div>
                            <div className="flex-auto">
                                <p className="text-gray-400 text-sm">Followers</p>
                                <p className="text-gray-400 text-md font-bold">{data.followers}</p>
                            </div>
                            <div className="flex-auto">
                                <p className="text-gray-400 text-sm">Following</p>
                                <p className="text-gray-400 text-md font-bold">{data.following}</p>
                            </div>
                        </div>

                        <div className='mt-5'>
                            {data?.twitter_username &&
                                <a href={`https://twitter.com/${data.twitter_username}`} target="_blank" rel="noreferrer">
                                    <p className="text-gray-400 font-bold text-sm flex items-center">
                                        <img src="https://img.icons8.com/color/512/twitter.png" alt="twitter" className="w-6 h-6" />
                                        {data.twitter_username}
                                    </p>
                                </a>
                            }
                            
                            {data?.blog &&
                                <a href={data.blog} target="_blank" rel="noreferrer">
                                    <p className="text-gray-400 font-bold text-sm flex items-center mt-5">
                                        <img src="https://img.icons8.com/material-outlined/512/link.png" alt="blog" className="w-6 h-6" />
                                        {data.blog}
                                    </p>
                                </a>
                            }
                            
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Details;