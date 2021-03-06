import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import * as firebase from "firebase";
import { toast } from "react-toastify";

const SignUp = (props) => {
  const [state, setState] = React.useState({
    Username: "",
    Password: "",
    CPassword: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: 50,
      }}
    >
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 50,
          flexDirection: "column",
        }}
      >
        <CardActionArea>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <div>
                <Typography
                  align="center"
                  style={{ width: "100%", margin: 10, fontWeight: "bold" }}
                >
                  Username & Password Information
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
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ alignSelf: "flex-end" }}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              props.history.push("/");
            }}
          >
            Login
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              console.log(state);
              firebase.default
                .auth()
                .createUserWithEmailAndPassword(state.Username, state.Password)
                .then((u) => {
                  toast.success("Account is created successfully!");
                  props.history.push("/");
                })
                .catch((err) => toast.error(err.message));
            }}
          >
            Sign Up
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SignUp;
