// import { createContext, useContext } from "react";

// /* 1️⃣ Create Context */
// const UserContext = createContext();

// export default function App() {
//   const userName = "Sunil";

//   return (
//     /* 2️⃣ Provide Context */
//     <UserContext.Provider value={userName}>
//       <h1>App Component</h1>
//       <ComponentA />
//     </UserContext.Provider>
//   );
// }

// /* 3️⃣ Component A */
// function ComponentA() {
//   return (
//     <div>
//       <h2>Component A</h2>
//       <ComponentB />
//     </div>
//   );
// }

// /* 4️⃣ Component B */
// function ComponentB() {
//   return (
//     <div>
//       <h3>Component B</h3>
//       <ComponentC />
//     </div>
//   );
// }

// /* 5️⃣ Component C (Consume Context) */
// function ComponentC() {
//   const userName = useContext(UserContext);

//   return (
//     <div>
//       <h4>Component C</h4>
//       <p>Hello, {userName} 👋</p>
//     </div>
//   );
// }
function App(){
  return(
    <><h1>Hello</h1></>
  );
}
export default App