import React from "react";

const GlitchText = () => {
  return (
    <div className="glitch-wrapper mt-28">
      <div className="glitch" data-glitch="Open to Work!">
        Open to Work!
      </div>
      <style jsx="true">{`
        .glitch-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .glitch {
          position: relative;
          font-size: 50px;
          font-weight: 700;
          line-height: 1.2;
          z-index: 1;
        }

        .glitch:before,
        .glitch:after {
          display: block;
          content: attr(data-glitch);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
        }

        .glitch:before {
          animation: glitch-color 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
            infinite;
          color: #0ff;
          z-index: -1;
        }

        .glitch:after {
          animation: glitch-color 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            reverse both infinite;
          color: #ffff00;
          z-index: -2;
        }

        @keyframes glitch-color {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(-3px, -3px);
          }
          60% {
            transform: translate(3px, 3px);
          }
          80% {
            transform: translate(3px, -3px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
};

export default GlitchText;
