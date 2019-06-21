import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import myStyle from './myStyle.module.css';


class Display extends Component {

    constructor(props){
        super(props);

        this.state = {

            data : [],
            user_data : [],
            emp_ID : null,
            emp_Name : [],
            Ph_no : []
        };
        // console.log(props,'props');
    }

    componentDidMount(){
        // console.log("prop check", this.props.boon, this.props.user_data);
        this.fetchData(this.props.boon);
        // console.log(this.data);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.boon !== this.props.boon){
        console.log(this.props.boon);
        this.fetchData(this.props.boon);
        }

    }

    fetchData=(url)=>{
        console.log("url",url);
        axios.get('http://localhost:5000/api/duration/' + url)
                .then(response => {
                    this.setState({ data : response.data});
                })
               .catch( function(error) {
                    console.log(error);
                  })

     axios.get('http://localhost:5000/api/users/' + url)
                  .then(response => {
                      this.setState({ user_data : response.data});
  
                    //   console.log(this.state.data[0].emp_ID);
                    //   console.log(this.state.data[0].in_time);
                      console.log("tst run", this.state.user_data);
                  })
                 .catch( function(error) {
                      console.log(error);
                    })
  
                  
        

    }

    render() { 

        // var data = this.state.data;

        // console.log(moment(this.state.data[0].out_time[0]));

        console.log(this.props.user_data);
        
        return ( 

            <div>
                <br>
                </br>
                <h4 className={myStyle.emp}>Emp ID : {this.state.data[0] && this.state.data[0].emp_ID} </h4>
                {/* <h4>Emp Name : {this.state.data[0] && this.props.user_data[0]['emp_Name']}</h4> */}
                <h4 className={myStyle.emp}>Emp Name : {this.state.user_data[0] && this.state.user_data[0].emp_Name} </h4>
                <h4 className={myStyle.emp}>Ph.no : {this.state.user_data[0] && this.state.user_data[0].Ph_no}</h4>
                <table className={myStyle.tb}>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>In time</th>
                            <th>Out time</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>{this.state.data[0] &&  moment(this.state.data[0].in_time[0]).format('LLL')}</td>
                            <td>{ this.state.data[0] && moment(this.state.data[0].out_time[0]).format('LLL')}</td>
                            <td>{ this.state.data[0] &&  (parseFloat((moment(this.state.data[0].out_time[0])).diff(moment(this.state.data[0].in_time[0]), 'minutes', true))/60).toFixed(0) } hrs {this.state.data[0] && (parseFloat((moment(this.state.data[0].out_time[0])).diff(moment(this.state.data[0].in_time[0]), 'minutes', true))%60) } min</td>
                            {/* <td>{ this.state.data[0] &&  (parseFloat((moment(this.state.data[0].out_time[0])).diff(moment(this.state.data[0].in_time[0]), 'minutes', true))%60) } min </td> */}
                        </tr>
                        <tr>
                        <td>Tuesday</td>
                            <td>{this.state.data[0] &&  moment(this.state.data[0].in_time[1]).format('LLL')}</td>
                            <td>{ this.state.data[0] && moment(this.state.data[0].out_time[1]).format('LLL')}</td>
                            {/* <td>{ this.state.data[0] &&  parseFloat((moment(this.state.data[0].out_time[1])).diff(moment(this.state.data[0].in_time[1]), 'hours', true)).toFixed(1) } hrs</td> */}
                            <td>{ this.state.data[0] &&  (parseFloat((moment(this.state.data[0].out_time[1])).diff(moment(this.state.data[0].in_time[1]), 'minutes', true))/60).toFixed(0) } hrs {this.state.data[0] && (parseFloat((moment(this.state.data[0].out_time[1])).diff(moment(this.state.data[0].in_time[1]), 'minutes', true))%60) } min</td>
                        </tr>   

                        <tr>
                            <td>Wednesday</td>
                            <td>{this.state.data[0] &&  moment(this.state.data[0].in_time[2]).format('LLL')}</td>
                            <td>{ this.state.data[0] && moment(this.state.data[0].out_time[2]).format('LLL')}</td>
                            {/* <td>{ this.state.data[0] &&  parseFloat((moment(this.state.data[0].out_time[2])).diff(moment(this.state.data[0].in_time[2]), 'hours', true)).toFixed(1) } hrs</td> */}
                            <td>{ this.state.data[0] &&  (parseFloat((moment(this.state.data[0].out_time[2])).diff(moment(this.state.data[0].in_time[2]), 'minutes', true))/60).toFixed(0) } hrs {this.state.data[0] && (parseFloat((moment(this.state.data[0].out_time[2])).diff(moment(this.state.data[0].in_time[2]), 'minutes', true))%60) } min</td>
                        </tr>   

                        <tr>
                        <td>Thursday</td>
                            <td>{this.state.data[0] &&  moment(this.state.data[0].in_time[3]).format('LLL')}</td>
                            <td>{ this.state.data[0] && moment(this.state.data[0].out_time[3]).format('LLL')}</td>
                            {/* <td>{ this.state.data[0] &&  parseFloat((moment(this.state.data[0].out_time[3])).diff(moment(this.state.data[0].in_time[3]), 'hours', true)).toFixed(1) } hrs</td> */}
                            <td>{ this.state.data[0] &&  (parseFloat((moment(this.state.data[0].out_time[3])).diff(moment(this.state.data[0].in_time[3]), 'minutes', true))/60).toFixed(0) } hrs {this.state.data[0] && (parseFloat((moment(this.state.data[0].out_time[3])).diff(moment(this.state.data[0].in_time[3]), 'minutes', true))%60) } min</td>
                        </tr>   

                        <tr>
                        <td>Friday</td>
                            <td>{this.state.data[0] &&  moment(this.state.data[0].in_time[4]).format('LLL')}</td>
                            <td>{ this.state.data[0] && moment(this.state.data[0].out_time[4]).format('LLL')}</td>
                            {/* <td>{ this.state.data[0] &&  parseFloat((moment(this.state.data[0].out_time[4])).diff(moment(this.state.data[0].in_time[4]), 'hours', true)).toFixed(1) } hrs</td> */}
                            <td>{ this.state.data[0] &&  (parseFloat((moment(this.state.data[0].out_time[4])).diff(moment(this.state.data[0].in_time[4]), 'minutes', true))/60).toFixed(0) } hrs {this.state.data[0] && (parseFloat((moment(this.state.data[0].out_time[4])).diff(moment(this.state.data[0].in_time[4]), 'minutes', true))%60) } min</td>
                        </tr>   

                        <tr>
                            {/* <td>{this.state.data[0] &&  moment(this.state.data[0].in_time[5]).format('LLLL')}</td>
                            <td>{ this.state.data[0] && moment(this.state.data[0].out_time[5]).format('LLLL')}</td>
                            <td>{ this.state.data[0] &&  (moment(this.state.data[0].out_time[5])).diff(moment(this.state.data[0].in_time[5]), 'hours', true) } </td> */}
                            <td>Saturday</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>   

                        <tr className = {myStyle.off}> 
                            {/* <td>{this.state.data[0] &&  moment(this.state.data[0].in_time[6]).format('LLLL')}</td>
                            <td>{ this.state.data[0] && moment(this.state.data[0].out_time[6]).format('LLLL')}</td>
                            <td>{ this.state.data[0] &&  (moment(this.state.data[0].out_time[6])).diff(moment(this.state.data[0].in_time[6]), 'hours', true) } </td> */}
                            <td>Sunday</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>   

                    </tbody>
                </table>
            </div>

        );
    }
}
 
export default Display;