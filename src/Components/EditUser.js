import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            phone:this.props.userEditObject.phone,
            authority:this.props.userEditObject.authority
        }
    }
isChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]:value
    });
}
saveButtonClick =()=>{
    var info ={};
    info.id = this.state.id;
    info.name = this.state.name;
    info.phone =this.state.phone;
    info.authority=this.state.authority;
    this.props.getUserInfoValue(info);
    this.props.changeEditUserStatus();
}
    render() {
        console.log(this.state);
        return (
            <div className="col-12">
            <div className="card border-white text-light bg-secondary mb-3">
            <div className="card-header">Sửa thông tin thành viên</div>
            <div className="card-body">
            <div className="form-group">
                <label>Họ và tên</label>
                <input onChange={(event)=>{this.isChange(event)}} defaultValue={this.props.userEditObject.name} type="text"  name="name" id="name" className="form-control" />
            </div>
            <div className="form-group">
                <label>Số điện thoại</label>
                <input onChange={(event)=>{this.isChange(event)}} defaultValue={this.props.userEditObject.phone} type="text"  name="phone" id="phone" className="form-control"  />
            </div>
            <div className="form-group">
                <select onChange={(event)=>{this.isChange(event )}} defaultValue={this.props.userEditObject.authority} className="custom-select mt-3"  name="authority" required id="authority">
                <option value={0}>Chọn quyền hạn</option>
                <option value={1}>Admin</option>
                <option value={2}>Assistant</option>
                <option value={3}>Member</option>
                </select>
            </div>
            <div className="form-group mb-0">
                <input type="submit" onClick={()=>this.saveButtonClick()}  value ="Lưu thay đổi" style={{display: 'block', fontWeight: 'bold', fontSize: 17, backgroundColor:"#ffc107",width:'200px',margin:'30px auto 0 auto',padding:'8px',borderColor:"#ffc107"}}/>
            </div>
            </div>
        </div>
        </div>
        );
    }
}

export default EditUser;