import React from "react";
import { isDesktop } from "react-device-detect";

export const AppContext = React.createContext({ isDesktop: isDesktop });
