import "./App.css";
import { ContextDataProvider } from "./16-Day-Context-Api/ContextData";
import AndProject from "./18-Day-AndD/AndProject";

function App() {
  return (
    <>
      <ContextDataProvider>
        <AndProject />
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
