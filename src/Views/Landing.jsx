import React, { useState, useEffect } from "react";
import "../App.css";
import insta from "../Images/instagram.svg";
import tote from "../Images/blacktote.png";
import Footer from "../Components/Footer";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Landing = () => {
  const [imageLinks, setImageLinks] = useState([]);
  const images = require.context("../Images/drinks", true);
  const imagePaths = images.keys();

  // Swap the first and third elements
  const first = imagePaths[0];
  imagePaths.splice(0, 1, imagePaths[2]);
  imagePaths.splice(2, 1, first);

  // Swap the first and second elements
  const second = imagePaths[1];
  imagePaths.splice(1, 1, imagePaths[0]);
  imagePaths.splice(0, 1, second);

  useEffect(() => {
    axios
      .get(
        `https://graph.instagram.com/me/media?fields=media_url&limit=6&access_token=${process.env.REACT_APP_TOKEN}`

        // `https://graph.instagram.com/doriapertea/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=6&access_token=${process.env.REACT_APP_TOKEN}`
      )
      .then((resp) => {
        console.log("INSTA REPSONSE", resp);
        let links = resp.data.data.map((obj) => obj.media_url);
        console.log("LINKS", links);
        setImageLinks(links);
      });
  }, []);

  return (
    <div className="landingWrapper">
      {" "}
      <h1>HOURS</h1>
      <div id="hours-list-wrapper">
        <div id="days" className="hours-child">
          <p>WEDNESDAY</p>
          <p>THURSDAY</p>
          <p>FRIDAY</p>
          <p>SATURDAY</p>
          <p>SUNDAY</p>
        </div>
        <div id="hours" className="hours-child">
          <p>4PM-12AM</p>
          <p>4PM-12AM</p>
          <p>4PM-12AM</p>
          <p>4PM-12AM</p>
          <p>4PM-12AM</p>
        </div>
      </div>
      {/*<button style={{ width: "400px" }}>*/}
      <h1>
        <a
          href="https://www.etsy.com/shop/kenwoodtavern/"
          target="_blank"
          rel="noreferrer noopener"
        >
          MERCH
        </a>
      </h1>
      {/*</button>*/}
      <div id="social">
        <a
          href="https://www.instagram.com/kenwood.tavern/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img id="insta" src={insta} alt="instagram icon" />
        </a>
        <br />
        {/*} <p>hello@kenwoodtavern.com</p>*/}
      </div>
      {/*<button
        onClick={() =>
          window.open("https://www.etsy.com/shop/kenwoodtavern/", "_blank")
        }
      >
        <div class="box">
          <a
            href="https://www.etsy.com/shop/kenwoodtavern/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={tote} style={{ width: "130px" }}></img>
      </a>*/}
      {/*</div>
      </button>*/}
      <Box
        sx={{
          maxWidth: "700px",
          width: "100%",
          height: "100%",
          margin: "auto",
        }}
      >
        <ImageList variant="masonry" cols={2} gap={4}>
          {imagePaths.map((imagePath, i) => {
            console.log("IMAGE", imagePath);
            console.log("images(imagePath)", images(imagePath));
            //get the image title
            // Split the string at the "/" character
            const parts = imagePath.split("/");
            // Get the last part of the split string
            const filename = parts[parts.length - 1];
            // Split the filename at the "." character
            const filenameParts = filename.split(".");
            // Get the first part of the split filename
            const imageName = filenameParts[0];

            return (
              <ImageListItem key={i}>
                <img src={images(imagePath)} alt={imageName} />
                {
                  /* STATIC IMAGES OF THEIR COCKTAILS - client expressed dislike for captions on photos
                <ImageListItemBar
                  title={imageName}
                  //subtitle={item.author}
                  actionIcon={
                    null
                    //{
                    /*<IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                  <InfoIcon />
                  </IconButton>*/
                  //}
                  //}
                  // />
                }
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
      {/* IMAGES COULD ALTERNATIVELY BE FETCHED FROM THEIR INSTAGRAM ACCOUNT UPON ACCESS REQUEST APPROVAL FROM CLIENT
      <Box
        sx={{
          maxWidth: "1000px",
          width: "100%",
          height: "100%",
          margin: "auto",
        }}
      >
        <ImageList variant="masonry" cols={2} gap={4}>
          {imageLinks.map((link, i) => {
            return (
              <ImageListItem key={i}>
                <img
                  src={link}
                  alt={`from instagram ${i}`}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>*/}
      {/*} <Grid container>
        {imageLinks.map((link, i) => {
          return (
            <Grid item xs={6} key={i} className="photoWrapper">
              <img
                src={link}
                alt={`from instagram ${i}`}
                className="instaImage"
              />
            </Grid>
          );
        })}
      </Grid>*/}
      <Footer />
    </div>
  );
};

export default Landing;
