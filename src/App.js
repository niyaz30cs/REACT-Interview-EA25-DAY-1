import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import Counter from './Day-6Component/ReduxCompo/Counter';
import MyStore from './Day-6Component/ReduxCompo/Store';
// import Oponent1 from './Day-5Component/HOcCompo/Oponent1';
// import Oponent2 from './Day-5Component/HOcCompo/Oponent2';
// import ClassCompo from './Day-5Component/HOcCompo/ReactLifeCycle/ClassCompo';
// import UseReducerCompo from './Day-4Component/UseCallBackCompo/UseReducerCompo';
// import UseReducer2 from './Day-4Component/UseCallBackCompo/UseReducer2';
// import Counter from './CounterComponent/Counter';
// import ParentCompo from './Day-2Component/PropsComponent/ParentCompo';
// import ParentCounter from './Day-2Component/CounterComponent/ParentCounter';
// import LazyLoading from './Day-2Component/LazyLoadingCompo/LazyLoading';
// import Navbar from './Day-2Component/RoutingCompo/Navbar';
// import StateUp from './Day-3Component/StateUpCompo/StateUp';
// import ApiData from './Day-3Component/AxiosCompo/ApiData';
// import UseStateExample from './Day-3Component/HooksCompo/UseStateExample';
// import UseEffectExample from './Day-3Component/HooksCompo/UseEffectExample';
// import Parent from './Day-4Component/UseCallBackCompo/Parent';
// import UseRefCompo from './Day-4Component/UseCallBackCompo/UseRefCompo';

function App() {
  return (
    <>
      {/* <Counter/> */}
      {/* <ParentCompo/> */}
      {/* <ParentCounter/> */}
      {/* <LazyLoading/> */}
      {/* <Navbar/> */}
      {/* <StateUp/> */}
      {/* <ApiData/> */}
      {/* <UseStateExample/> */}
      {/* <UseEffectExample/> */}
      {/* <Parent/> */}
      {/* <UseRefCompo/> */}
      {/* <UseReducerCompo/> */}
      {/* <UseReducer2/> */}
      {/* <Oponent1/> */}
      {/* <Oponent2/> */}
      {/* <ClassCompo/> */}
      <Provider store={MyStore}>
           <Counter/>
      </Provider>
    </>
  )
}

export default App
