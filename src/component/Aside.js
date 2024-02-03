import React from 'react'

const Aside = ({setStandard}) => {
  return (
    <>
      <aside>
      <h1>손흥민은 월클일까??</h1>
      <ul>
        <h3>선수선정방식</h3>        
        <li>2015~현재 손흥민과 동시에 활약</li>
        <li>유럽 5대리그 기준</li>
        <li>총점=(득점x1.8 + 도움x1.5 + 꾸준함x2)</li>
      </ul>
      <div className="btns">
        <button onClick={()=>{setStandard('goal')}}>득점</button>
        <button onClick={()=>{setStandard('assist')}}>도움</button>
        <button onClick={()=>{setStandard('steady')}}>꾸준함</button>
        <button onClick={()=>{setStandard('totalScore')}}>총점</button>
      </div>
      </aside>
    </>
  )
}

export default Aside