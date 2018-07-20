import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state=({
            tempValue:"",
            userObject:{}
        })
    }
    checkEditStatus=()=>{
        if(this.props.editUserStatus === true){
            return <EditUser getUserInfoValue ={(info)=>this.getUserInfoValue(info)} userEditObject = {this.props.userEditObject} changeEditUserStatus = {()=>this.props.changeEditUserStatus()}/> 
        }
    }
    isChange=  (event)=>{
        console.log(event.target.value);
        this.setState({
            tempValue:event.target.value
        })
        this.props.checkConnect(this.state.tempValue);   
    }
    getUserInfoValue =(info)=>{
        this.setState({
            userObject:info
        });
        console.log(info);
        this.props.getUserInfoValue(info);
    }
    render() {
        return (
            <div className="search">
            <div className="container">
                <div className="row">
                <div className="col-sm-12 mb-3">
                    <div className="form-group">
                    <div className="btn-group float-right">
                        <input type="text" style={{width: 400}} onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Nhập dữ liệu" />
                        <div className="btn btn-info" onClick={(dl)=>{this.props.checkConnect(this.state.tempValue)}}>Tìm kiếm</div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                    {this.checkEditStatus()}
                </div>
            </div>
            </div>
        );
    }
}

export default Search;