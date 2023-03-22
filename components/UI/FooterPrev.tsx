import React from "react";
import classes from "./FooterPrev.module.css";
import {
  mdiFacebook,
  mdiTwitter,
  mdiInstagram,
  mdiLinkedin,
  mdiChevronRight,
  mdiPhone,
  mdiEmail,
  mdiMapMarker,
} from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";

const FooterPrev = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.quickLinks}>
        <div className={classes.quickLinksTitle}>Quick Links</div>
        <div className={classes.quickLinksList}>
          <div className={classes.quickLinksListItem}>
            <Link href="/">
              <Icon path={mdiChevronRight} size={1} />
              Home
            </Link>
          </div>
          <div className={classes.quickLinksListItem}>
            <Link href="/#about">
              <Icon path={mdiChevronRight} size={1} />
              About
            </Link>
          </div>
          <div className={classes.quickLinksListItem}>
            <Link href="/#GetIntoTouch">
              <Icon path={mdiChevronRight} size={1} />
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.social}>
        <div className={classes.socialTitle}>Social</div>
        <div className={classes.socialList}>
          <div className={classes.socialListItem}>
            <Link href="https://www.facebook.com/mycityodisha">
              <Icon path={mdiFacebook} size={1.5} />
            </Link>
          </div>
          <div className={classes.socialListItem}>
            <Link href="https://twitter.com/mycityodisha">
              <Icon path={mdiTwitter} size={1.5} />
            </Link>
          </div>
          <div className={classes.socialListItem}>
            <Link href="https://www.instagram.com/mycityodisha/">
              <Icon path={mdiInstagram} size={1.5} />
            </Link>
          </div>
          <div className={classes.socialListItem}>
            <Link href="https://www.linkedin.com/company/mycityodisha">
              <Icon path={mdiLinkedin} size={1.5} />
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.contactTitle}>Contact</div>
        <div className={classes.contactList}>
          <div className={classes.contactListItem}>
            <Icon
              path={mdiPhone}
              size={1}
              style={{
                marginRight: "1rem",
              }}
            />
            +91 72056 33644
          </div>
          <div className={classes.contactListItem}>
            <Icon
              path={mdiEmail}
              size={1}
              style={{
                marginRight: "1rem",
              }}
            />
            info@mycityodisha.com
          </div>
          <div className={classes.contactListItem}>
            <Icon
              path={mdiMapMarker}
              size={1.1}
              style={{
                marginRight: "1rem",
              }}
            />
            <div>K8/01, Kalinga Nagar, Near Sum Hospital, Bhubaneswar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPrev;
