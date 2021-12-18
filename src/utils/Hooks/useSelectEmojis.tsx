import React, { useState } from "react";

type Tuple<T> = [T, T];

interface useTuplesProps<T> {
   initialValues: [T, T];
}

export function useTuples<T>({ initialValues }: useTuplesProps<T>) {
   const [values, setValues] = useState<Tuple<T>>(initialValues);

   const setFirstValue = (value: T) => {
      return setValues(([prevEmoji, _]) => {
         return [value, values[1]];
      });
   };

   const setSecondValue = (value: T) => {
      return setValues(([_, prevEmoji]) => {
         return [values[0], value];
      });
   };

   return { values, setFirstValue, setSecondValue };
}
