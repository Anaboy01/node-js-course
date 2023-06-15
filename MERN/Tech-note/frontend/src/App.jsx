import { Routes, Route } from "react-router-dom"
import { Layout, Public, DashLayout } from "./components"
import { Welcome, Login, NoteList, UserList, NewUserForm, EditUser,NewNote, EditNote } from "./features"
import Prefetch from "./features/auth/Prefetch"
import PersistLogin from "./features/auth/PersistLogin"
import RequireAuth from "./features/auth/RequireAuth"

import { ROLES } from "./config/roles" 


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Public/>}/>
            <Route path="login" element={<Login/>}/>

            <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]}/>}>
              <Route element={<Prefetch/>}>
                <Route element={<PersistLogin/>}>
                  <Route path="/dash/" element={<DashLayout/>}>
                    <Route index element={<Welcome/>}/>
                      <Route path = "users">
                        <Route index element={<UserList/>}/>
                        <Route path=":id" element={<EditUser/>}/>
                        <Route path="new" element={<NewUserForm/>}/>
                      </Route>
                    <Route path="notes">
                      <Route index element={<NoteList/>}/>
                      <Route path=":id" element={<EditNote/>}/>
                      <Route path="new" element={<NewNote/>}/>
                    </Route>
          
                </Route>
              </Route>
            </Route>
          </Route>
     
        </Route>
    </Routes>
  )
}

export default App

// import { Route, Routes } from "react-router-dom";
// import { DashLayout, Layout, Public } from "./components/index";
// import {
//   Login,
//   Welcome,
//   NoteList,
//   UsersList,
//   EditUser,
//   NewUserForm,
//   EditNote,
//   NewNote,
//   PersistLogin,
//   Prefetch
// } from "./features/index";


// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Public />} />
//         <Route path="login" element={<Login />} />
//         {/* Protected Routes */}

//         <Route element={<PersistLogin />}>
//           <Route element={<Prefetch />}>
//             <Route path="/dash/" element={<DashLayout />}>
//               <Route index element={<Welcome />} />
//               <Route path="users">
//                 <Route index element={<UsersList />} />
//                 <Route path=":id" element={<EditUser />} />
//                 <Route path="new" element={<NewUserForm />} />
//               </Route>
//               <Route path="notes">
//                 <Route index element={<NotesList />} />
//                 <Route path=":id" element={<EditNote />} />
//                 <Route path="new" element={<NewNote />} />
//               </Route>
//             </Route>
//           </Route>
//         </Route>
//       </Route>
//     </Routes>
//   );
// };

// export default App;
