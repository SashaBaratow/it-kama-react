import React from 'react';
import SiteBar from "../sitebar/SiteBar";
import Profile from "../content/Profile/Profile";
import Dialog from "../content/Dialog/Dialog";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function MainSection(props) {

    return (
        <BrowserRouter>
            <div className={'main_section'}>
                <SiteBar state={props.state.siteBar}/>
                <Routes>
                    <Route path="/" element={<Profile state={props.state.profilePage} />}/>
                    <Route path="/profile" element={<Profile state={props.state.profilePage} />}/>
                    <Route path="/dialog" element={<Dialog state={props.state.dialogPage}  />}/>
                    <Route path="/dialog/:id" element={<Dialog state={props.state.dialogPage} />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default MainSection