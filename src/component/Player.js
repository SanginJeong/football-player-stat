import React, { useEffect } from 'react'
import { useState } from 'react'
const Player = ({standard}) => {
  const [list, setList] = useState([])

  const getPlayers = async() => {
    const url = new URL(`http://localhost:5000/players`);
    const response = await fetch(url);
    const data = await response.json();
    setList(data);
  }
  useEffect(()=>{
    getPlayers();
  },[])

  useEffect(()=>{
    const sortedList = [...list].sort((a,b)=>b[standard]-a[standard]);
    console.log(sortedList);
    setList(sortedList);
  },[standard])

  return (
    <>
      <div className='area'>
        <h3>1티어</h3>
        <div className="playerArea">
          {list.slice(0,3).map((player)=>(
            <div className='playerCard'>
              <div className='img_area'><img src={player.img} alt="" /></div>
              <div className='playerName'>{player.name}</div>
              <h3>골/도움 : {player.goal} / {player.assist}</h3>
              <h3>꾸준함 : {player.steady}</h3>
              <h3>총점 : {player.totalScore}</h3>
            </div>
          ))}
        </div>
        <h3>2티어</h3>
        <div className="playerArea">
          {list.slice(3,7).map((player)=>(
            <div className='playerCard'>
              <div className='img_area'><img src={player.img} alt="" /></div>
              <div className='playerName'>{player.name}</div>
              <h3>골/도움 : {player.goal} / {player.assist}</h3>
              <h3>꾸준함 : {player.steady}</h3>
              <h3>총점 : {player.totalScore}</h3>
            </div>
          ))}
        </div>
        <h3>나머지</h3>
        <div className="playerArea">
          {list.slice(7).map((player)=>(
            <div className='playerCard'>
              <div className='img_area'><img src={player.img} alt="" /></div>
              <div className='playerName'>{player.name}</div>
              <h3>골/도움 : {player.goal} / {player.assist}</h3>
              <h3>꾸준함 : {player.steady}</h3>
              <h3>총점 : {player.totalScore}</h3>
            </div>
          )
          )}
        </div>
      </div>
    </>
  )
}

export default Player