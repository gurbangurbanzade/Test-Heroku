import "./App.css";
import { ContextDataProvider } from "./16-Day-Context-Api/ContextData";
import Slider from "./17-Day-Slider/Slider";

function App() {
  return (
    <>
      <ContextDataProvider>
        <Slider />
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
