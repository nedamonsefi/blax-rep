import React from 'react';
import classes from './ServerTitle.module.scss';
const ServerTitle=(props)=>(
   <h3 className={[classes.Title_3,'title-3'].join(' ')}>{props.children}</h3>
);
export default ServerTitle;