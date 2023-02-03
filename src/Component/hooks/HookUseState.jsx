import { useState } from "react";
import CollegeData from "../../fakedb/index.json";
import { MdDelete } from "react-icons/md";
import {AiFillEye} from "react-icons/ai";
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Input, Label, Row} from "reactstrap";

function HookUseState(){

    // let current = 0;

    // const [count, setCount] = useState(0);
    const [user, setUser] = useState(CollegeData);
    const [isCreate, setIsCreate] = useState(true);
    // console.log(user);

    const deleteHandler = (id) =>{
        // console.log("delete", id)
        const deleteData = user.filter((clg)=>{
            return clg.collegeID !== id
        });
        setUser(deleteData);
    };

    return ( 
    <>
        {/* <h2>Counter {count} </h2>
        <button onClick={()=>{
           setCount(current);
        }} >Current</button>
        <button onClick={()=>{
           setCount(count + 1);
        }} >Increment</button>
        <button onClick={()=>{
           setCount(count - 1);
        }} >Decrement</button> */}
{isCreate? (
    <Card>
            <CardHeader className="display">
                <CardTitle>College Data</CardTitle>
                <Button color="primary" onClick={() => {setIsCreate(false)}}>Create</Button>
            </CardHeader>
        <table className="table">
            <thead className="table-dark">
                <tr>
                    <th>S No.</th>
                    <th>College Name</th>
                    <th>College ID</th>
                    <th>College City</th>
                    <th>Fee Structure</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((u,i)=>{
                        return (
                            <tr key={u.collegeID}>
                                <td>{i + 1}</td>
                                <td>{u.collegeName}</td>
                                <td>{u.collegeID}</td>
                                <td>{u.city}</td>
                                <td>{u.feeStructure.btech}</td>
                                <td>
                                    <MdDelete cursor="pointer" color="red" size={20} onClick={()=>{deleteHandler(u.collegeID)}} />
                                    <AiFillEye cursor="pointer" size={20}/>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </Card>
) : (
    <Card>
        <CardHeader>
            <CardTitle>Create Page</CardTitle>
        </CardHeader>
        <CardBody>
            <Row sm={2}>
                <Col>
                <Label>College Name</Label>
                <Input />
                </Col>
                <Col>
                <Label>College ID</Label>
                <Input />
                </Col>
            </Row>
            <Row sm={2}>
                <Col>
                <Label> College City</Label>
                <Input />
                </Col>
                <Col>
                <Label>Fee Sturcture</Label>
                <Input />
                </Col>
            </Row>
        </CardBody>
        <Row sm={6} className="buttonClass">
            <Button color="primary" >Create</Button>
            <Button color="secondary" onClick={()=>{setIsCreate(true)}}>Cancel</Button>
        </Row>
    </Card>
)
}
        
    </>
    )
}

export default HookUseState;