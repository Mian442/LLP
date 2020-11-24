import { TextField, Typography } from "@material-ui/core";
import "./Screen.css";
import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import { toast } from "react-toastify";

const PaymentInformation = (props) => {
  const [state, setState] = React.useState({
    owner_name: "",
    business_name: "",
    business_email: "",
    business_address: "",
    state: "",
    zip: "",
    suite: "",
    city: "",
    business_phone: "",
  });
  const [auth, setAuth] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(name);
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  useEffect(() => {
    firebase.default.auth().onAuthStateChanged((user) => {
      if (!user) {
        props.history.push("/");
      } else {
        setAuth(user);
      }
    });
  });
  const form = [
    {
      label: (
        <Typography>
          Owner Name
          <span
            style={{
              color: "#ff1744",
              marginRight: 30,
            }}
          >
            *
          </span>
        </Typography>
      ),
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="Owner Name"
          value={state.owner_name}
          onChange={handleChange}
          inputProps={{
            name: "owner_name",
            id: "outlined-Fname-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography>
          Business Name
          <span
            style={{
              color: "#ff1744",
              marginRight: 30,
            }}
          >
            *
          </span>
        </Typography>
      ),
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="Business Name"
          value={state.business_name}
          onChange={handleChange}
          inputProps={{
            name: "business_name",
            id: "outlined-Business Name-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography>
          Business Email
          <span
            style={{
              color: "#ff1744",
              marginRight: 30,
            }}
          >
            *
          </span>
        </Typography>
      ),
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="Business Email"
          value={state.business_email}
          onChange={handleChange}
          inputProps={{
            name: "business_email",
            id: "outlined-Business-Email-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography>
          Business Phone
          <span
            style={{
              color: "#ff1744",
              marginRight: 30,
            }}
          >
            *
          </span>
        </Typography>
      ),
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="Business Phone"
          value={state.business_phone}
          onChange={handleChange}
          inputProps={{
            name: "business_phone",
            id: "outlined-business_phone-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography>
          Business Address
          <span
            style={{
              color: "#ff1744",
              marginRight: 30,
            }}
          >
            *
          </span>
        </Typography>
      ),
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="Business Address"
          value={state.business_address}
          onChange={handleChange}
          inputProps={{
            name: "business_address",
            id: "outlined-Business-Address-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography>
          Suite
          <span
            style={{
              color: "#ff1744",
              marginRight: 30,
            }}
          >
            *
          </span>
        </Typography>
      ),
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="Suite"
          value={state.suite}
          onChange={handleChange}
          inputProps={{
            name: "suite",
            id: "outlined-Suite-native-simple",
          }}
        />
      ),
    },
    {
      label: <Typography>City</Typography>,
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="City"
          value={state.city}
          onChange={handleChange}
          inputProps={{
            name: "city",
            id: "outlined-city-native-simple",
          }}
        />
      ),
    },
    {
      label: <Typography>State</Typography>,
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="State"
          value={state.state}
          onChange={handleChange}
          inputProps={{
            name: "state",
            id: "outlined-state-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography>
          Zip
          <span
            style={{
              color: "#ff1744",
              marginRight: 30,
            }}
          >
            *
          </span>
        </Typography>
      ),
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="Zip"
          value={state.zip}
          onChange={handleChange}
          inputProps={{
            name: "zip",
            id: "outlined-zip-native-simple",
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
          justifyContent: "space-evenly",
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
              Payment Information
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
                  <div style={{ flexGrow: 1 }}>{item.label}</div>
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
            .doc("section1")
            .set(state)
            .then((res) => {
              toast.success("Section added");
              props.history.push("/payment");
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

export default PaymentInformation;
