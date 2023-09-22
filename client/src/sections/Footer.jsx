import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import { Grid, Divider } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import "../assets/css/footer.css";
import KSUMlogo from "../assets/img/footer/KSUM logo.png";
import IEDClogo from "../assets/img/footer/IEDC logo.png";
import cetLogo from "../assets/img/footer/Cet_emblem.png";
import IEDCcetLogo from "../assets/img/footer/IEDC CET logo.png";
import Team from "../components/Team";

export default function Footer() {
  return (
    
      <Box
        backgroundColor="#1f1f1f"
        paddingTop="50px"
        component="footer"
        width="100%"
      >
        <div className="grid">
        <Grid container justifyContent="space-evenly" spacing="1%">
          <Grid item xs={12} sm={4} zeroMinWidth paddingBottom={7}>
            <Grid container justifyContent="space-evenly">
              <img src={KSUMlogo} className=" h-24 w-30" />
              <img src={IEDClogo} className=" h-28 w-30" />
            </Grid>

            <Typography
              variant="body1"
              color="#ffffff"
              paddingTop="10px"
              paddingLeft="4px"
              gutterBottom
            >
              Kerala Startup Mission | Govenment of Kerala
            </Typography>
            <Typography
              variant="body2"
              color="#ababab"
              paddingBottom="20px"
              paddingLeft="4px"
            >
              G3B, Thejaswini, Technopark Campus
              <br /> Kariavattom, Trivandrum, Kerala, 695581
            </Typography>

            <Typography variant="body1" color="#ababab" paddingLeft="4px">
              For Queries:
            </Typography>
            <Typography variant="body1" color="#ffffff" paddingLeft="4px">
              iedckerala@startupmission.in
            </Typography>
            <Typography
              variant="body1"
              color="#ffffff"
              paddingTop="20px"
              paddingBottom="30px"
              paddingLeft="4px"
              gutterBottom
            >
              Bergin Russel
              <br /> iedckerala@startupmission.in
              <br /> 6238998379
            </Typography>
            <Link
              href="https://www.facebook.com/"
              color="#ababab"
              paddingLeft="4px"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="#ababab"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="#ababab">
              <Twitter />
            </Link>
            <Link href="https://www.linkedin.com/" color="#ababab">
              <LinkedIn />
            </Link>
          </Grid>

          <Divider
            orientation="vertical"
            color="#ababab"
            flexItem
            sx={{ display: { xs: "none", sm: "block" } }}
          />

          <Grid item xs={12} sm={4} zeroMinWidth paddingBottom={7}>
            <Grid container justifyContent="space-evenly">
              <img src={cetLogo} className=" h-24 w-28" />
              <img
                src={IEDCcetLogo}
                className=" h-24 w-30"
                style={{ paddingTop: 10 }}
              />
            </Grid>
            <Typography
              variant="body1"
              color="#ffffff"
              paddingTop="10px"
              paddingLeft="4px"
              gutterBottom
            >
              Innovation and Entrepreneurship Development Centre | CET
            </Typography>
            <Typography
              variant="body2"
              color="#ababab"
              paddingBottom="20px"
              paddingLeft="4px"
            >
              College of Engineering Trivandrum,
              <br /> Sreekaryam, Thiruvananathapuram, Kerala, 695016
            </Typography>

            <Typography variant="body1" color="#ababab" paddingLeft="4px">
              For Queries:
              <br />
            </Typography>
            <Typography variant="body1" color="#ffffff" paddingLeft="4px">
              iedcsummit@cet.ac.in
            </Typography>
            <Typography
              variant="body1"
              color="#ffffff"
              paddingTop="20px"
              paddingBottom="30px"
              paddingLeft="4px"
              gutterBottom
            >
              IEDC CET
              <br /> iedc@cet.ac.in
              <br /> +91 9995620503
            </Typography>
            <Link
              href="https://www.facebook.com/iedccet/"
              color="#ababab"
              paddingLeft="4px"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/iedc_cet/?hl=en"
              color="#ababab"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://twitter.com/CetIedc" color="#ababab">
              <Twitter />
            </Link>
            <Link href="https://www.linkedin.com/company/innovation-and-entrepreneurship-development-cell-cet/?originalSubdomain=in" color="#ababab">
              <LinkedIn />
            </Link>
          </Grid>
        </Grid>
        <Container
          width="100%"
          sx={{
            p: 3,
          }}
        >
          <Typography variant="body2" color="#605d5d" align="center">
            {"Copyright © "}
            {new Date().getFullYear()}
            {"‎ Kerala Startup Mission. All Rights Reserved."}
            <Team />  
          </Typography>
        </Container>
        </div>
      </Box>
    
  );
}
