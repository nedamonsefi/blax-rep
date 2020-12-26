import React from 'react';
import classes  from './Spinner.module.scss';
const spinner=(props)=>(<div className={[classes.Loader,'container'].join(' ')}>Loading...</div>);
export default spinner;