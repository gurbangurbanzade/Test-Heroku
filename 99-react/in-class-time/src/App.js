import "./App.css";
import Routx from "./16-Day-Context-Api/Routx";
import { ContextDataProvider } from "./16-Day-Context-Api/ContextData";

function App() {
  return (
    <>
      <ContextDataProvider>
        <Routx />
      </ContextDataProvider>
    </>
  );
}

export default App;
//----------------------------------------------------------------
//                           Context
//----------------------------------------------------------------
// import "./App.css";
// import Routx from "./Context/Routx";
// import { ContextDataProvider } from "./Context/ContextData";

// function App() {
//   return (
//     <>
//       <ContextDataProvider>
//         <Routx />
//       </ContextDataProvider>
//     </>
//   );
// }

// export default App;
//----------------------------------------------------------------
//                           END Context
//----------------------------------------------------------------
