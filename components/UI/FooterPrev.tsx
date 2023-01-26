import React from "react";
import classes from "./FooterPrev.module.css";

const FooterPrev = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.quickLinks}>
        <div className={classes.quickLinksTitle}>Quick Links</div>
        <div className={classes.quickLinksList}>
          <div className={classes.quickLinksListItem}>Home</div>
          <div className={classes.quickLinksListItem}>About</div>
          <div className={classes.quickLinksListItem}>Services</div>
          <div className={classes.quickLinksListItem}>Gallery</div>
          <div className={classes.quickLinksListItem}>Contact</div>
        </div>
      </div>
      <div className={classes.social}>
        <div className={classes.socialTitle}>Social</div>
        <div className={classes.socialList}>
          <div className={classes.socialListItem}>Facebook</div>
          <div className={classes.socialListItem}>Twitter</div>
          <div className={classes.socialListItem}>Instagram</div>
          <div className={classes.socialListItem}>LinkedIn</div>
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.contactTitle}>Contact</div>
        <div className={classes.contactList}>
          <div className={classes.contactListItem}>Phone: 123-456-7890</div>
          <div className={classes.contactListItem}>Email: abc@xyz.com</div>
          <div className={classes.contactListItem}>Address: 123 Main St.</div>
        </div>
      </div>
    </div>
  );
};

export default FooterPrev;
