import React,{useState,useRef} from 'react'

export default function Myassignment() {
const [clickedBtn,setClickedBtn]=useState(false)
 function handleClick(){
 setClickedBtn(!clickedBtn);
 }
 let obj=[{
    id:1,
    text:"Not Interested"
 },{
    id:2,
    text:"Interested"
 }]
 function handletextBtn(e){
    console.log(`you clicked on ${e.target.innerText}`)
 }
  return (
    <>
      <button onClick={handleClick}>Main button</button>
      {clickedBtn && (
        <>
         {obj.map((el)=>{
            return <button onClick={handletextBtn}>{el.text}</button>
         })}
        </>
      )}
    </>
  );
}

