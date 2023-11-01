import { configureStore } from "@reduxjs/toolkit";
import counter from "./Slice"

const MyStore = configureStore({
    reducer: {
        number: counter
    }
})
export default MyStore;