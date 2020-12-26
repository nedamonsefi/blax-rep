import React,{PureComponent} from 'react';
import ServerDetail from './ServerDetail/ServerDetail';
class Servers extends PureComponent{
    render(){
        let content=this.props.serversDataVal.map((server,index)=>{
            return (
              <ServerDetail key={index} serverData={server.data}/>
            );
        })
        return(
            <section className="container" >
              {content}
            </section>
        );
    }
    
}
export default Servers; 