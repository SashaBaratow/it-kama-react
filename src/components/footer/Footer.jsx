import React from 'react';
import footerStyles from './Footer.module.css'

const Footer = ()=>{
    return(
      <div className={`${footerStyles.footer_block} ${footerStyles.footer_active}`}>
          <h1>this is footer</h1>
      </div>
    )
}
export default Footer