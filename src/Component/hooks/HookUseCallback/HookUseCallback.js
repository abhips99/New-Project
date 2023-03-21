import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import ButtonS from './Button';
import Count from './Count';
import HookUseRef from './HookUseRef';
import Title from './Title';

const HookUseCallback = () => {

    const [age, setAge] = useState(1);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback (() => {
        setAge (age + 1 );
    },[age]);

    const incrementSalary = useCallback (() => {
        setSalary (salary + 10000);
    },[salary]);

    const isEligible = useMemo (() =>{
        let i = 0;
        while(i < 2000) i++;
        return age >= 18;
    }, [age]);


  return (
    <div className="container">
        <div className="formReducer">
            <Title>Age and Salary</Title>
            <Count>{age}</Count>
            {isEligible ? <span>Your are Eligible for Vote</span> : ""}
            <ButtonS onClick={incrementAge}>Increment Age</ButtonS>
            <Count>{salary}</Count>
            <ButtonS onClick={incrementSalary}>Increment Salary</ButtonS>
            <HookUseRef />
        </div>
        <Link className="backHome" to="/">Back to Home page</Link>
    </div>
  )
}

export default HookUseCallback