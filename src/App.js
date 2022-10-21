import React,{useState} from 'react'
import styled, {createGlobalStyle} from "styled-components"




export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  list-style:none;
}


form{
  width:100%;
}
input{
  width:90%;
  padding: 10px;
  outline: none;
}

`

 export const Container = styled.div`

max-width: 800px;
height:800px;
margin:0 auto;
margin-top: 50px;
background:#151613;
display:flex;
flex-direction:column;
align-items: center;
padding: 20px;

`
export const Title = styled.h1`

font-family: 'Noto Sans Buhid', sans-serif;
margin-bottom: 20px;
color: white;
`
const BtnAdd = styled.button`
  width:10%;
  padding: 10px;
  background-color: #588023;
  color:white ;
  cursor: pointer;

`
const Boxlist = styled.ul`
width: 100%;
display:flex;
flex-direction:column;
justify-content: space-around;
padding:25px;


li{
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  font-size: 1.5rem;
  border:1px solid;
  font-family: 'Bebas Neue', cursive;
  background:#919787;
  display:flex;
  justify-content: space-between;
}
`
const BtnRem = styled.button`
width: 20%;
padding: 5px;
background: #8c2317;
color: white;
border:none;
cursor: pointer;


&:hover{
  filter: brightness(1.2);
}
`


  
export default function App (){

const [input,setInput] = useState('')
const [list,setList] = useState([])

const Add = () =>{

const bolsaInput = {
  value:input,
  id:Date.now(),
  status:false
}
if(input !== "" ){
  setList((prevState) => [...prevState,bolsaInput])
  setInput('')
}
}

const remove = (id) => {

const listaFiltrada = list.filter(item => item.id !== id)

setList(listaFiltrada)
}


  return(
    <Container>
      <GlobalStyle/>
      <Title>Lista de tarefas</Title>
      <form onSubmit={(e) => e.preventDefault()}>
    <input value={input} onChange={(e) => {setInput(e.target.value.replace(/\d/g,""))}}/>
    <BtnAdd onClick={() => {Add()}}>Add</BtnAdd>
      </form>
    <Boxlist>
    { list.map((item) => (
      <>
      <li>{item.value}  <BtnRem onClick={() => {remove(item.id)}}>X</BtnRem>
       </li>
     
      </>
    ))}

    </Boxlist>
    </Container>
  )
}