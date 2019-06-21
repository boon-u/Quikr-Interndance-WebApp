import React, { Component } from 'react';
import axios from 'axios';
import myStyle from './myStyle.module.css';


class Schema_Display extends Component {

    constructor(){
        super();
        this.state = { 
            data : [],
            user_data : []
        };
    }

    componentDidMount(){
        this.fetchData(this.props.boon);
        console.log(19, new Date().getHours());
        console.log(20, new Date().getMinutes())
    }

    componentDidUpdate(prevProps) {
        if(prevProps.boon !== this.props.boon){
        console.log(this.props.boon);
        this.fetchData(this.props.boon);
        }
    }

    fetchData=(url)=>{
        console.log("url",url);
        axios.get('http://localhost:5000/api/week/'+url)
                .then(response => {
                    this.setState({ data : response.data});
                })
               .catch( function(error) {
                    console.log(error);
                  })    
    }


    createTable = () => {

        let table = []
        let children = [];
        
        children.push(<td>Date</td>);
        children.push(<th>In time</th>);
        children.push(<th>Out time</th>);
        children.push(<th>Duration</th>);
        
        // Outer loop to create parent
        for (let i = 0; i < this.state.data.length ; i++) {

          children = [];
          var duration_h = null;
          var duration_m = null;
    

        // logic to calculate the duration 
        var in_t = this.state.data[i].in_time.split(':');
        var out_t = null;

        if(this.state.data[i].out_time){
            out_t = this.state.data[i].out_time.split(':');

        console.log(in_t, out_t);

        var h1,h2,m1,m2;
        h1 = Number(in_t[0])
        h2 = Number(out_t[0])

        m1 = Number(in_t[1])
        m2 = Number(out_t[1])
        
        
        if(m2-m1 < 0){
            duration_m = (m2 - m1 + 60);
            duration_h = (h2 - h1 - 1);
        }
        else{
            duration_m = (m2 - m1);
            duration_h = h2-h1;
        }
        }

        /////////////////////////////// logic end

            children.push(<td>{this.state.data[i].date}</td>);
            children.push(<td>{this.state.data[i].in_time}</td>);
            children.push(<td>{this.state.data[i].out_time}</td>);
            children.push(<td>{duration_h} hrs {duration_m} min </td>);
            
          table.push(<tr>{children}</tr>)
        }
        return table
      } 
     
    render() { 

        console.log('our data is:', this.state.data.length);
        console.log(this.state.user_data[0])

        return ( 
            <div>
                <br>
                </br>
                <h4 className={myStyle.emp}>Emp ID : {this.state.data[0] && this.state.data[0].emp_ID} </h4>
                <table className={myStyle.tb}>
                    {this.createTable()}
                </table>
            </div>

        );
    }
}
 
export default Schema_Display;