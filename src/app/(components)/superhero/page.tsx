'use client'
import React, { useEffect, useState } from 'react'
import { Card } from '../home/page';
import Image from 'next/image';
import Loader from '@/app/_components/loader/page';
import Link from 'next/link';

export default function Superhero() {
    const [isLoading, setIsLoading] = useState(true);
    const [gamesData, setGamesData] = useState<Card[]>([]);

    useEffect(() => {
        async function fetchSuperhero() {
            try {
                const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero`, {
                    headers: {
                        "x-rapidapi-key": "e4eb259338mshaf586460bdd4d5ap1c8f66jsn0517ceccdf9d",
                        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
                    }
                });
                const data = await res.json();
                setGamesData(data);
            } catch (error) {
                console.error('Error fetching games:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchSuperhero();
    }, []); // [] ensures this effect runs only once

    return <>

        <div className="container px-3 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5">
            {!isLoading ? gamesData.map((game: Card) => (
                <div key={game.id} className="card bg-transparent grayscale-[70%] hover:grayscale-0 hover:scale-105 transition-all duration-500 ease-in-out border border-gray-900 rounded-lg flex flex-col justify-between">
                    <Link href={`/${game.id}`}>
                        <figure className='p-5'>
                            <div className="cardimg ">
                                <Image className='rounded-t-lg' src={`${game.thumbnail}`} alt='' layout='responsive' width={100} height={104} />
                            </div>
                            <figcaption>
                                <div className="tags flex justify-between items-center px-2 py-4  ">
                                    <h2>{game.title}</h2>
                                    <span className='p-2 bg-blue-600 rounded-md text-xs'>Free</span>
                                </div>
                                <p className='text-center py-4'>{game.short_description}</p>
                            </figcaption>
                        </figure>
                        <footer className='flex justify-between border-t border-gray-900 w-full text-xs p-3'>
                            <span className='py-1 px-2 bg-[#32383e] rounded-lg'>{game.genre}</span>
                            <span className='py-1 px-2 bg-[#32383e] rounded-lg'>{game.platform}</span>
                        </footer>
                    </Link>
                </div>
            )) : <Loader />}
        </div>

    </>
}
