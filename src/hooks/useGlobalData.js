import { createContext, useContext, useState } from "react";

//빈 전역 데이터 객체 생성
export const GlobalContext = createContext();

//전역객체 생성후 특정 state값들을 내부로 전달해주는 wrapping 컴포넌트 생성
export function GlobalProvider({ children }) {
  const [FlickrType, setFlickrType] = useState({
    type: "user",
    id: "197119297@N02",
    isProfile: false,
  });

  const [Modal, setModal] = useState(false);

  return (
    <GlobalContext.Provider value={{ FlickrType, setFlickrType, Modal,setModal }}>
      {children}
    </GlobalContext.Provider>
  );
}

//useContext로 반환한 전체 전역데이터를 내보는 커스텀훅 생성후 export
export function useGlobalData() {
  const globalData = useContext(GlobalContext);
  return globalData;
}
