import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
    mappingDataUser = ()=> this.props.dataUser.map((value,key)=>(
        <TableRow deleteButton= {(userID)=>this.deleteButtonClick(userID)} changeEditUserStatus={()=>this.props.changeEditUserStatus()} editUser2={()=>this.props.loadTable(value)} key={key} stt={key+1} id = {value.id} userName ={value.name} phoneNumber ={value.phone} authority={value.authority}/>
    
    ))
    deleteButtonClick = (userID)=>{
        this.props.deleteButtonClick(userID);
    }
    kiemtraStateApp =()=>{
    if(this.props.hienthiForm === true){
        return( <div className="btn btn-block btn-outline-danger mb-2" onClick={()=>{this.props.ketNoi()}}>Đóng</div>

        )
    }
    else{
        return( <div className="btn btn-block btn-outline-success mb-2" onClick={()=>{this.props.ketNoi()}}>Thêm</div>)
    }
    
}
    render() {
        return (
            <div className="col">
            <table className="table table-striped table-hover table-{1:striped|sm|bordered|hover|inverse} ">
                <thead className="thead-inverse|thead-default">
                <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Điện thoại</th>
                    <th>Quyền</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                    {this.mappingDataUser()}
                </tbody>
            </table>
            <div className="btn-group">
            {this.kiemtraStateApp()}
           
            </div>
            </div>

        );
    }
}

export default Table;