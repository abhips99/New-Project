import { useState } from "react";
import CollegeData from "../../fakedb/index.json";
import { MdDelete } from "react-icons/md";
import {AiFillEye} from "react-icons/ai";
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Input, Label, Row} from "reactstrap";


const HookUseState  = () =>{

    let current = 0;

    const [count, setCount] = useState(0);
    const [user, setUser] = useState(CollegeData);
    const [isView, setIsView] = useState(true);
    const [isCreate, setIsCreate] = useState(true);
    const [error, setError] = useState(false);
    const [collegeObj, setCollegeObj] = useState({
        clgName : "",
        clgId : "",
        city : "",
        btech : ""
    });
    const {clgName, clgId, city, btech} = collegeObj;
    // console.log(user);

    const handleChange = (e) =>{
        setCollegeObj({
            ...collegeObj, [e.target.name] : e.target.value
        });
    };

    const deleteHandler = (id) =>{
        // console.log("delete", id)
        const deleteData = user.filter((clg)=>{
            return clg.collegeID !== id
        });
        setUser(deleteData);
    };
    const viewHandler = (id) =>{
        const data = user.filter((clg)=>{
            return clg.collegeID === id
        });
        setCollegeObj({
            clgId : data[0].collegeID,
            clgName : data[0].collegeName,
            city : data[0].city,
            btech : data[0].feeStructure.btech
        });
    };

    const handleSubmit= (e) =>{
        e.preventDefault();
        if (clgId && clgName && city && btech !== ""){ 

            if (!isView){
                const newObj = {
                    collegeName: clgName,
                    collegeID: clgId,
                    city,
                    feeStructure : {
                        btech: btech,
                    }
                };
                const editData = user.filter((clg)=>{
                    return clg.collegeID !== clgId;
                });
                setUser([...editData, newObj])
            } else {
                const newObj = {
                    collegeName: clgName,
                    collegeID: clgId,
                    city,
                    feeStructure : {
                        btech: btech,
                    }
                };
                setUser([...user, newObj])
            }
            setIsCreate(true)
            setIsView(true)
        } else {
            setError(true)
        }
    };

    return ( 
    <>
        <div className="counterOuter">
        <h2>Counter {count} </h2>
        <Button color="danger" onClick={()=>{
           setCount(current);
        }} >Current</Button> 
        <Button color="primary" onClick={()=>{
           setCount(count + 1);
        }} >Increment</Button> 
        <Button color="secondary" onClick={()=>{
           setCount(count - 1);
        }} >Decrement</Button>
        </div>
{isCreate && isView ? (
    <Card>
            <CardHeader className="display">
                <CardTitle>College Data</CardTitle>
                <Button color="primary" onClick={() => {setIsCreate(false); setIsView(true); setError(false); setCollegeObj({
                clgName : "",
                clgId : "",
                city : "",
                btech : ""
            })}}>Create</Button>
            </CardHeader>
        <table className="table">
            <thead className="table-dark">
                <tr>
                    <th>S No.</th>
                    <th>College ID</th>
                    <th>College Name</th>
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
                                <td>{u.collegeID}</td>
                                <td>{u.collegeName}</td>
                                <td>{u.city}</td>
                                <td>{u.feeStructure.btech}</td>
                                <td>
                                    <MdDelete cursor="pointer" color="red" size={20} onClick={()=>{deleteHandler(u.collegeID)}} />
                                    <AiFillEye cursor="pointer" size={20}  onClick={()=>{
                                        viewHandler(u.collegeID)
                                        setIsView(false)
                                    }}/>
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
            {/* <div className="error">{error && <>{error}</>}</div> */}
        </CardHeader>
        <CardBody>
            <Row sm={2} className="padding">
                <Col>
                <Label>College ID</Label>
                <Input placeholder="College ID" name="clgId" value={clgId} onChange={handleChange} readOnly={!isView ? true : false}  />
                {error && clgId === "" ? <span className="error">Please Enter Vaild Input</span> : "" }
                </Col>
                <Col>
                <Label>College Name</Label>
                <Input placeholder="College Name" name="clgName" value={clgName} onChange={handleChange}/>
                {error && clgName === "" ? <span className="error">Please Enter Vaild Input</span> : ""}
                </Col>
            </Row>
            <Row sm={2} className="padding">
                <Col>
                <Label> College City</Label>
                <Input placeholder="College City" name="city" value={city} onChange={handleChange}/>
                {error && city === "" ? <span className="error">Please Enter Vaild Input</span> : ""}
                </Col>
                <Col>
                <Label>Fee Sturcture</Label>
                <Input placeholder="Fee Sturcture" name="btech" value={btech} onChange={handleChange}/>
                 {error && btech === "" ? <span className="error">Please Enter Vaild Input</span> : ""}
                </Col>
            </Row>
        </CardBody>
        <Row sm={6} className="buttonClass">
            <Button className={!isView ? "editbtn" : "createbtn"} onClick={handleSubmit}>{!isView ? "Edit" : "Create"}</Button>
            <Button color="secondary" onClick={()=>{setIsCreate(true); setIsView(true); setCollegeObj({
                clgName : "",
                clgId : "",
                city : "",
                btech : ""
            })}}>Cancel</Button>
        </Row>
    </Card>

)
}
        
    </>
    )
}

export default HookUseState;