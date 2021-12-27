import { useState } from "react";

export type Tuple<T> = [T, T];

export function useTuples<T>(initialValues: Tuple<T>) {
   const [values, setValues] = useState<Tuple<T>>(initialValues);

   const setFirstValue = (value: T) => {
      return setValues(([_, prevValue]) => {
         return [value, prevValue];
      });
   };

   const setSecondValue = (value: T) => {
      return setValues(([prevValue, _]) => {
         return [prevValue, value];
      });
   };

   return { values, setFirstValue, setSecondValue };
}
