import { TextField, Typography } from "@material-ui/core";
import "./Screen.css";
import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

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
    Username: "",
    Password: "",
    CPassword: "",
  });
  const [auth, setAuth] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const sectionschema = Yup.object({
    Username: Yup.string().email().required(),
    Password: Yup.string().min(6).required(),
    CPassword: Yup.string().min(6).required(),
    owner_name: Yup.string().required(),
    business_name: Yup.string().required(),
    business_email: Yup.string().email().required(),
    business_phone: Yup.number().required(),
    business_address: Yup.string(),
    suite: Yup.string(),
    city: Yup.string(),
    zip: Yup.number().required(),
    state: Yup.string(),
  });

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
        <Typography style={{ fontWeight: "bold" }}>
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
        <Typography style={{ fontWeight: "bold" }}>
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
        <Typography style={{ fontWeight: "bold" }}>
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
        <Typography style={{ fontWeight: "bold" }}>
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
        <Typography style={{ fontWeight: "bold" }}>Business Address</Typography>
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
      label: <Typography style={{ fontWeight: "bold" }}>Suite</Typography>,
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
      label: <Typography style={{ fontWeight: "bold" }}>City</Typography>,
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
      label: <Typography style={{ fontWeight: "bold" }}>State</Typography>,
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
      label: <Typography style={{ fontWeight: "bold" }}>Zip</Typography>,
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

  const user = [
    {
      label: (
        <Typography style={{ fontWeight: "bold" }}>
          Username
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
          placeholder="Username"
          value={state.OName}
          onChange={handleChange}
          inputProps={{
            name: "Username",
            id: "outlined-Username-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography style={{ fontWeight: "bold" }}>
          Select Password
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
          value={state.Password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
          inputProps={{
            name: "Password",
            id: "outlined-Select-Password-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography style={{ fontWeight: "bold" }}>
          Confirm Password
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
          value={state.CPassword}
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          inputProps={{
            name: "CPassword",
            id: "outlined-Confirm-Password-native-simple",
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
        <Typography style={{ fontWeight: "bold" }}>
          <span
            style={{
              color: "#ff1744",
              marginRight: 7,
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
            justifyContent: "space-evenly",
            display: "flex",
            width: "100%",
          }}
        >
          <div>
            <Typography
              align="center"
              style={{ width: "100%", margin: 10, fontWeight: "bold" }}
            >
              Password & Information
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
                  <div style={{ flexGrow: 1 }}>{item.label}</div>
                  {item.component}
                </div>
              ))}
            </div>
          </div>
          <div>
            <Typography
              align="left"
              style={{ width: "100%", margin: 10, fontWeight: "bold" }}
            >
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
          sectionschema
            .validate(state, { abortEarly: false })
            .then((u) => {
              firebase.default
                .firestore()
                .collection(auth.uid)
                .doc("section1")
                .set(u)
                .then((res) => {
                  toast.success("Section added");
                  props.history.push("/payment");
                });
            })
            .catch((err) => {
              console.log(err);
              toast.error(err.errors[0]);
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
