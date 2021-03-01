import './component/styles.css';
import React from "react"
// import { Component } from 'react';
import { useState} from 'react';
import Body from './component/Body';
import Tablist from './component/Tablist';



function App(){
    const [active,setactive] = useState(0)

    const tabs = [{
        id: 0, 
        title: 'Text'
    },
    {
        id: 1, 
        title: 'Image'
    },
    {
        id: 2, 
        title: 'Video'
    },
    {
        id: 3, 
        title: 'Table'
    },
    {
        id: 4, 
        title: 'Email'
    }]
    const changetab = (id) =>{
        setactive(id)
    }
    return (
        <div className="App">
            <h1>Arthur's Music Blog</h1>
            <div className="list1">
                <Tablist tabs={tabs} activetab={active} ctab={changetab}/>
            </div>
            <div className="main-body">
                <Body activetab={active}/>
            </div>
        </div>
    );
}

export default App;
