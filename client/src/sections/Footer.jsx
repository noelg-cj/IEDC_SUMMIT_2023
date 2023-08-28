import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import { Grid, Divider } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import KSUMlogo from "../assets/img/footer/KSUM logo.png";
import IEDClogo from "../assets/img/footer/IEDC logo.png";
import cetLogo from "../assets/img/footer/cet.png";




export default function Footer() {
  return (
    <Box
      backgroundColor="#1f1f1f"
      paddingTop="50px"
      component="footer"
      width="100%"
    >
      <Grid container justifyContent="space-evenly" spacing="1%">
        <Grid item xs={12} sm={4} zeroMinWidth paddingBottom={7}>
        <Grid container justifyContent="space-evenly" >
          <img src={KSUMlogo} className=" h-24 w-30" />
          <img src={IEDClogo} className=" h-28 w-30" />
        </Grid>
          
          <Typography
            variant="body1"
            color="#ffffff"
            paddingTop="5px"
            paddingLeft="4px"
            gutterBottom
          >
            Kerala Startup Mission | Govenment of Kerala
          </Typography>
          <Typography variant="body2" color="#ababab" paddingBottom="20px" paddingLeft="4px">
            <p>G3B, Thejaswini, Technopark Campus</p>
            <p>Kariavattom, Trivandrum, Kerala, 695581</p>
          </Typography>

          <Typography variant="body1" color="#ababab" paddingLeft="4px">
            <p>For Queries:</p>
          </Typography>
          <Typography variant="body1" color="#ffffff" paddingLeft="4px">
            <p>iedckerala@startupmission.in</p>
          </Typography>
          <Typography
            variant="body1"
            color="#ffffff"
            paddingTop="20px"
            paddingBottom="30px"
            paddingLeft="4px"
            gutterBottom
          >
            <p>Bergin Russel</p>
            <p>iedckerala@startupmission.in</p>
            <p>6238998379</p>
          </Typography>
          <Link href="https://www.facebook.com/" color="#ababab" paddingLeft="4px">
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
          <img src={cetLogo} className=" h-20 w-24" />
          <Typography
            variant="body1"
            color="#ffffff"
            paddingTop="30px"
            paddingLeft="4px"
            gutterBottom
          >
           Innovation and Entrepreneurship Development Centre | CET
          </Typography>
          <Typography variant="body2" color="#ababab" paddingBottom="20px" paddingLeft="4px">
            <p>College of Engineering Trivandrum,</p>
            <p>Sreekaryam, Thiruvananathapuram, Kerala, 695016</p>
          </Typography>

          <Typography variant="body1" color="#ababab" paddingLeft="4px">
            <p>For Queries:</p>
          </Typography>
          <Typography variant="body1" color="#ffffff" paddingLeft="4px">
            <p>iedcsummit@cet.ac.in</p>
          </Typography>
          <Typography
            variant="body1"
            color="#ffffff"
            paddingTop="20px"
            paddingBottom="30px"
            paddingLeft="4px"
            gutterBottom
          >
            <p>IEDC CET</p>
            <p>iedc@cet.ac.in</p>
            <p>00000000</p>
          </Typography>
          <Link href="https://www.facebook.com/" color="#ababab" paddingLeft="4px">
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
          <Link color="#ababab" href="https://your-website.com/"></Link>
          {"‎ Kerala Startup Mission. All Rights Reserved."}
        </Typography>
      </Container>
    </Box>
  );
}
