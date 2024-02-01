import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars}from "@fortawesome/free-solid-svg-icons"


function Navigation()
{
    return<div id="navbar">
        <div style={{ marginLeft:"5%"}}><FontAwesomeIcon icon={faBars}/></div>
        <img src="https://3.bp.blogspot.com/-YCGrTd-xZ6g/XLEISz_krnI/AAAAAAAAQA8/bAMgYTsFTvcF_KqLnvm37ydqjG5KvqVKwCLcBGAs/s1600/disneyplus.png"/>

        <span>Tv</span>
        <span>Movies</span>
        <span>Sport</span>
        <span>More...</span>
        
      

      
    </div>
}
export default Navigation;