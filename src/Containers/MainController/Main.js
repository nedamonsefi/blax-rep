import React from 'react';
import axios from 'axios';
import BaseConfige from '../../Components/BaseConfige/BaseConfige';
import Spinner from '../../Components/UI/Spinner/Spinner';
import ErrorPag from '../../Components/UI/ErrorPag/ErrorPag';
import Servers from '../../Components/Servers/Servers';


class Main extends React.Component{
  state={
    servers:[],
    serversData:[],
    duration:10000,
    loading:false,
    error:false,
    timer:null,
  }
/*************************** */
/** GET AND CHECK LOCALSTORAGE  */
/*************************** */
  componentWillMount() {
    const storageServers=JSON.parse(localStorage.getItem("servers"));
    if(!storageServers){
      let storageServers = ['http://server.lb01.blax.cloud/index.php?json=1','http://server.moira.blax.host/index.php?json=1'];
      localStorage.setItem("servers", JSON.stringify(storageServers));
    }else if(storageServers) {this.setState({servers:storageServers})}
  }
/*************************** */
/** SENDING AJAX CALL  */
/*************************** */
componentDidMount()  {
  this.setState({loading:true});
  for(let i=1;i<=this.state.servers.length;i++) {
    let server=this.state.servers[i-1];
     let timer=setInterval(() => {
      axios.get(server)
      .then(response=> {
        this.setState({loading:false});
        const oldServersData=[...this.state.serversData];
        const index=oldServersData.findIndex(data=>data.name===response.data.server_name);
        if (index===-1) {
          this.setState(
            {serversData:
              [...this.state.serversData,
              {name:response.data.server_name,data:response.data}
            ]
            });
        }
        else if (index!==-1) {
                let updatedValue={...oldServersData[index].data};
                updatedValue=response.data;
                oldServersData[index].data=updatedValue;
                this.setState({serversData:oldServersData});
              } 
      })
        .catch(error => {
          throw new Error(error);
      })
      
    }, i*this.state.duration);
    this.setState({timer:timer});
  }
}
componentWillUnmount() {
  clearInterval(this.state.timer);
}
/*************************** */
/** ADD NEW SERVER HANDELER   */
/*************************** */
 addServerHandeler=(serverName) => {
  const updatesServer=[...this.state.servers,serverName];
  localStorage.setItem("servers", JSON.stringify(updatesServer));
  this.setState({
    servers:updatesServer,
  });
}
/*************************** */
/** CHANGE DURATION HANDELER   */
/*************************** */
  changeDurationHandeler=(durationValue)=>{
  this.setState({
    duration:durationValue*1000,
  })
}

render() {
/*************************** */
/** LOGIC   */
/*************************** */
let content=this.state.error ?  <ErrorPag>Something went wrong! can't reach to the server!  </ErrorPag>: <Spinner/>;
if(!this.state.loading) {
  if(this.state.serversData) {
     content=<Servers serversDataVal={this.state.serversData}/> 
  }
}
    return(
      <React.Fragment>
        <BaseConfige addServer={this.addServerHandeler}
            changeDuration={this.changeDurationHandeler}
        /> 
        {content}
      </React.Fragment>
    
    );
  }
}
  export default Main;