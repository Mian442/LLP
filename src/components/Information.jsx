import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import { toast } from "react-toastify";
const Information = (props) => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    firebase.default.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      }
    });
  }, []);
  return (
    <div>
      {auth && (
        <Button
          variant="contained"
          color="primary"
          style={{ alignSelf: "flex-end", margin: 10 }}
          onClick={() => {
            firebase.default
              .auth()
              .signOut()
              .then(() => {
                toast.info("You have been logged out!");
              });
          }}
        >
          Out
        </Button>
      )}
      <div
        style={{
          backgroundColor: "#ffecb3",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: 25,
        }}
      >
        <div
          style={{
            borderColor: "#3d5afe",
            borderWidth: 1,
            borderStyle: "solid",
            background: "#bbdefb",
            borderRadius: 7,
            padding: 10,
          }}
        >
          <Typography align="center" style={{ width: "100%" }}>
            Welcome to Our Listings Self Serve Station
          </Typography>
        </div>
        <Typography align="center" style={{ color: "#757575", fontSize: 14 }}>
          Just follow the Steps to input your company information and submit
        </Typography>
        <Typography align="center" style={{ color: "#757575", fontSize: 12 }}>
          your purchase You will receive a confirmation email once completed
        </Typography>
      </div>
    </div>
  );
};

export default Information;
