import { createTransform } from "redux-persist";
import configSlice from "./config/config.slice";

const SetTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState: any, key) => {
    console.log(inboundState);
    // convert mySet to an Array.
    return { ...inboundState, mySet: [...inboundState.mySet] };
  },
  // transform state being rehydrated
  (outboundState: any, key) => {
    // convert mySet back to a Set.
    return { ...outboundState, mySet: new Set(outboundState.mySet) };
  },
  // define which reducers this transform gets called for.
  { whitelist: [configSlice.name] }
);

export default SetTransform;
