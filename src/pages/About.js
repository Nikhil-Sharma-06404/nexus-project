import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Welcome to our restaurant, where tradition meets taste and every meal is a celebration of authentic Indian flavors. Our culinary journey began with a passion for bringing the rich and diverse tastes of India to your table. We pride ourselves on using the freshest ingredients and traditional recipes to create dishes that are not only delicious but also reflect the heritage and culture of India. From the vibrant spices of the north to the tangy and sweet flavors of the south, our menu is a testament to the culinary diversity of our homeland.
        </p>
        <br />
        <p>
        At our restaurant, we believe that dining is an experience that goes beyond just food. Our warm and inviting atmosphere, coupled with our dedication to excellent service, ensures that every visit is a memorable one. Whether you're joining us for a casual meal with friends, a family celebration, or a special occasion, we strive to make your time with us exceptional. Our chefs are passionate about crafting dishes that delight your senses and our team is committed to providing a dining experience that makes you feel right at home. Join us and savor the flavors of India, where every bite tells a story.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
