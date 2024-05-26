import React, { useRef } from 'react'
import {evaluate} from 'mathjs'
import '../style/Sidebar.css'


function Sidebar() {
  const displayref= useRef()

const handleClear=()=>{
  displayref.current.value='';
}
const handleDelete =() =>{
  displayref.current.value=displayref.current.value.slice(0, -1)
}
const handleClick= (value)=>{
  if(value ==='='){
    displayref.current.value = evaluate(displayref.current.value)
  }
  else{
    displayref.current.value += value
  }
}

  return (
    <>
      <div className="container">
        <div className="calculator">
          <input type="text"  className='display' ref={displayref} readOnly placeholder='0'/>
          <div className="buttons">
            <div>
              <input type="button" value='AC' onClick={handleClear}/>
              <input type="button" value='DE' onClick={handleDelete}/>
              <input type="button" value='.' onClick={()=>handleClick('.')}/>
              <input type="button" value='/' onClick={()=>handleClick('/')}/>
            </div>
            <div>
              <input type="button" value='7' onClick={()=>handleClick('7')}/>
              <input type="button" value='8' onClick={()=>handleClick('8')}/>
              <input type="button" value='9' onClick={()=>handleClick('9')}/>
              <input type="button" value='*' onClick={()=>handleClick('*')}/>
            </div>
            <div>
              <input type="button" value='4' onClick={()=>handleClick('4')}/>
              <input type="button" value='5' onClick={()=>handleClick('5')}/>
              <input type="button" value='6' onClick={()=>handleClick('6')}/>
              <input type="button" value='-' onClick={()=>handleClick('-')}/>
            </div>
            <div>
              <input type="button" value='1' onClick={()=>handleClick('1')}/>
              <input type="button" value='2' onClick={()=>handleClick('2')}/>
              <input type="button" value='3' onClick={()=>handleClick('3')}/>
              <input type="button" value='+' onClick={()=>handleClick('+')}/>
            </div>
            <div>
              <input type="button" value='00' onClick={()=>handleClick('00')}/>
              <input type="button" value='0' onClick={()=>handleClick('0')}/>
              <input type="button" value='=' onClick={()=>handleClick('=')}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
