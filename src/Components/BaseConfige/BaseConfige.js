import React,{useState} from 'react';
import * as icons from '../../assets/icons/icons';
import classes from './BaseConfige.module.scss';
const BaseConfig=(props)=>{

    const [serverValue,setServerValue]=useState('');
    const [durationValue,setDurationValue]=useState(10);

    const serverValueChanging=(event)=>{
        setServerValue(event.target.value);
    }
    const durationValueChanging=(event)=>{
        setDurationValue(parseInt(event.target.value));
    }
/*************************** */
/** HTML /JSX  */
/*************************** */
    return(
        <section className={classes.BaseConfige}>
             <h1 className={[classes.Title,'title-1'].join(' ')}>servers monitoring system </h1>  
             <div className={classes.Container}>
             
               <div className={[classes.InputGroup,'tooltip'].join(' ')}>
                   <input
                   onChange={serverValueChanging} 
                     className={classes.ServerValue}
                     value={serverValue}
                     type="text"
                     placeholder="Server Name" 
                   />
                   <button 
                    onClick={()=>props.addServer(serverValue)}
                    type="button"
                    >
                    <icons.Add />
                    </button>
                   <span className="tooltiptext">ex:http://server.lb01.blax.cloud/index.php?json=1 </span>
               </div>
               <div className={[classes.InputGroup,'tooltip'].join(' ')}>
                   <input 
                     onChange={durationValueChanging} 
                     className={classes.DurationValue}
                     value={durationValue}
                     type="number"
                     min="0"
                     step="10"
                     placeholder="Duration" 
                   />
                   <button 
                     onClick={()=>props.changeDuration(durationValue)}
                     type="button"
                   >
                      <icons.Add />
                   </button>
                   <span className="tooltiptext">Change duration,Sec </span>
               </div>
             </div>
        </section>
    );
}
export default BaseConfig;