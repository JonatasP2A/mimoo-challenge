import React, { createContext, useState, useContext } from 'react';

interface Props {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CountContext = createContext<Props | null>(null);

export default function CountProvider({ children }: any) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider
      value={{
        count,
        setCount
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { count, setCount } = context;
  return { count, setCount };
}