import { LightningElement } from 'lwc';

export default class AmazonClone extends LightningElement {
    email;
    password;

    handleUserName(event){
        this.email = event.target.value;
    }

    handlePasswordChange(event){
        this.password = event.target.value;
    }

    handleLogin(){
       console.log("InsideLogin");
       console.log(this.email);
       console.log(this.password);   // TODO: Implement authentication logic here  (e.g., call Apex controller)  and redirect to home page or dashboard.
    }
}