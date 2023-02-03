import "./styles/styles.css"
// import ComponentA from "./Component/props/ComponentA";
// import HookUseState from "./Component/hooks/HookUseState";
import "bootstrap/dist/css/bootstrap.min.css";
import Calculator from "./Component/calculator/caladd";

function App () {
  // let insName = "piller";

  let text =""; 
  
  const dt = new Date();

  // console.log(dt.getHours(), dt.getMinutes());

  if (dt.getHours() < 12) {
      text = "Good Morning";
  } else if (dt.getHours() >= 12 && dt.getHours() < 16 ) {
      text = "Good AfterNoon";
  } else if (dt.getHours() >= 16 ) {
      text = "Good Evening";
  }

return (
  <>
  {/* <h2 className="heading">App {insName}</h2>
  <p>{text}</p> */}
  <p>Hello {text}</p>
  {/* <HookUseState /> */}
  <Calculator />
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