
"use client";
import Loader from "@/app/_components/loader/page";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function GameDetails() {
    type GameDetails = {
        title: string;
        thumbnail: any;
        genre: string;
        platform: string;
        status: string;
        publisher: string;
        developer: string;
        release_date: string;
        description: string;
        game_url: string;
    };
    const [isLoading, setIsLoading] = useState(true);
    const [gamesData, setGamesData] = useState<GameDetails | null>(null);

    const { id } = useParams();

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
                <article className="container flex flex-col absolute top-0 bg-[#272b30] z-[55] h-[100vh]">
                    <header className="flex justify-between text-2xl   w-full pt-5 px-6">
                        <h1 className="text-3xl">Game Details </h1>
                        <button className="icon focus:border-4 focus:border-gray-500 focus:rounded-lg ">
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
                    <div className="content flex ">
                        <div className="left">
                            <Image
                                src={gamesData?.thumbnail}
                                alt="game image"
                                width={500}
                                height={300}
                            />
                        </div>
                        <div className="right flex flex-col">
                            <h2 className="text-3xl">Title : {gamesData?.title}</h2>
                            <p className="text-xl">Category : <span className="!text-base rounded bg-[#09c] text-black p-1">{gamesData?.genre}</span></p>
                            <p className="text-xl">Platform : <span className="!text-base rounded bg-[#09c] text-black p-1 ">{gamesData?.platform}</span></p>
                            <p className="text-xl">Status : <span className="!text-base rounded bg-[#09c] text-black  p-1 ">{gamesData?.status}</span></p>
                            <p className="text-xl">Publisher : <span className="!text-base rounded bg-[#09c] text-black  p-1 ">{gamesData?.publisher}</span></p>
                            <p className="text-xl">Developer : <span className="!text-base rounded bg-[#09c] text-black  p-1 ">{gamesData?.developer}</span></p>
                            <p className="text-xl">Release-Date : <span className="!text-base rounded bg-[#09c] text-black p-1">{gamesData?.release_date}</span></p>
                            <p className="text-xl">{gamesData?.description}</p>
                        </div>
                    </div>
                </article>
            )}
        </div>
    );
}
