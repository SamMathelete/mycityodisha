import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./GetInTouchForm.module.css";
import SendIcon from "@mui/icons-material/Send";
import { setDoc, doc, collection, Timestamp } from "@firebase/firestore";
import { db } from "../../firestoreConfig";
import { useRef } from "react";

const GetInTouchForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const message = messageRef.current?.value;
    const id = `${firstName}-${lastName}-${Timestamp.now()
      .toDate()
      .toISOString()}`;
    const data = {
      id,
      firstName,
      lastName,
      email,
      phone,
      message,
    };
    setDoc(doc(db, "responses", id), data).then(() => {
      alert("Message sent successfully!");
    });
  };
  return (
    <div id="GetIntoTouch" className={styles.container}>
      <div className={styles.heading}>Get In Touch with Us</div>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              variant="outlined"
              inputRef={firstNameRef}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              variant="outlined"
              inputRef={lastNameRef}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              inputRef={emailRef}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone"
              variant="outlined"
              inputRef={phoneRef}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="message"
              name="message"
              label="Message"
              variant="outlined"
              inputRef={messageRef}
              multiline
              rows={8}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <div className={styles.action}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                sx={{ height: "3rem", width: "10rem" }}
                onClick={submitHandler}
              >
                Send
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default GetInTouchForm;
