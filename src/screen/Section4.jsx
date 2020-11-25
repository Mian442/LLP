import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import "./Screen.css";
import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";
const Section4 = (props) => {
  const [state, setState] = useState({
    primary_category: "",
    primary_website: "",
    alternate_website: "",
    business_name: "",
    country: "",
    street_address: "",
    state: "",
    zip: "",
    suite: "",
    city: "",
    main_phone: "",
    alternate_phone: "",
    business_description: "",
    business_owner: "",
    business_email: "",
    business_fax: "",
    year_established: "",
    payment_type: "",
  });

  const sectionschema = Yup.object({
    primary_category: Yup.string().required(),
    business_name: Yup.string().required(),
    primary_website: Yup.string().required(),
    alternate_website: Yup.string().required(),

    country: Yup.string().required(),
    street_address: Yup.string().required(),
    suite: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zip: Yup.number().required(),
    main_phone: Yup.number().required(),
    alternate_phone: Yup.number().required(),
    business_description: Yup.string().required(),
    business_owner: Yup.string().required(),
    business_email: Yup.string().required().email(),
    business_fax: Yup.string(),
    year_established: Yup.number(),
    payment_type: Yup.string(),
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

  const generate = ["Visa", "Mastercard", "Discover", "Cash", "Amex", "Checl"];

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
      label: (
        <Typography>
          Primary Category (Google)
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
          placeholder="Category"
          value={state.primary_category}
          onChange={handleChange}
          inputProps={{
            name: "primary_category",
            id: "outlined-Primary-Category-native-simple",
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
          value={state.BName}
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
          Primary Website
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
          placeholder="Primary Website"
          value={state.primary_website}
          onChange={handleChange}
          inputProps={{
            name: "primary_website",
            id: "outlined-Primary-Website-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography>
          Alternate Website
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
          placeholder="Alternate Website"
          value={state.alternate_website}
          onChange={handleChange}
          inputProps={{
            name: "alternate_website",
            id: "outlined-alternate_website-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography>
          Country
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
          placeholder="Country"
          value={state.country}
          onChange={handleChange}
          inputProps={{
            name: "country",
            id: "outlined-country-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography>
          Street Address
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
          placeholder="Street Address"
          value={state.street_address}
          onChange={handleChange}
          inputProps={{
            name: "street_address",
            id: "outlined-street_address-native-simple",
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
      label: (
        <Typography>
          City
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
          placeholder="City"
          value={state.city}
          onChange={handleChange}
          inputProps={{
            name: "city",
            id: "outlined-City-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography>
          State
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
          placeholder="State"
          value={state.state}
          onChange={handleChange}
          inputProps={{
            name: "state",
            id: "outlined-State-native-simple",
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
    {
      label: (
        <Typography>
          Main Phone
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
          placeholder="Main Phone"
          value={state.main_phone}
          onChange={handleChange}
          inputProps={{
            name: "main_phone",
            id: "outlined-main_phone-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography>
          Alternate Phone
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
          placeholder="Alternate Phone"
          value={state.alternate_phone}
          onChange={handleChange}
          inputProps={{
            name: "alternate_phone",
            id: "outlined-alternate_phone-native-simple",
          }}
        />
      ),
    },
  ];

  const user = [
    {
      label: (
        <Typography>
          Business Description
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
          placeholder="Business Description"
          value={state.business_description}
          onChange={handleChange}
          inputProps={{
            name: "business_description",
            id: "outlined-business_description-native-simple",
          }}
        />
      ),
    },
    {
      label: (
        <Typography>
          Business Owner
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
          placeholder="Business Owner"
          value={state.business_owner}
          onChange={handleChange}
          inputProps={{
            name: "business_owner",
            id: "outlined-Select-Password-native-simple",
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
            id: "outlined-business_email-native-simple",
          }}
        />
      ),
    },
    {
      label: <Typography>Business Fax</Typography>,
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="Business Fax"
          value={state.business_fax}
          onChange={handleChange}
          inputProps={{
            name: "business_fax",
            id: "outlined-business_email-native-simple",
          }}
        />
      ),
    },
    {
      label: <Typography>Year Established</Typography>,
      component: (
        <TextField
          variant="filled"
          size="small"
          placeholder="Year Established"
          value={state.year_established}
          onChange={handleChange}
          inputProps={{
            name: "year_established",
            id: "outlined-year_established-native-simple",
          }}
        />
      ),
    },
    {
      label: <Typography>Payment Types</Typography>,
      component: (
        <div
          style={{
            borderWidth: 2,
            borderColor: "#000",
            borderStyle: "solid",
            width: "61%",
            cursor: "pointer",
          }}
        >
          <List dense={true}>
            {generate.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => {
                  toast.info(item + " payment selected");
                  setState({
                    ...state,
                    payment_type: item,
                  });
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </div>
      ),
    },
  ];
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
            {form.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 20,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flexGrow: 1 }}>{item.label}</div>
                {item.component}
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
            {user.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 20,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    flexGrow: 1,
                  }}
                >
                  {item.label}
                </div>
                {item.component}
              </div>
            ))}
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
            props.history.push("/categories");
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
            sectionschema
              .validate(state, { abortEarly: false })
              .then((u) => {
                firebase.default
                  .firestore()
                  .collection(auth.uid)
                  .doc("section4")
                  .set(u)
                  .then((res) => {
                    toast.success("Section added");
                    props.history.push("/cover");
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
    </div>
  );
};

export default Section4;
