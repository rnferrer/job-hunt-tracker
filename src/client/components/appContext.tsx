// import React, { useState } from "react";

// interface AppContextProps {
//   position: string;
//   setPosition: React.Dispatch<React.SetStateAction<string>>;
//   appDate: string;
//   setAppDate: React.Dispatch<React.SetStateAction<string>>;
//   company: string;
//   setCompany: React.Dispatch<React.SetStateAction<string>>;
//   status: string;
//   setStatus: React.Dispatch<React.SetStateAction<string>>;
// }

// export const AppContext = React.createContext<AppContextProps>({
//   position: "",
//   setPosition: () => {},
//   appDate: "",
//   setAppDate: () => {},
//   company: "",
//   setCompany: () => {},
//   status: "",
//   setStatus: () => {},
// });

// export const AppProvider: React.FC = ({ children }) => {
//   const [position, setPosition] = useState<string>("");
//   const [appDate, setAppDate] = useState<string>("");
//   const [company, setCompany] = useState<string>("");
//   const [status, setStatus] = useState<string>("");

//   return (
//     <AppContext.Provider
//       value={{
//         position,
//         setPosition,
//         appDate,
//         setAppDate,
//         company,
//         setCompany,
//         status,
//         setStatus,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };
