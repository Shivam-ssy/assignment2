"use client";
import React from "react";
import {
 RiUserFill,
 RiMailFill
} from "@remixicon/react";
const Modals = ({
  details,
  onClose,
  
}) => {

const date = new Date(details?.createdAt);
const options = { month: 'short', day: '2-digit', year: 'numeric' };
const formattedDateString = date.toLocaleDateString('en-US', options);

  console.log("modal us ");
  return (
    <div
      role="dialog"
      tabindex="-1"
      style={{
        position: "fixed",
        top: "4em",
        bottom: 0,
        width: "70%",
        height: "fit-content",
        background: "#0096C8",
        padding: "2em",
        color:"white",
        "border-radius": "10px",
      }}
    >
      <div className="modal-dialog " role="dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{`${details?.profile?.firstName} ${details?.profile?.lastName}`}</h5>
            <button
              type="button"
              className="close bg-transparent border-0"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-md-5 position-relative d-flex flex-column flex-md-row align-items-center gap-5">
            <div className="">
              <img
                src={details?.avatar}
                alt="image not found "
                style={{
                  position: "relative",
                }}
              />
            </div>
            <div className=" d-flex flex-column ">
              <h5 className="d-flex gap-3"><span><RiUserFill color="black"/></span>{`${details?.profile?.firstName} ${details?.profile?.lastName}`}</h5>
              <div className="d-flex gap-3"><span><RiMailFill color="black"/></span>{details?.profile?.email}</div>
              <div className="d-flex  gap-3"><span className="fw-bold text-black">Bio:</span>{details?.Bio}</div>
              <div className="d-flex  gap-3"><span className="fw-bold text-black">Job:</span>{details?.jobTitle}</div>
              <div className="d-flex  gap-3"><span className="fw-bold text-black">Joined:</span>{formattedDateString}</div>
              

            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
