import * as React from "react";
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        borderRadius: "10px",
      }}
      onClick={() => navigate(-1)}
    >
      Back
    </button>
  );
};

export default BackButton;
