import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const EmailInstructions = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted email:", email);

    setEmail("");
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "3000px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2>Email Instructions</h2>
      <p>
        Here are the instructions on how to use the SMS feature... You can opt
        out at any time using the 'STOP' keyword.
      </p>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1600px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "50%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
              width: "100%",
            }}
          >
            <TextField
              label="Enter your email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#d3d3d3",
                  },
                  "&:hover fieldset": {
                    borderColor: "#a5a5a5",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3f51b5",
                  },
                },
                flex: 1,
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                height: "56px",
                minWidth: "120px",
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default EmailInstructions;
