/* eslint-disable prettier/prettier */
import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantRequest, restaurantTransform } from "./restaurant.services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
