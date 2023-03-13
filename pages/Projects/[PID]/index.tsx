import { useRouter } from "next/router";
import Layout from "../../../components/UI/Layout";
import TextImageRight from "../../../components/UI/TextImageRight";
import WallText from "../../../components/UI/WallText";
import Poster from "../../../assets/images/Project_Poster.jpg";
import TextImageLeft from "../../../components/UI/TextImageLeft";
import P1 from "../../../assets/images/Project_1.jpg";
import P2 from "../../../assets/images/Project_2.jpg";
import P3 from "../../../assets/images/Project_3.jpg";
import P4 from "../../../assets/images/Project_4.jpg";
import P5 from "../../../assets/images/Project_5.jpg";
import P6 from "../../../assets/images/Project_6.jpg";
import P7 from "../../../assets/images/Project_7.jpg";
import P8 from "../../../assets/images/Project_8.jpg";
import P9 from "../../../assets/images/Project_9.jpg";
import P10 from "../../../assets/images/Project_11.jpg";
import P11 from "../../../assets/images/Project_12.jpg";
import P12 from "../../../assets/images/Project_12.jpg";
import P13 from "../../../assets/images/Project_13.jpg";
import P14 from "../../../assets/images/Project_14.jpg";
import P15 from "../../../assets/images/Project_15.jpg";
import P16 from "../../../assets/images/Project_16.jpg";
import { Grid } from "@mui/material";
import Image from "next/image";
import ReactPlayer from "react-player";

const ProjectDetails = () => {
  const router = useRouter();
  const { PID } = router.query;

  let Project: string = "";

  switch (PID) {
    case "1":
      Project = "Project Vasudev Vihar";
      break;
    default:
      Project = "Project Vasudev Vihar";
      break;
  }

  const VasudevVihar = (
    <>
      <TextImageRight
        id="1"
        image={Poster}
        title="About Project"
        description="Project Vasudev Vihar is a spacious plotting project at affordable price point located in Mendhasala Square, Bhubaneswar. Spread over 47 acres, it is a mega plotting project consisting of more than 1500 plots. The project is strategically located near Infocity-2, making it easily accessible to all major landmarks in the city. The nearest landmarks include IDCO Sea Food Corporation,ICAR,Horticulture,Infocity 2, Sparsh Hospital, Mount Litera Zee School, and Subrat Bagchi Cancer Hospital. One of the most significant advantages of this project is its location. The project is situated just off the Cuttack-Pitapalli Highway, providing excellent connectivity to all major parts of the city. Moreover, the project offers a 30 feet internal main road connecting the highway, which ensures easy access for all vehicles and commute.
      "
        textStyle={{
          fontSize: "1.5rem",
        }}
      />
      <TextImageLeft
        id="2"
        image={P1}
        title="Project Highlights"
        description="The project offers a plethora of amenities to cater to the needs of the residents. It boasts of an amusement park, which is perfect for spending quality time with family and friends. It also has a temple where residents can seek divine blessings. The project offers electrification and borewell facilities, ensuring that the residents have access to uninterrupted water and electricity supply. Furthermore, the project has a dedicated plantation area to ensure greenery and a pollution-free environment. The project is designed keeping in mind the safety and security of the residents. It offers 24*7 security service with CCTV facilities, ensuring that the residents are always safe and secure. The project is also well connected with government MO bus services, making it easy for the residents to commute within the city."
      />
      <TextImageRight
        id="3"
        image={P2}
        title="Why Invest?"
        description="
        Overall, Project Vasudev Vihar is an excellent option for those looking for a luxurious and spacious plotting project in Bhubaneswar. Its strategic location, along with world-class amenities, ensures that residents have access to everything they need for a comfortable and peaceful lifestyle."
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
        }}
      >
        <h1
          style={{
            fontWeight: "500",
            fontSize: "2.5rem",
          }}
        >
          Walkthrough Video
        </h1>
        <ReactPlayer
          url="https://youtu.be/o4fwCVBGofU"
          width="100%"
          height="80vh"
          style={{
            margin: 20,
          }}
          controls
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
        }}
      >
        <h1
          style={{
            fontWeight: "500",
            fontSize: "2.5rem",
          }}
        >
          Photo Gallery
        </h1>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Image
              src={P3}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P4}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P5}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P6}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P7}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P8}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P9}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P10}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P11}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P12}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P13}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P14}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P15}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={P16}
              alt="Project 1"
              style={{
                width: "95%",
                height: "95%",
                margin: 10,
              }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );

  return (
    <Layout>
      <WallText image="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2314&q=80">
        <h3>{Project}</h3>
      </WallText>
      {PID === "1" && VasudevVihar}
    </Layout>
  );
};

export default ProjectDetails;
