import stylesSiteBar from "../SiteBar.module.css";
import React from "react";

const Friend = (props) => {
    debugger
    return (
  <div>
      <div className={stylesSiteBar.friend}>
          <img src="https://adaptation.um6p.ma/wp-content/uploads/2018/10/manicon-570x570.png" alt=""/>
          <span>{props.state}</span>
      </div>
  </div>
)
}
export default Friend