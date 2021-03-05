import { createStore } from "redux";
import dataReducer from "./reducer/dataReducer";

export default createStore(dataReducer);