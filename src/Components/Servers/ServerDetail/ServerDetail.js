import React,{PureComponent} from 'react'; 
import classes from './ServerDetail.module.scss';
import ServerTitle from '../../SliceComp/ServerTitle/ServerTitle';
import ServerContent from '../../SliceComp/ServerContent/ServerContent';

class DetailServer extends PureComponent {
    render(){
        return(
            <section className={classes.ServerDetail }>
                <ServerTitle >{this.props.serverData.server_name}</ServerTitle>
                <ServerContent serverData={this.props.serverData}/>
            </section>
        );
    }
   
}
export default DetailServer;