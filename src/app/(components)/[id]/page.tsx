
'use client';
import Loader from "@/app/_components/loader/page";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
export default function GameDetails() {
    type GameDetails = {
        title: string;
        thumbnail: unknown;
        genre: string;
        platform: string;
        status: string;
        publisher: string;
        developer: string;
        release_date: string;
        description: string;
        game_url: unknown;
    };
    const [isLoading, setIsLoading] = useState(true);
    const [gamesData, setGamesData] = useState<GameDetails | null>(null);

    const { id } = useParams();
const router = useRouter();
    const fetchGameDetails = async () => {
        try {
            const res = await fetch(
                `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
                {
                    headers: {
                        "x-rapidapi-key":
                            "e4eb259338mshaf586460bdd4d5ap1c8f66jsn0517ceccdf9d",
                        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                    },
                }
            );
            const data = await res.json();
            setGamesData(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching game data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchGameDetails();
        }
    }, [id]);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <article className="container flex flex-col absolute inset-0 w-[100vw] bg-[#272b30] z-[55] h-[100vh]">
                    <header className="flex justify-between text-2xl w-full pt-5 px-6">
                        <h1 className="text-3xl">Game Details </h1>
                        <button className="icon focus:border-4 focus:border-gray-500 focus:rounded-lg " onClick={()=> router.back()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-8 text-gray-400 hover:text-white transition-all duration-200 ease-in-out"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </header>
                    <div className="content flex gap-7  py-7 pr-40 pl-32 ">
                        <div className="left w-4/12">
                            <Image
                                src={gamesData?.thumbnail}
                                alt="game image"
                                width={500}
                                height={300}
                            />
                        </div>
                        <div className="right flex flex-col w-8/12">
                            <h2 className="text-3xl pb-5">Title : {gamesData?.title}</h2>
                            <p className="text-lg mb-2">Category : <span className="!text-base rounded bg-[#09c] text-black p-1">{gamesData?.genre}</span></p>
                            <p className="text-lg mb-2">Platform : <span className="!text-base rounded bg-[#09c] text-black p-1 ">{gamesData?.platform}</span></p>
                            <p className="text-lg mb-2">Status : <span className="!text-base rounded bg-[#09c] text-black  p-1 ">{gamesData?.status}</span></p>
                            <p className="text-lg mb-2">Publisher : <span className="!text-base rounded bg-[#09c] text-black  p-1 ">{gamesData?.publisher}</span></p>
                            <p className="text-lg mb-2">Developer : <span className="!text-base rounded bg-[#09c] text-black  p-1 ">{gamesData?.developer}</span></p>
                            <p className="text-lg mb-2">Release-Date : <span className="!text-base rounded bg-[#09c] text-black p-1">{gamesData?.release_date}</span></p>
                            <p className="text-sm leading-relaxed">{gamesData?.description}</p>
                            <Link href={gamesData?.game_url} target="_blank">
                            <button className="hover:bg-yellow-500 border border-yellow-500 mt-5 hover:text-black w-28 h-12 text-yellow-500  rounded-md ">Show Game</button>
                            </Link>
                        </div>
                    </div>
                </article>
            )}
        </div>
    );
}
