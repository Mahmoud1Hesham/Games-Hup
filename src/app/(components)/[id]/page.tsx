// 'use client';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';

// export default function GameDetails() {
//   type GameDetails = {
//     title: string;
//     thumbnail: string;
//     genre: string;
//     platform: string;
//     status: string;
//     publisher: string;
//     developer: string;
//     release_date: string;
//     description: string;
//     game_url: string;
//   };

//   const [isLoading, setIsLoading] = useState(true);
//   const [gamesData, setGamesData] = useState<GameDetails[]>([]);

//   const router = useRouter();
//   const { id } = router.query; // جلب id من الـ URL

//   useEffect(() => {
//     if (id) {
//       async function fetchGameDetails(id: any) {
//         try {
//           let res = await fetch(
//             `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
//             {
//               headers: {
//                 "x-rapidapi-key": "e4eb25938bmsf586460bbd4d5a91cf86jns0517ceccdf9d",
//                 "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//               },
//             }
//           );
//           let data = await res.json();
//           setGamesData(data);
//         } catch (error) {
//           console.error("Error fetching game's data:", error);
//         } finally {
//           setIsLoading(false);
//         }
//       }

//       fetchGameDetails(id);
//     }
//   }, [id]); // عشان تتنفذ لما id يتغير

//   return <>{isLoading ? <p>Loading...</p> : <p>Game Details: {JSON.stringify(gamesData)}</p>}</>;
// }

'use client';
import Loader from '@/app/_components/loader/page';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function GameDetails() {
    export default function GameDetails() {
        type GameDetails = {
            title: string;
            thumbnail: string;
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
        const [gamesData, setGamesData] = useState(null);

        const { id } = useParams();

        // تعريف الدالة fetchGameDetails خارج useEffect
        const fetchGameDetails = async () => {
            try {

                const res = await fetch(
                    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
                    {
                        headers: {
                            'x-rapidapi-key': 'e4eb25938bmsf586460bbd4d5a91cf86jns0517ceccdf9d',
                            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                        },
                    }
                );
                const data = await res.json();
                setGamesData(data);
                console.log(gamesData);
            } catch (error) {
                console.error('Error fetching game data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        useEffect(() => {
            if (id) {
                fetchGameDetails();
                // استدعاء الدالة داخل useEffect
            }
        }, [id]);

        return (
            <div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <article className='container flex flex-col absolute top-0 bg-[#272b30] z-[55] h-[100vh] '>
                        <header className='flex justify-between text-2xl absolute z-[60] w-full pt-5'>
                            <h1>Game Details </h1>
                            <button className="icon focus:border-4 focus:border-gray-500 focus:rounded-lg ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-gray-400 hover:text-white transition-all duration-200 ease-in-out">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </header>
                        <div className="content">
                            <div className="left">
                                <Image src={gamesData.thumbnail} alt='game image' />
                        </div>
                        </div>
                    </article>
                )}
            </div>
        );
    }
