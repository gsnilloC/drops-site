import React from "react";
import placeholderImage from "../assets/images/sample_.imessage.png";

const SmsInstructions = () => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "2200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2>SMS Instructions</h2>
      <p>
        Here are the instructions on how to use the SMS feature... You can opt
        out at any time using the 'STOP' keyword.
      </p>
      <p>
        To track a sneaker, text <strong>"Track : 'id'"</strong> to the number
        provided.
      </p>
      <p>
        Whenever there is a price drop, you will receive a new message alerting
        you.
      </p>
      <p>
        To stop receiving alerts, simply text the keyword{" "}
        <strong>'STOP'</strong>.
      </p>
      <img
        src={placeholderImage}
        alt="SMS Instructions"
        style={{ width: "100%", marginTop: "20px", borderRadius: "8px" }}
      />
    </div>
  );
};

export default SmsInstructions;
