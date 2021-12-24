import axios from 'axios';
import ProfilePage from './profile';


class Auth{
    constructor(){
        
        this.state = {
            isAuthenticated: false,
            error: null,
            token: null,
            username: '',
            password: '',
            codename: null,
            profile: null,
            boards:null,
            subjects:null,
            cid: null,
        }

        this.config = {
            
        }
    }

    getProfile = (token,codename) => {
        console.log(token);
        console.log(codename);
        axios.post('https://identity-qa.schooglink.com/version1.0/auth/getprofile/', {
            Token: token,
            CodeName: codename,
            IpAddress: "127.0.0.1", //TODO: get the ip address
        }, {headers: {
            "Content-Type": "application/json"
        }}).then(res => {
            if(res.status === 200){
                if (token === this.state.token){
                    this.profile = res.data[0];
                }
                console.log(res.data);
                //else {return res.data[0];}
            }
        })
    }
    
    login = (email,password)=>{

         return new Promise(() => {
        axios.post('https://identity-qa.schooglink.com/version1.0/auth/loginuser/', {
            EmailId: email,
            Password: password,
            IpAddress: "127.0.0.1", //TODO: Get the IP address of the user
        },{headers: {
            "Content-Type": "application/json"
        }})
        .then(res => {
                this.state.token = res.data[0]['Token'];
                this.state.isAuthenticated = true;
                this.state.codename = res.data[0]['CodeName'];
                this.getProfile(res.data[0].Token,res.data[0].CodeName);
                console.log('success');
                let obj = {token: res.data[0]['Token'], codename: res.data[0]['CodeName']};
                this.getBoards(this.state.token,this.state.codename);
                
                console.log(this.state);
                document.cookie = "auth="+JSON.stringify({token: res.data[0]['Token'], codename: res.data[0]['CodeName']});
                ProfilePage(email,this.state);
                return {token: res.data[0]['Token'], codename: res.data[0]['CodeName']};
            
            }
        ).catch(err => {console.log(err);})})
    }

    getBoards = (token, codename) => {
        

        axios.post('https://curriculum-django-staging.schooglink.com/version1.0/curriculum/listboards/', {
            token: token,
            codeName: codename,
            ipAddress: "127.0.0.1", 
        }, {headers:{
            "Content-Type": "application/json"
        }})
        .then( res => {
            if(res.status === 202){
                this.state.boards = res.data.RV;
                return res.data.RV;
            }
        }
        )
    }


    // fetchClasses = (token, codename, boardId) => {
    //     const headers = {
    //       "Content-Type": "application/json",
    //     };
      
    //     const data = {
    //       Token: token,
    //       CodeName: codename,
    //       ipAddress: "127.0.0.1",
    //       boardId,
    //     };
      
    //     try {
    //       const response = await axios.post(`${url}listclasses/`, data, {
    //         headers: headers,
    //       });
    //       const classesData = await response.data.RV;
    //       //   console.log(boardsData);
    //       return classesData;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
}

export default Auth;