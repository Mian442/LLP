import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Typography,
} from "@material-ui/core";
import "./Screen.css";
import React, { useEffect, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Add, Close, Remove } from "@material-ui/icons";
import * as firebase from "firebase";
import { toast } from "react-toastify";
const Section8 = (props) => {
  const [state, setState] = useState([
    {
      day: "Monday",
      from: new Date(),
      to: new Date(),
      type: "",
    },
    {
      day: "Tuesday",
      from: new Date(),
      to: new Date(),
      type: "",
    },
    {
      day: "Wednesday",
      from: new Date(),
      to: new Date(),
      type: "",
    },
    {
      day: "Thursday",
      from: new Date(),
      to: new Date(),
      type: "",
    },
    {
      day: "Friday",
      from: new Date(),
      to: new Date(),
      type: "",
    },
    {
      day: "Saturday",
      from: new Date(),
      to: new Date(),
      type: "",
    },
    {
      day: "Sunday",
      from: new Date(),
      to: new Date(),
      type: "",
    },
  ]);

  const [tempclose, settempclose] = useState("");
  const [list, setList] = useState([]);

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

  const handleChange = (event, i) => {
    let s = [...state];
    console.log("ll", s);
    s[i].type = event.target.name;
    setState(s);
    console.log(state);
  };
  const handlelistChange = (event, i) => {
    let s = [...list];
    s[i].type = event.target.name;
    setList(s);
  };

  const handlelistChangedate = (date, i) => {
    let s = [...list];
    s[i].type = date;
    setList(s);
  };

  const handleDateChangefrom = (date, i) => {
    let s = [...state];
    s[i].from = date;
    setState(s);
  };
  const handleDateChangeto = (date, i) => {
    let s = [...state];
    s[i].to = date;
    setState(s);
  };
  const handlelistDateChangefrom = (date, i) => {
    let s = [...list];
    s[i].from = date;
    setList(s);
  };
  const handlelistDateChangeto = (date, i) => {
    let s = [...list];
    s[i].to = date;
    setList(s);
  };
  return (
    <div
      className="section8"
      style={{
        flex: 1,
        margin: 25,
        padding: 25,
      }}
    >
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <div style={{}}>
          <Typography>
            Daily
            <span
              style={{
                color: "#ff1744",
                marginRight: 30,
                alignSelf: "center",
              }}
            >
              *
            </span>
          </Typography>
          <Typography>Only Selected Days will be selected.</Typography>
        </div>
      </div>
      {state.map((item, i) => (
        <div
          className="S8"
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Typography style={{ marginTop: 20, padding: 10, flexGrow: 0.05 }}>
            {item.day}
          </Typography>
          <Typography style={{ marginLeft: 10, marginTop: 20, padding: 10 }}>
            from
          </Typography>
          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardTimePicker
                inputVariant="filled"
                margin="normal"
                emptyLabel="--:--"
                id={"time-picker" + i}
                value={item.from}
                onChange={(event) => {
                  handleDateChangefrom(event, i);
                }}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <Add
                  style={{
                    backgroundColor: "#ff1744",
                    color: "#ffff",
                    fontSize: 46,
                  }}
                />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <Remove
                  style={{
                    backgroundColor: "#3d5afe",
                    color: "#ffff",
                    fontSize: 46,
                  }}
                />
              </IconButton>
            </div>
          </div>

          <Typography style={{ marginTop: 20, padding: 10 }}>to</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              margin="normal"
              inputVariant="filled"
              id={"time-picker" + i}
              value={item.to}
              onChange={(event) => {
                handleDateChangeto(event, i);
              }}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>

          <FormControl component="fieldset">
            <FormGroup
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                marginLeft: 10,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state[i].type === "open_24" ? true : false}
                    onChange={(event) => {
                      handleChange(event, i);
                    }}
                    name="open_24"
                  />
                }
                label="Open 24 Hours"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state[i].type === "close" ? true : false}
                    onChange={(event) => {
                      handleChange(event, i);
                    }}
                    name="close"
                  />
                }
                label="Close"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state[i].type === "none" ? true : false}
                    onChange={(event) => {
                      handleChange(event, i);
                    }}
                    name="none"
                  />
                }
                label="None"
              />
            </FormGroup>
          </FormControl>
        </div>
      ))}
      <div>
        <Typography variant="h6">Temporarily Closed</Typography>
        <FormControl component="fieldset">
          <FormGroup
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempclose === "Temporarily Closed" ? true : false}
                  onChange={() => {
                    settempclose("Temporarily Closed");
                  }}
                  name="Temporarily Closed"
                />
              }
              label="Temporarily Closed"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    tempclose === "Reopen temporarily closed location"
                      ? true
                      : false
                  }
                  onChange={() => {
                    settempclose("Reopen temporarily closed location");
                  }}
                  name="Reopen temporarily closed location"
                />
              }
              label="Reopen temporarily closed location"
            />
          </FormGroup>
        </FormControl>
        <Typography variant="h6">Special/Holidays Hours </Typography>
        <Typography variant="body1">
          Only Selected dates will be updated
        </Typography>
        {list.map((item, i) => (
          <div
            className="S8"
            key={i}
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                style={{ padding: 10, marginTop: 5 }}
                autoOk
                label="Date"
                allowKeyboardControl={false}
                clearable
                disableFuture
                value={item.date}
                onChange={(date) => handlelistChangedate(date, i)}
              />
            </MuiPickersUtilsProvider>
            <Typography style={{ marginLeft: 10, marginTop: 20, padding: 10 }}>
              from
            </Typography>
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  inputVariant="filled"
                  margin="normal"
                  emptyLabel="--:--"
                  id={"time-picker" + i}
                  value={item.from}
                  onChange={(event) => {
                    handlelistDateChangefrom(event, i);
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </MuiPickersUtilsProvider>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Add
                    style={{
                      backgroundColor: "#ff1744",
                      color: "#ffff",
                      fontSize: 46,
                    }}
                  />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Remove
                    style={{
                      backgroundColor: "#3d5afe",
                      color: "#ffff",
                      fontSize: 46,
                    }}
                  />
                </IconButton>
              </div>
            </div>

            <Typography style={{ marginTop: 20, padding: 10 }}>to</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardTimePicker
                margin="normal"
                inputVariant="filled"
                id={"time-picker" + i}
                value={item.to}
                onChange={(event) => {
                  handlelistDateChangeto(event, i);
                }}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>

            <FormControl component="fieldset">
              <FormGroup
                style={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                  marginLeft: 10,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={list[i].type === "open_24" ? true : false}
                      onChange={(event) => {
                        handlelistChange(event, i);
                      }}
                      name="open_24"
                    />
                  }
                  label="Open 24 Hours"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={list[i].type === "close" ? true : false}
                      onChange={(event) => {
                        handlelistChange(event, i);
                      }}
                      name="close"
                    />
                  }
                  label="Close"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={list[i].type === "none" ? true : false}
                      onChange={(event) => {
                        handlelistChange(event, i);
                      }}
                      name="none"
                    />
                  }
                  label="None"
                />
              </FormGroup>
            </FormControl>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => setList(list.filter((item, index) => index !== i))}
            >
              <Close
                style={{
                  backgroundColor: "#ff1744",
                  color: "#ffff",
                  fontSize: 46,
                }}
              />
            </IconButton>
          </div>
        ))}
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={() =>
            setList([
              ...list,
              { date: new Date(), from: new Date(), to: new Date(), type: "" },
            ])
          }
        >
          <Add
            style={{
              backgroundColor: "#ff1744",
              color: "#ffff",
              fontSize: 46,
            }}
          />
        </IconButton>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: "rotateZ(180deg)",
          }}
          onClick={() => {
            props.history.push("/additional");
          }}
        >
          <img
            src="/right-arrow.png"
            alt="next"
            style={{ width: 75, height: 45 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
          onClick={() => {
            let data = {
              daily: state,
              temporarily: tempclose,
              special_Holiday: list,
            };
            firebase.default
              .firestore()
              .collection(auth.uid)
              .doc("section8")
              .set(data)
              .then((res) => {
                toast.success("Section added");
                props.history.push("/credentials");
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
    </div>
  );
};

export default Section8;
