import React from "react";

interface PlayButtonProps {
  isRunning: boolean;
  onClick: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ isRunning, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 16 16"
      fill="currentColor"
      onClick={onClick}
      style={{
        cursor: "pointer",
        color: "#4E4037",
      }}
    >
      {isRunning ? (
        // Pause Icon
        <path d="M5.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5z" />
      ) : (
        // Play Icon
        <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
      )}
    </svg>
  );
};

export default PlayButton;
