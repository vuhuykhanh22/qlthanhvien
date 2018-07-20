import React, { Component } from 'react';

class AddUser extends Component {
constructor(props) {
    super(props);
    this.state={
        id:"",
        name:"",
        phone:"",
        authority:""
    }
}

    
    // constructor(props) {
    //     super(props);
    //     // this.state=({
    //     //     trangthaiChinhsua:false
    //     // })
    // }
    // thaydoiTrangthai=()=>{
    //     this.setState({
    //         trangthaiChinhsua: !this.state.trangthaiChinhsua
    //     })
    // }
    getValue = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]:value
        });
        // var item ={};
        // item.id = this.state.id;
        // item.name =  this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
    }
    kiemtraTrangthai = ()=>{
        if(this.props.hienthiForm === true){
            return(
                <div className="col">
                <form>
                <div className="card border-info text-light bg-info mb-3">
                <div className="card-header">Thêm thành viên mới</div>
                <div className="card-body">
                <div className="form-group">
                    <label>Họ và tên</label>
                    <input type="text" onChange={(event)=>{this.getValue(event)}} name="name" id="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Số điện thoại</label>
                    <input type="text" onChange={(event)=>{this.getValue(event)}} name="phone" id="name" className="form-control"  />
                </div>
                <div className="form-group">
                    <select className="custom-select mt-3" onChange={(event)=>{this.getValue(event)}} name="authority" required id="authority">
                    <option value={0}>Chọn quyền hạn</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Assistant</option>
                    <option value={3}>Member</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="reset"  value ="Thêm" onClick={(name,phone,authority)=>this.props.addUser(this.state.name, this.state.phone ,this.state.authority)} style={{display: 'block', fontWeight: 'bold', fontSize: 17, backgroundColor:"#ffc107",width:'200px',margin:'30px auto 0 auto',padding:'8px',borderColor:"#ffc107"}}/>
                </div>
                </div>
            </div>
            </form>
            </div>
            )
        }
    }
    // checkHienthi=()=>{
    //     if(this.state.trangthaiChinhsua === true){
    //         return  <div className="btn btn-block btn-outline-danger mb-2" onClick={()=>{this.thaydoiTrangthai()}}>Đóng</div>;
    //     }
    //     else
    //     {
    //         return  <div className="btn btn-block btn-outline-success mb-1" onClick={()=>{this.thaydoiTrangthai()}}>Thêm</div>;
    //     }
    // }
    // thaydoiHienthi=()=>{
    //     if(this.state.trangthaiChinhsua){
    //         return (
    //             <div className="card border-info text-light bg-info mb-3">
    //             <div className="card-header">Thêm thành viên mới</div>
    //             <div className="card-body">
    //             <div className="form-group">
    //                 <label>Họ và tên</label>
    //                 <input type="text" name="name" id="name" className="form-control" />
    //             </div>
    //             <div className="form-group">
    //                 <label>Số điện thoại</label>
    //                 <input type="text" name="number" id="number" className="form-control"  />
    //             </div>
    //             <div className="form-group">
    //                 <select className="custom-select mt-3" required id="authority">
    //                 <option value={0}>Chọn quyền hạn</option>
    //                 <option value={1}>Admin</option>
    //                 <option value={2}>Assistant</option>
    //                 <option value={3}>Member</option>
    //                 </select>
    //             </div>
    //             <div className="form-group">
    //                 <div className="btn btn-warning btn-block" style={{display: 'block', fontWeight: 'bold', fontSize: 17, marginTop: 30}}>Thêm</div>
    //             </div>
    //             </div>
    //         </div>
    //         )
    //     }
    // }
    render() {
        // console.log(this.state);
        return (
            <div>
            {/* {this.checkHienthi()}
            {this.thaydoiHienthi()} */}
                {this.kiemtraTrangthai()}
           </div>

        );
    }
}

export default AddUser;