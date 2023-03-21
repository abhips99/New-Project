import "./styles/styles.css"
// import ComponentA from "./Component/props/ComponentA";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./router/routing";

function App () {
  // let insName = "piller";

  // let text =""; 
  
  // const dt = new Date();

  // console.log(dt.getHours(), dt.getMinutes());

  // if (dt.getHours() < 12) {
  //     text = "Good Morning";
  // } else if (dt.getHours() >= 12 && dt.getHours() < 16 ) {
  //     text = "Good AfterNoon";
  // } else if (dt.getHours() >= 16 ) {
  //     text = "Good Evening";
  // }

return (
  <>
    {/* <p className="helloHeading">Hello {text}</p> */}
    <Routing />
  </>  
);
}

// const AppOne =() =>{
//   return (
//     <h1>AppOne</h1>
//   );
// }

export default App;
// export {AppOne};