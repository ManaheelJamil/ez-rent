// contexts/MyContext.js
import { createContext } from 'react';
interface MyContextProps {
    quickView: boolean;
    setQuickView: () => void;
  }

  const QuickviewContext = createContext<MyContextProps | any>(undefined);
export default QuickviewContext;
