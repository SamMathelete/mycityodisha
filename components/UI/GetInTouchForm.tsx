import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./GetInTouchForm.module.css";
import SendIcon from "@mui/icons-material/Send";

const GetInTouchForm = () => {
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
