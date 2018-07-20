import React, { Component } from 'react';

class TableRow extends Component {

    AuthorityName =()=>{
        if(this.props.authority === 1 || this.props.authority === "1"){
            return ("Admin");
        }
        else if (this.props.authority === 2 || this.props.authority === "2"){
            return ("Assistant");
        }
        else
        {
            return ("Member");
        }
    }
    editUserClick = ()=>{
        this.props.changeEditUserStatus();
        this.props.editUser2();
        
    }
    deleteUserClick=(userID)=>{
        this.props.deleteButton(userID);
    }
    
    render() {
        return (
            <tr>
            <td>{this.props.stt}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.phoneNumber}</td>
            <td>{this.AuthorityName()}</td>
            <td>
            <div className="btn-group">
                <div className="btn btn-success" onClick ={()=>this.editUserClick()} >Sửa <i className="fa fa-edit" /></div>
                <div className="btn btn-danger" onClick ={()=>this.deleteUserClick(this.props.id)}>Xóa <i className="fa fa-trash-o" /></div>
            </div>
            </td>
        </tr>
        );
    }
}

export default TableRow;