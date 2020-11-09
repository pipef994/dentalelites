import React from "react";
import clsx from "clsx";

const faces = [
  {
    svgPoint:
      "1.0136711597442627,1.35626420378685 7.767158031463623,9.155386298894882 21.696229934692383,9.155386298894882 28.449718475341797,1.35626420378685 ",
    name: "face1",
  },
  {
    svgPoint:
      "21.445681169629097,9.104242324829102 21.445681169629097,25.189937591552734 28.19916971027851,32.98905944824219 28.41021592915058,0.8176754713058472 ",
    name: "face2",
  },
  {
    svgPoint:
      "21.445680618286133,25.29296439886093 28.199169158935547,33.092128217220306 0.7631232142448425,33.092128217220306 7.516610622406006,25.29296439886093 ",
    name: "face3",
  },
  {
    svgPoint:
      "0.7631232291460037,1.3051201105117798 0.7631232291460037,33.232784271240234 7.516610696911812,25.189937591552734 7.516610696911812,25.189937591552734 7.516610696911812,9.104242324829102 ",
    name: "face4",
  },
  {
    svgPoint:
      "7.516610696911812,9.104242324829102 21.445681169629097,9.104242324829102 21.445681169629097,25.189937591552734 7.516610696911812,25.189937591552734 ",
    name: "face5",
  },
];
export default function Tooth(props) {
  return (
    <div className={clsx("boxTooth", props.data.css)}>
      <button
        className={clsx(
          "buttonNoStyle",
          props.data.status ? "removeButton" : "addButton"
        )}
        onClick={() => props.toggleTooth(props.data)}
      >
        {props.data.status ? "-" : "+"}
      </button>

      <small style={{ textAlign: "center", display: "block", clear: "both" }}>
        {props.data.id}
      </small>

      <svg
        width="29"
        height="34"
        id={props.data.id}
        className={clsx("tooth", { disabled: !props.data.status })}
      >
        {faces.map((face, i) => {
          const currentStatus = props.statusConfig.find(
            (stat) => stat.name === props.data.faces[i].status
          );
          const { id } = props.data.faces[i];
          return (
            <polygon
              key={id}
              stroke="blue"
              points={face.svgPoint}
              id={id}
              fill={currentStatus.color}
              onClick={() => props.setFace(id, i, props.data)}
              className="face"
            />
          );
        })}
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={clsx("tooth", { disabled: props.data.status })}
      >
        <path
          fill="red"
          d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
        />
      </svg>
    </div>
  );
}
