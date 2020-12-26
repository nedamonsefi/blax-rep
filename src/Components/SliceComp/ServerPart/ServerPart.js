import React from 'react';
import classes from './ServerPart.module.scss';
import ListData from '../ListData/ListData';

const ServerPart=(props)=>{
    var content=null;
    switch (props.title){
/*************************** */
/** Heartbeat CHECK ALERT   */
/*************************** */
        case 'Heartbeat':
              var DH=false;
              if(props.data){
                  if(props.data===0){
                    DH=true;
                  }
                  content=<ListData value={props.data} danger={DH}/>
              }
            break;
/*************************** */
/** DISKS CHECK ALERT   */
/*************************** */
        case 'Disks':
            let arrDisks=[];
            if(props.data){
                const disks=Object.keys(props.data);
                disks.map(disk=>arrDisks.push({name:disk,value:props.data[disk].percent,limit:props.data[disk].limit}));
                content=arrDisks.map((disk,index)=>{
                    // eslint-disable-next-line no-unused-vars
                    var DD=false;
                    if(disk.value<=disk.limit){
                        DD=true;
                    }
                    return <ListData  key={index} value={disk.name} percent={disk.value+' %'} danger={DD}/>
                });
            }
            break;
/*************************** */
/** LOADS CHECK ALERT   */
/*************************** */
        case 'Loads':
            const arrLoads=[]; 
            if(props.data){
              props.data.levels.map((level,index)=>arrLoads.push({flag:props.data.type===index,value:level,limit:props.data.limit,type:props.data.type}));
              content=arrLoads.map((load,index)=>{
                  let DL=false;
                  if(load.flag && load.value>load.limit*0.01){
                    DL=true;
                   }
                  return (
                    <ListData
                     key={index}
                     value={load.value}
                     type={load.type+' typ' }
                     position={index+' pos'} danger={DL}/>
                  )
              })
            }
            break;
/*************************** */
/** BACKUPS CHECK ALERT   */
/*************************** */
        case 'Backups':
            if(props.data){
              const arrBackup=[];  
              let exp=/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
             for(let el of props.data){
                 let index=el.search(exp);
                 if(index!==-1){
                     arrBackup.push(el.substring(index)) ;
                 }
             }
             function getUniqueArray(arr) {
                return [...new Set(arr)]
              }
              let uniqueBackup=getUniqueArray(arrBackup);
              let finalArr=[];
              for(let i=uniqueBackup.length-1;i>=0;i--){
                let seconds = (new Date(uniqueBackup[i]).getTime()- new Date(uniqueBackup[i-1]).getTime() ) / 1000;
                finalArr[i]={value:uniqueBackup[i],flag:seconds>86400} 
              }
              if(!finalArr.length){
                  content=<ListData danger={true} value=" "/>
              }
              content=finalArr.map((date,index)=>{
                 return(
                     <ListData
                      key={index}
                      value={date.value}
                      danger={date.flag}
                     />
                 );
              });

            }
            break;    
        default:
            break;    
    }
/*************************** */
/** HTML / JSX  */
/*************************** */
    return(<section className={classes.ServerPart}>
        <div className={classes.ContentTitle}>
            <h4 className={classes.Title_4} >{props.title}{props.data===undefined ? <span style={{color:'#FF5049',marginLeft:'5px'}}>Backup Inactifs </span> :''}</h4>
        </div>
        {content}
    </section>
);
}
    
export default ServerPart;