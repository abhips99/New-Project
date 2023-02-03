function ComponentB(props) {
    return (
        <>
        <h2>ComponentB</h2>
        <h3>{props.name}</h3>
        {
            props.arr.map((city, i)=>{
                return (
                        <h4 key={i}>{city}</h4>
                );
            })
        }
        </>
    );
}

export default ComponentB;