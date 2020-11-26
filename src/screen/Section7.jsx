import React, { useEffect, useState } from "react";
import {
  FormControl,
  IconButton,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import "./Screen.css";
import { Add } from "@material-ui/icons";
import * as firebase from "firebase";
import { toast } from "react-toastify";
const Section7 = (props) => {
  const [state, setState] = useState({
    profile_photo: null,
    cover_photo: null,
    add_general_images: null,
    additional_categories: "",
    call_tracking_phone_number: "",
    UTM_tracking_website_URL: "",
    attributes: "",
    appointment_URL: "",
    google_maps_pin: "",
  });

  const [auth, setAuth] = useState();

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

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

  return (
    <div
      style={{
        flex: 1,
        margin: 25,
        padding: 25,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Typography style={{ fontWeight: "bold" }}>
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
        className="S7"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div
          className="section7"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Typography style={{ fontWeight: "bold" }}>
            Additional Categories
          </Typography>
          <TextField
            id="outlined-basic"
            variant="filled"
            size="small"
            placeholder="Internet marketing and advertising, advertising agencies & consulting, advertising services"
            value={state.additional_categories}
            onChange={handleChange}
            inputProps={{
              name: "additional_categories",
              id: "outlined-additional_categories-native-simple",
            }}
          />
          <Typography style={{ fontWeight: "bold" }}>Attributes</Typography>
          <Typography style={{ color: "#757575" }}>
            Your business category and region determine the attributes available
            for your location. Only available attributes for location on Google
            are selectable. Additionally, subjective attributes may appear on
            your listing, but these relay on the opinions of Google customers
            who’ve visited your business and are not configurable
          </Typography>
          <Typography style={{ color: "red" }}>
            Attributes can only be retrieved with a valid Google credential for
            a location. Please add a Google account to the “External Logins”
            page (under My Account) for this location to enable attributes
          </Typography>
          <Typography style={{ fontWeight: "bold" }}>Select</Typography>
          <FormControl variant="outlined" style={{ width: 300, height: 30 }}>
            <Select
              native
              style={{ height: 30 }}
              value={state.attributes}
              onChange={handleChange}
              inputProps={{
                name: "attributes",
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
          <Typography style={{ fontWeight: "bold" }}>
            Call Tracking Phone Number
          </Typography>
          <TextField
            variant="filled"
            size="small"
            placeholder="Tracking Phone Number"
            value={state.call_tracking_phone_number}
            onChange={handleChange}
            inputProps={{
              name: "call_tracking_phone_number",
              id: "outlined-call_tracking_phone_number-native-simple",
            }}
          />
          <Typography style={{ fontWeight: "bold" }}>
            UTM/Tracking Website URL
          </Typography>
          <TextField
            variant="filled"
            size="small"
            placeholder="Tracking URL"
            value={state.UTM_tracking_website_URL}
            onChange={handleChange}
            inputProps={{
              name: "UTM_tracking_website_URL",
              id: "outlined-Primary-Website-native-simple",
            }}
          />
          <Typography style={{ fontWeight: "bold" }}>
            Appointment URL
          </Typography>
          <TextField
            variant="filled"
            size="small"
            placeholder="Appointment URL"
            value={state.appointment_URL}
            onChange={handleChange}
            inputProps={{
              name: "appointment_URL",
              id: "outlined-Primary-Website-native-simple",
            }}
          />
          <Typography style={{ fontWeight: "bold" }}>
            Google Maps Pin (Link)
          </Typography>
          <TextField
            variant="filled"
            size="small"
            placeholder="Google Maps Pin (Link)"
            value={state.google_maps_pin}
            onChange={handleChange}
            inputProps={{
              name: "google_maps_pin",
              id: "outlined-Primary-Website-native-simple",
            }}
          />
          <Typography style={{ color: "#757575" }}>
            Google automatically places a location’s pin based on its address.
            If you’ve manually moved this pin away from Google’s default,
            selecting this option will omit address info from being indexed. and
            passed to Google that would reset the pin to its original spot.
          </Typography>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            alignSelf: "center",
            width: 300,
          }}
        >
          <div style={{ width: "inherit" }}>
            <Typography style={{ fontWeight: "bold" }}>
              Profile Photo
              <span
                style={{
                  color: "#ff1744",
                  marginRight: 30,
                }}
              >
                *
              </span>
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "#9e9e9e",
                borderStyle: "solid",
              }}
            >
              <div style={{ margin: 20, width: "93%", flexDirection: "row" }}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="icon-button-file"
                  type="file"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      getBase64(e.target.files[0], (result) => {
                        setState({ ...state, profile_photo: result });
                      });
                    }
                  }}
                />
                <label
                  htmlFor="icon-button-file"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {state.profile_photo === null ? (
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
                          borderWidth: 2,
                          borderColor: "#000",
                          borderStyle: "solid",
                        }}
                      />
                    </IconButton>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setState({ ...state, profile_photo: null });
                      }}
                    >
                      <img
                        src={state.profile_photo}
                        alt="next"
                        style={{ width: 180, height: 150 }}
                      />
                      <Typography
                        variant="caption"
                        style={{
                          color: "#2196f3",
                          cursor: "pointer",
                          fontSize: 18,
                          textDecoration: "underline",
                        }}
                      >
                        Remove
                      </Typography>
                    </div>
                  )}
                </label>
              </div>
            </div>
            <Typography style={{ fontWeight: "bold" }}>Cover Photo</Typography>,
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "#9e9e9e",
                borderStyle: "solid",
              }}
            >
              <div style={{ margin: 20, width: "93%", flexDirection: "row" }}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="icon-button-file2"
                  type="file"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      getBase64(e.target.files[0], (result) => {
                        setState({ ...state, cover_photo: result });
                      });
                    }
                  }}
                />
                <label
                  htmlFor="icon-button-file2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {state.cover_photo === null ? (
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
                          borderWidth: 2,
                          borderColor: "#000",
                          borderStyle: "solid",
                        }}
                      />
                    </IconButton>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setState({ ...state, cover_photo: null });
                      }}
                    >
                      <img
                        src={state.cover_photo}
                        alt="Cover_Photo"
                        style={{ width: 180, height: 150 }}
                      />
                      <Typography
                        variant="caption"
                        style={{
                          color: "#2196f3",
                          cursor: "pointer",
                          fontSize: 18,
                          textDecoration: "underline",
                        }}
                      >
                        Remove
                      </Typography>
                    </div>
                  )}
                </label>
              </div>
            </div>
            <Typography style={{ fontWeight: "bold" }}>
              Add General Images
            </Typography>
            ,
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "#9e9e9e",
                borderStyle: "solid",
              }}
            >
              <div style={{ margin: 20, width: "93%", flexDirection: "row" }}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="icon-button-file3"
                  type="file"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      getBase64(e.target.files[0], (result) => {
                        setState({ ...state, add_general_images: result });
                      });
                    }
                  }}
                />
                <label
                  htmlFor="icon-button-file3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {state.add_general_images === null ? (
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
                          borderWidth: 2,
                          borderColor: "#000",
                          borderStyle: "solid",
                        }}
                      />
                    </IconButton>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setState({ ...state, add_general_images: null });
                      }}
                    >
                      <img
                        src={state.add_general_images}
                        alt="next"
                        style={{ width: 180, height: 150 }}
                      />
                      <Typography
                        variant="caption"
                        style={{
                          color: "#2196f3",
                          cursor: "pointer",
                          fontSize: 18,
                          textDecoration: "underline",
                        }}
                      >
                        Remove
                      </Typography>
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>
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
            props.history.push("/keywords");
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
            if (state.profile_photo !== null) {
              firebase.default
                .firestore()
                .collection(auth.uid)
                .doc("section7")
                .set(state)
                .then((res) => {
                  toast.success("Section added");
                  props.history.push("/daily");
                });
            } else {
              toast.error("Profile Pic not found");
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

export default Section7;
