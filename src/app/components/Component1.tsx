"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

type PlayerCard = {
  image: string,
  playerName: string,
  totalEvents: number,
  sportType: string
}

const Players: PlayerCard[] = [
  {
    image: "/player1.png",
    playerName: "Sacramento River Cat",
    sportType: "Baseball",
    totalEvents: 48
  },
  {
    image: "/player2.png",
    playerName: "Las Vegas Aviator",
    sportType: "Baseball",
    totalEvents: 28
  },
  {
    image: "/player3.png",
    playerName: "New Jersey Devils",
    sportType: "Ice Hockey",
    totalEvents: 15
  },
  {
    image: "/player1.png",
    playerName: "Las Vegas Aviator",
    sportType: "Baseball",
    totalEvents: 28
  },
]

const Component1 = () => {

  const [theme, setTheme] = useState<boolean>(false)

  useEffect(() => {
    if (!theme)
      document.documentElement.classList.remove("dark")
    else
      document.documentElement.classList.add("dark")
  }, [theme])


  const PlayerBox = (props: PlayerCard) => {
    return <div className='p-3 bg-white dark:bg-neutral-700 shadow-lg shadow-slate-200 dark:shadow-slate-950 h-[33rem] w-72 sm:w-60'>
      <div className="h-[23rem] w-full">
        <Image
          className='h-full w-full object-cover'
          src={props.image} alt={props.playerName} height={1000} width={500} />
      </div>

      <p className="py-4 text-xl font-semibold">{props.playerName}</p>

      <div className="px-3 py-2.5 bg-neutral-100 dark:bg-neutral-600 grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <p className='text-slate-500 dark:text-slate-300 text-sm'>Total Events</p>
          <p className='font-semibold'>{props.totalEvents}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className='text-slate-500 dark:text-slate-300 text-sm'>Sports</p>
          <p className='font-semibold'>{props.sportType}</p>
        </div>
      </div>
    </div>
  }

  return (
    <div className=' dark:bg-neutral-700 p-4 md:p-10'>

      <div className="flex flex-col gap-10 mx-auto w-fit">

        <div className="flex justify-between items-center">
          <p className='underline-offset-8 text-2xl font-semibold' style={{
            textDecoration: "underline 2px solid skyblue"
          }}>Sports</p>
          <div className="">
            <button
              onClick={() => {
                setTheme(!theme)
              }}
              className='py-2 px-5 border border-slate-300 text-sm bg-white text-black'>{
                theme ? "Light Mode" : "Dark Mode"
              }</button>
          </div>
        </div>

        <div className="flex gap-4 justify-center md:justify-start items-center flex-wrap width-full">
          {
            Players.map((a, i) => {
              return <PlayerBox {...{ ...a }} key={i} />
            })
          }


          {/* _________________________ */}
          <div className='p-3 bg-white dark:bg-neutral-700 shadow-lg shadow-slate-200 dark:shadow-slate-950 h-[33rem] w-[18rem] sm:h-auto  sm:w-72 md:w-60'>
  <div className="h-[13rem] sm:h-[14rem] md:h-[15rem] w-full ">
    <Image
      className='h-full w-full object-cover'
      src={"/box.png"} alt={"Box"} height={1000} width={500} />
  </div>

  <div className="px-3 py-2.5 border h-[14.4rem] sm:h-[15.4rem] md:h-[16.4rem] border-slate-300 dark:border-slate-500 ">
    <p>Advertisement Title</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam reiciendis possimus praesentium ipsum, dolor sit amet  excepturi nesciunt! dolor sit amet  excepturi nesciunt! dolor sit amet  excepturi nesciunt!</p>
  </div>
</div>

          {/* _________________________ */}

        </div>
      </div>
      <div className="flex justify-center items-center mt-9">
        <button type="button" className='bg-sky-500 text-white font-semibold tracking-wide text-sm px-6 py-2 rounded'>See More</button>

      </div>
    </div>
  )
}

export default Component1