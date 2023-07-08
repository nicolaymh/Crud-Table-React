import PropTypes from "prop-types";
import { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
   const [formState, setFormState] = useState(
      defaultValue || {
         page: "",
         description: "",
         status: "live",
      }
   );

   const [errors, setErrors] = useState("");

   const validateForm = () => {
      if (formState.page && formState.description && formState.status) {
         setErrors("");
         return true;
      } else {
         let errorsFields = [];
         for (const [key, value] of Object.entries(formState)) {
            if (!value) {
               errorsFields.push(key);
            }
         }
         setErrors(errorsFields.join(", "));
         return false;
      }
   };

   const handleChange = (e) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      onSubmit(formState);

      closeModal();
   };

   return (
      <div
         className="modal-container"
         onClick={(e) => {
            if (e.target.className === "modal-container") closeModal();
         }}
      >
         <div className="modal">
            <form onSubmit={handleSubmit}>
               <div className="form-group">
                  <label htmlFor="page">Page</label>
                  <input name="page" value={formState.page} onChange={handleChange} />
               </div>

               <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                     name="description"
                     value={formState.description}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select name="status" value={formState.status} onChange={handleChange}>
                     <option value="live">Live</option>
                     <option value="draft">Draft</option>
                     <option value="error">Error</option>
                  </select>
               </div>

               {errors && <div className="error">{`Please include: ${errors}`}</div>}

               <button type="submit" className="btn">
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};

Modal.propTypes = {
   closeModal: PropTypes.func.isRequired,
   onSubmit: PropTypes.func.isRequired,
   defaultValue: PropTypes.any.isRequired,
};
