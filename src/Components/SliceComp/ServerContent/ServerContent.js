import React from 'react';
import classes from './ServerContent.module.scss';
import ServerPart from '../../SliceComp/ServerPart/ServerPart';
const ServerContent=(props)=>{
     return (<section className={classes.ServerContent}>
       <ServerPart title="Heartbeat" data={props.serverData.heartbeat}/>
       <ServerPart title="Disks" data={props.serverData.disks}/>
       <ServerPart title="Loads" data={props.serverData.loads}/>
       <ServerPart title="Backups" data={props.serverData.backups}/>
     </section>
);  
}
  
export default ServerContent;