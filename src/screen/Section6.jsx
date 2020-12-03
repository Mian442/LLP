import { IconButton, TextField, Typography } from "@material-ui/core";
import "./Screen.css";
import React, { useEffect, useState } from "react";
import { Add, Delete } from "@material-ui/icons";
import * as firebase from "firebase";
import { toast } from "react-toastify";
import { GET_SECTION, SET_SECTION } from "../Actions/Actions";
import * as Actionlist from "../Actions/ActionsList";
const Section6 = (props) => {
  const [state, setState] = useState();
  const [total, setTotal] = useState([]);
  const [total2, setTotal2] = useState([]);
  const handleChange = (event) => {
    const [name, field] = event.target.name.split(".");
    console.log(name, field);
    let val = { ...state };
    val[name][field] = event.target.value;
    setState(val);
  };

  const [auth, setAuth] = useState();
  useEffect(() => {
    firebase.default.auth().onAuthStateChanged((user) => {
      if (!user) {
        props.history.push("/");
      } else {
        setAuth(user);
      }
    });
    if (GET_SECTION(Actionlist.SECTION_6) !== null) {
      setState(GET_SECTION(Actionlist.SECTION_6));
      let l = Object.keys(GET_SECTION(Actionlist.SECTION_6)).length;
      if (l > 9) {
        let a = GET_SECTION(Actionlist.SECTION_6);
        let b = [];
        let c = [];
        let d = 0;
        for (var obj in a) {
          if (d < 10) {
            b.push(obj);
          } else {
            c.push(obj);
          }
          d = d + 1;
        }
        setTotal(b);
        setTotal2(c);
      } else {
        let a = GET_SECTION(Actionlist.SECTION_6);
        let b = [];
        for (var obj2 in a) {
          b.push(obj2);
        }
        setTotal(b);
      }
    }
  }, [props]);
  return (
    <div
      style={{
        flex: 1,
        margin: 25,
        padding: 25,
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ flexGrow: 1 }}>
          <div
            style={{
              borderColor: "#000",
              borderWidth: 1,
              borderStyle: "solid",
              background: "#ffab00",
              borderRadius: 7,
              padding: 10,
              cursor: "pointer",
              width: 200,
              color: "#fff",
            }}
          >
            <Typography align="center" style={{ width: "100%" }}>
              Section 6
            </Typography>
          </div>
        </div>
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
      <div style={{ marginTop: 20 }}>
        <Typography style={{ fontWeight: "bold" }}>
          Additional Keyword Tracking
        </Typography>
        <Typography style={{ color: "#A8A6B4" }}>
          Your location’s rankings will be monitored when people search for
          these terms or phrases
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
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
            {total.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
                key={index}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  {index + 1}
                </Typography>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  onClick={() => {
                    setTotal(total.filter((val, i) => i !== index));
                  }}
                >
                  <Delete
                    style={{
                      color: "#ff9100",
                      fontSize: 38,
                    }}
                  />
                </IconButton>
                <TextField
                  style={{ marginRight: 7 }}
                  variant="filled"
                  size="small"
                  value={state[`keywords${index}`].in1}
                  onChange={handleChange}
                  inputProps={{
                    name: "keywords" + index + ".in1",
                    id: "outlined-Primary-" + index + "-native-simple-1",
                  }}
                />
                <TextField
                  variant="filled"
                  size="small"
                  value={state?.[`keywords${index}`]?.in2}
                  onChange={handleChange}
                  inputProps={{
                    name: "keywords" + index + ".in2",
                    id:
                      "outlined-Primary-Category" + index + "-native-simple-2",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <div>
            {total2.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                key={index}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  {index + total.length + 1}
                </Typography>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  onClick={() => {
                    setTotal2(total2.filter((val, i) => i !== index));
                  }}
                >
                  <Delete
                    style={{
                      color: "#ff9100",
                      fontSize: 38,
                    }}
                  />
                </IconButton>
                <TextField
                  style={{ marginRight: 7 }}
                  variant="filled"
                  size="small"
                  value={state?.[`keywords${index + total.length}`]?.in1}
                  onChange={handleChange}
                  inputProps={{
                    name: `keywords${index + total.length}.in1`,
                    id:
                      "outlined-Primary-Category" +
                      index +
                      total2.length +
                      "-native-simple",
                  }}
                />
                <TextField
                  variant="filled"
                  size="small"
                  value={state?.[`keywords${index + total.length}`]?.in2}
                  onChange={handleChange}
                  inputProps={{
                    name: `keywords${index + total.length}.in2`,
                    id:
                      "outlined-Primary-Category" +
                      index +
                      total2.length +
                      "-native-simple2",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        onClick={() => {
          let K = total.length;
          let k2 = total2.length;
          if (K + k2 < 20) {
            K < 10
              ? setState({
                  ...state,
                  [`keywords${K}`]: { in1: "", in2: "" },
                })
              : setState({
                  ...state,
                  [`keywords${K + k2}`]: { in1: "", in2: "" },
                });
            K <= 9
              ? setTotal([...total, K + 1])
              : setTotal2([...total2, k2 + 1]);
            console.log(total, total2);
          }
        }}
      >
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <Add
            style={{
              backgroundColor: "#ff9100",
              color: "#fff",
              borderRadius: 25,
            }}
          />
        </IconButton>
        <Typography variant="h6" style={{ color: "#2979ff" }}>
          Up to 20 Keywords
        </Typography>
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
            SET_SECTION(Actionlist.SECTION_6, state);
            props.history.push("/cover");
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
            if (total.length > 0 && total.length + total2.length < 20) {
              firebase.default
                .firestore()
                .collection(auth.uid)
                .doc("section6")
                .set(state)
                .then((res) => {
                  toast.success(
                    SET_SECTION(Actionlist.SECTION_6, state) +
                      " Adding Section 6"
                  );
                  props.history.push("/additional");
                });
            } else {
              toast.error("Keywords are required!");
            }
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

export default Section6;
