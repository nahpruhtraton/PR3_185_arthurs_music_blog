import React, { Component } from 'react';
import TextPage from './TextPage.jsx';
import ImagePage from './ImagePage.jsx';
import VideoPage from './VideoPage.jsx';
import TablePage from './TablePage.jsx';
import EmailPage from './EmailPage.jsx';
import ZoomPage from './ZoomPage.jsx';
import './styles.css'

class Body extends Component {
    render(){
        var displaycontent = () =>{
            var activetab = this.props.activetab;
            if (activetab == 0){
                return <TextPage/>
            }
            else if (activetab == 1){
                return <ImagePage/>
            }
            else if (activetab == 2){
                return <VideoPage/>
            }
            else if (activetab == 3){
                return <TablePage/>
            }
            else if (activetab == 4){
                return <EmailPage/>
            }
            else if (activetab == 5){
                return <ZoomPage/>
            }
        }
        return (displaycontent())
    }
}
export default Body;