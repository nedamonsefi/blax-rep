import React from 'react';
import classes from './ListData.module.scss';
import * as icons from '../../../assets/icons/icons';
const ListData=(props)=>{
    const classesName=[classes.ListData];
    if(props.danger){
        classesName.push('danger');
    }
 return(
     <section className={classesName.join(' ')}>
        <div >{props.value}</div>
        <div>{props.position}</div>
        <div>{props.type} </div>
        <div>{props.percent} </div>
        <div className={classes.Icon_main} >
             <icons.AiFillAlert/>
        </div>            
     </section>
 );

}
export default ListData;