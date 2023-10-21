import React from 'react'
import './technologies.css'
import DevIcon from "devicon-react-svg";
import {techs} from '../../helpers/techs'

function createTechs(){
  return techs.map((e , idx) =>(
      <div className='tech_card'>
        <DevIcon className='tech_icon' icon={e.icon}/>
        <span style={{margin: '5px', frontSize:'1.5rem'}}>{e.name}</span>
      </div>
  ))
}

function Technologies() {
  return (
    <div className='technologies_container' id='technologies'>
      <div>
        <h1 style={{textAlign: 'center'}}> SOME OF THE TECHNOLOGIES I USE</h1>
      </div>
      <div className='tech_card_container'>
        {createTechs()}
      </div>
    </div>
  )
}

export default Technologies