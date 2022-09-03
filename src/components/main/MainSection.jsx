import React from 'react';
import SiteBar from "../sitebar/SiteBar";
import Profile from "../content/Profile/Profile";
import Dialog from "../content/Dialog/Dialog";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function MainSection() {
    return (
        <BrowserRouter>
            <div className={'main_section'}>
                <SiteBar/>
                <Routes>
                    <Route  path="/profile" element={<Profile/>}></Route>
                    <Route path="/dialog" element={<Dialog/>}></Route>
                    <Route path="/dialog/:id" element={<Dialog/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default MainSection