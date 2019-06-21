import React, {Component, Link} from 'react';
import './homepage.css';
import axios from 'axios';
import styles from './myStyle.module.css';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Duration_Display from './schema_display';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            users : [],
            selectedOption:null,
            link:null
        }; 

        this.getUserList = this.getUserList.bind(this);
        this.myFunction = this.myFunction.bind(this);
        this.onlyUnique = this.onlyUnique.bind(this);
    }
                    
    componentDidMount(){ 
        axios.get("http://localhost:5000/api/week")
                .then(response => {
                    this.setState({ users : response.data});
                })
               .catch( function(error) {
                    console.log(error);
                  })
            
    }


    getUserList(){

        return this.state.users.map( function(currentUser, i){
            return currentUser; 
        });
    }

    myFunction() {
        var x = document.getElementById("mySelect").length;
        document.getElementById("demo").innerHTML = x;
      }
    
      handleChange = selectedOption => {
        console.log(`Option selected: `, selectedOption);
        this.setState({link:selectedOption['label'], selectedOption})
      };

      onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    render(){
        let data = this.getUserList();
        let ID_list = [];
        let users_list = [];

        for(var n in data){
            var l,v;
            var flag1,flag2;
            flag1 = flag2 = false;
            for(var key in data[n]){

                if(key === "emp_ID"){
                    l = data[n][key];
                    users_list.push(data[n][key]);
                }
        }
    }

        users_list = users_list.filter(this.onlyUnique);
        
        console.log(101, users_list);
        
        
        for(var d in users_list){
            ID_list.push( {label : users_list[d], value : d} )
        }
        
        return(
            <div>
                <h4 className={styles.head}>Select an Employee ID</h4>
                <Select className={styles.sel} options = {ID_list} onChange={this.handleChange} value={this.selectedOption} />
                {this.state.link && <Duration_Display boon={this.state.link} user_data = {this.state.users}/>}
            </div>
        )
    }
}
