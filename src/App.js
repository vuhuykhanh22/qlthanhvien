import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Table from './Components/Table';
import AddUser from './Components/AddUser';
import DataUser from './Components/dulieu';
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state=({
      trangthaiChinhsua:false,
      data:DataUser,
      searchText:"",
      editUser: false,
      userEditObject:{}
    })
  }
 
  componentWillMount() {
   if(localStorage.getItem('UserData')=== null){
     localStorage.setItem('UserData',JSON.stringify(DataUser));
   }
   else{
     var temp =JSON.parse(localStorage.getItem('UserData'));
     this.setState(
       {
         data:temp
       }
     );
   }
 }
 
  deleteUserButton = (userID)=>{
    var tempData = this.state.data.filter(item => item.id !== userID);
    this.setState({
      data:tempData
    });
    localStorage.setItem('UserData',JSON.stringify(tempData));
  }
  getUserInfoValueForApp= (info)=>{
    console.log("Thong tin da sua la "+info.name);
    this.state.data.forEach((value,key)=>{
      if(value.id === info.id){
        value.name = info.name;
        value.phone = info.phone;
        value.authority = info.authority;
      }
    })
    localStorage.setItem('UserData',JSON.stringify(this.state.data));
  }
  changeEditUserStatus=()=>{
    this.setState({
      editUser:!this.state.editUser
    });
  }
  loadTable = (user)=>{
    console.log("Da ket noi thanh cong");
    this.setState({
      userEditObject:user
    });
    console.log(user);
  }
  addNewUser = (name,phone,authority)=>{
      // console.log(name);
      // console.log(tel);
      // console.log(permission);
        var item ={};
        item.id = uuidv1();
        item.name =  name;
        item.phone = phone;
        item.authority = authority;
        console.log(item);
        var items =this.state.data ;
        items.push(item);
        this.setState({
          data:items
        });
       console.log(this.state.data);
       localStorage.setItem('UserData',JSON.stringify(items));
  }
  getTextSearch = (dl)=>{
    this.setState({
      searchText: dl
    });
  }
  doiTrangthai = ()=>{
    this.setState({
      trangthaiChinhsua : !this.state.trangthaiChinhsua
    })
  }
  render() {
  //  localStorage.setItem("DataUser",JSON.stringify(DataUser));
    // console.log(this.state.data);
    var ketqua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText)!== -1){
          ketqua.push(item);
      }
    })
    console.log(ketqua);
    return (
      <div>
      <Header/>
      <Search getUserInfoValue ={(info)=>this.getUserInfoValueForApp(info)} userEditObject={this.state.userEditObject} editUserStatus ={this.state.editUser} changeEditUserStatus={()=>this.changeEditUserStatus()} checkConnect={(dl)=>this.getTextSearch(dl)}/>
      <div className="content">
        <div className="container">
          <div className="row">
            <AddUser addUser = {(name,phone,authority)=>this.addNewUser(name,phone,authority)} hienthiForm = {this.state.trangthaiChinhsua}/>
            <Table deleteButtonClick= {(userID)=>this.deleteUserButton(userID)} changeEditUserStatus={()=>this.changeEditUserStatus()}  loadTable = {(user)=>{this.loadTable(user)}} dataUser={ketqua} ketNoi ={()=>{this.doiTrangthai()}} hienthiForm={this.state.trangthaiChinhsua} />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
