import "./Table.css";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export const Table = () => {
   return (
      <div>
         <table>
            <thead>
               <tr>
                  <th>Page</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Home</td>
                  <td>This is the main page</td>
                  <td>
                     <span>Live</span>
                  </td>
                  <td>
                     <span>
                        <BsFillTrashFill />
                        <BsFillPencilFill />
                     </span>
                  </td>
               </tr>

               <tr>
                  <td>Page 2</td>
                  <td>This is the second page</td>
                  <td>
                     <span>Draft</span>
                  </td>
                  <td>
                     <span>
                        <BsFillTrashFill />
                        <BsFillPencilFill />
                     </span>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
};
