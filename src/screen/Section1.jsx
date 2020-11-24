import {
  Button,
  FormControl,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import "./Screen.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase";
import { toast } from "react-toastify";

const PaymentScreen = (props) => {
  const [state, setState] = React.useState({
    country: "",
    FName: "",
    LName: "",
    BAL1: "",
    BAL2: "",
    State: "",
    zipcode: "",
    email: "",
    mm: "",
    yy: "",
    csc: "",
    city: "",
    ph: "",
    plan: "",
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
      label: "Country",
      component: (
        <FormControl variant="outlined" style={{ width: 300, height: 30 }}>
          <Select
            native
            style={{ height: 30 }}
            value={state.country}
            onChange={handleChange}
            inputProps={{
              name: "country",
              id: "outlined-country-native-simple",
            }}
          >
            <option aria-label="None" value="United State">
              United State
            </option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      ),
    },
    {
      label: "Full Name:",
      component: (
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          value={state.FName}
          onChange={handleChange}
          inputProps={{
            name: "FName",
            id: "outlined-Fname-native-simple",
          }}
        />
      ),
    },
    {
      label: "Last Name:",
      component: (
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          value={state.LName}
          onChange={handleChange}
          inputProps={{
            name: "LName",
            id: "outlined-Lname-native-simple",
          }}
        />
      ),
    },
    {
      label: "Credit Number:",
      component: (
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          value={state.CN}
          onChange={handleChange}
          inputProps={{
            name: "CN",
            id: "outlined-cn-native-simple",
          }}
        />
      ),
    },
    {
      label: "Payment:",
      component: (
        <img
          src="/pay.png"
          style={{ height: 50, width: 305 }}
          alt="Payment Methods"
        />
      ),
    },
    {
      label: "Exportation Date:",
      component: (
        <div
          style={{
            height: 50,
            width: 305,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          className="exp"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            placeholder="mm"
            value={state.mm}
            onChange={handleChange}
            inputProps={{
              name: "mm",
              id: "outlined-mm-native-simple",
            }}
          />
          <Typography variant="subtitle1" style={{ margin: 7 }}>
            /
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            placeholder="yy"
            value={state.yy}
            onChange={handleChange}
            inputProps={{
              name: "yy",
              id: "outlined-yy-native-simple",
            }}
          />
          <Typography variant="subtitle1" style={{ marginLeft: 7 }}>
            CSC:
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            value={state.csc}
            onChange={handleChange}
            inputProps={{
              name: "csc",
              id: "outlined-csc-native-simple",
            }}
          />
          <Link>
            <Typography variant="subtitle2" style={{ paddingLeft: 7 }}>
              What's This?
            </Typography>
          </Link>
        </div>
      ),
    },
    {
      label: "Billing Address Line 1:",
      component: (
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          value={state.BAL1}
          onChange={handleChange}
          inputProps={{
            name: "BAL1",
            id: "outlined-BAL1-native-simple",
          }}
        />
      ),
    },
    {
      label: "Billing Address Line 2 ",
      sub: "(Optional)",
      component: (
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          value={state.BAL2}
          onChange={handleChange}
          inputProps={{
            name: "BAL2",
            id: "outlined-BAL2-native-simple",
          }}
        />
      ),
    },
    {
      label: "City",
      component: (
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
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
      label: "State",
      component: (
        <FormControl variant="outlined" style={{ width: 300, height: 30 }}>
          <Select
            native
            style={{ height: 30, width: 120 }}
            value={state.State}
            onChange={handleChange}
            inputProps={{
              name: "State",
              id: "outlined-state-native-simple",
            }}
          >
            <option aria-label="None" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      ),
    },
    {
      label: "Zip Code",
      component: (
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          value={state.zipcode}
          onChange={handleChange}
          inputProps={{
            name: "zipcode",
            id: "outlined-zipcode-native-simple",
          }}
        />
      ),
    },
    {
      label: "Telephone",
      component: (
        <div style={{ marginTop: 18 }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            value={state.ph}
            onChange={handleChange}
            inputProps={{
              name: "ph",
              id: "outlined-ph-native-simple",
            }}
          />
          <Typography variant="subtitle2" style={{ color: "#bdbdbd" }}>
            5555-5555-1234
          </Typography>
        </div>
      ),
    },
    {
      label: "Email",
      component: (
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          value={state.email}
          onChange={handleChange}
          inputProps={{
            name: "email",
            id: "outlined-mail-native-simple",
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
      <div style={{ marginLeft: 20, marginTop: 30 }}>
        <Typography variant="h6" style={{ color: "#3d5afe" }}>
          Pay with Credit Card or Log In
        </Typography>
        <Typography variant="body1">
          <Link>Learn more</Link> about PayPal - the safer, easier way to pay
        </Typography>
        <Typography variant="caption" style={{ color: "#ffab00" }}>
          Enter Your Billing information
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flexGrow: 2 }}>
          {form.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexGrow: 2,
                margin: 20,
              }}
            >
              <Typography
                style={{
                  color: "#ff1744",
                  marginRight: 30,
                }}
              >
                *
              </Typography>
              <div
                style={{
                  flexGrow: 2,
                }}
              >
                <Typography>{item.label}</Typography>
                {item.sub && (
                  <Typography style={{ color: "#bdbdbd" }}>
                    {item.sub}
                  </Typography>
                )}
              </div>
              {item.component}
            </div>
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: 160,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              style={{ backgroundColor: "#ffab00", color: "#000" }}
              onClick={() => {
                console.log(state);
              }}
            >
              Preview Order and Continue
            </Button>
          </div>
        </div>
        <div
          style={{
            flexGrow: 5,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div>
            <Typography align="center" style={{ width: "100%", margin: 10 }}>
              Select Your Billing Plan
            </Typography>
            <div
              style={{
                borderColor: "#3d5afe",
                borderWidth: 1,
                borderStyle: "solid",
                background: "#bbdefb",
                borderRadius: 7,
                padding: 10,
              }}
              onClick={() => {
                setState({
                  ...state,
                  plan: { amount: 40, type: "Monthly Plan" },
                });
              }}
            >
              <Typography align="center" style={{ width: "100%", height: 20 }}>
                Monthly Recurring Payments = $40/month
              </Typography>
            </div>
            <div
              style={{
                borderColor: "#3d5afe",
                borderWidth: 1,
                borderStyle: "solid",
                background: "#bbdefb",
                borderRadius: 7,
                padding: 10,
                marginTop: 30,
              }}
              onClick={() => {
                setState({
                  ...state,
                  plan: { amount: 400, type: "Year Plan" },
                });
              }}
            >
              <Typography align="center" style={{ width: "100%", height: 20 }}>
                One Time Annual Payment = 400/yr
              </Typography>
            </div>
            <Typography
              align="center"
              style={{ width: "100%", margin: 3, color: "#bdbdbd" }}
            >
              Save $80 per year = Save 2 months FREE
            </Typography>
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
            .doc("section2")
            .set(state)
            .then((res) => {
              toast.success("Section added");
              props.history.push("/categories");
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

export default PaymentScreen;
