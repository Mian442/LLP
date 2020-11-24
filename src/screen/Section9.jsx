import { TextField, Typography } from "@material-ui/core";
import "./Screen.css";
import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import { toast } from "react-toastify";
const Credentials = (props) => {
  const [state, setState] = React.useState({
    FEAddress: "",
    GEAddress: "",
    FPassword: "",
    GPassword: "",
  });
  const [auth, setAuth] = useState();
  useEffect(() => {
    firebase.default.auth().onAuthStateChanged((user) => {
      if (!user) {
        props.history.push("/");
      } else {
        setAuth(user);
      }
    });
  });

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(name);
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const form = [
    {
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="Email Address"
          value={state.FEAddress}
          onChange={handleChange}
          inputProps={{
            name: "FEAddress",
            id: "outlined-FEmail Address-native-simple",
          }}
        />
      ),
    },
    {
      component: (
        <TextField
          variant="filled"
          size="small"
          type="password"
          placeholder="Password"
          value={state.FPassword}
          onChange={handleChange}
          inputProps={{
            name: "FPassword",
            id: "outlined-FPassword-native-simple",
          }}
        />
      ),
    },
  ];

  const user = [
    {
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="Email Address"
          value={state.GEAddress}
          onChange={handleChange}
          inputProps={{
            name: "GEAddress",
            id: "outlined-GEmail Address-native-simple",
          }}
        />
      ),
    },
    {
      component: (
        <TextField
          variant="filled"
          size="small"
          type="password"
          placeholder="Password"
          value={state.GPassword}
          onChange={handleChange}
          inputProps={{
            name: "GPassword",
            id: "outlined-GPassword-native-simple",
          }}
        />
      ),
    },
  ];
  return (
    <div
      style={{
        flex: 1,
        margin: 35,
        padding: 25,
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography>
          <span
            style={{
              color: "#ff1744",
              marginRight: 30,
            }}
          >
            *
          </span>
          Required Field
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div>
            <Typography align="center" style={{ width: "100%", margin: 10 }}>
              Personal Facebook Login Credentials
            </Typography>
            <div>
              {form.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 20,
                  }}
                >
                  {item.component}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div>
            <Typography align="center" style={{ width: "100%", margin: 10 }}>
              Google My Business Login Credentials
            </Typography>
            <div>
              {user.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 20,
                  }}
                >
                  {item.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
        onClick={() => {
          firebase.default
            .firestore()
            .collection(auth.uid)
            .doc("section9")
            .set(state)
            .then((res) => {
              toast.success("User added");
              props.history.push("/menu");
            });
        }}
      >
        <img
          src="/right-arrow.png"
          alt="next"
          style={{ width: 75, height: 45 }}
        />
      </div>
    </div>
  );
};

export default Credentials;
