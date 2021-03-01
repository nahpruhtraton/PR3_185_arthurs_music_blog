import React from 'react';

function Itab(props){
    const addstyle = ()=>{
        if(props.out.id === props.activetab){
            return {backgroundColor:'#292727', color:'white'}
        }
        else{
            return {backgroundColor:'red'}
        }
    };

    return(
      <div style = {addstyle()} onClick={props.ctab.bind(this,props.out.id)}>{props.out.title}</div>  
    );
}

export default Itab;