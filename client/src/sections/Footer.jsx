import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import { Grid } from '@mui/material';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";


export default function Footer() {
  return (
    <Box
    backgroundColor="#7de1ee"
    paddingTop="20px"
    component="footer"
    width="100%"
  >
    <Grid container justifyContent="space-evenly">
          <Grid item xs={12} sm={4} zeroMinWidth>
            <center>
            <Typography variant="body1" color="text.primary" paddingTop="15px" gutterBottom>
              Kerala Startup Mission | Govenment of Kerala
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>G3B, Thejaswini, Technopark Campus</p>
              <p>Kariavattom, Trivandrum, Kerala, 695581</p>
            </Typography>

            <Typography variant="body1" color="text.primary" paddingTop="20px" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
            <Typography variant="body1" color="text.primary" padding="20px">
              <p>For Queries</p>
              <p>email@email.com</p>
            </Typography>
            <Typography variant="body1" color="text.primary" padding="20px" gutterBottom>
              <p>Name Name</p>
              <p>email@email.com</p>
              <p>Phone no</p>
            </Typography>
            </center>
            
          </Grid>
          <Grid item xs={12} sm={4}>
            <center>
            <Typography variant="body1" color="text.primary" paddingTop="15px" gutterBottom>
              College of Engineering, Trivandrum
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <p>Engineering College, Sreekaryam - Kulathoor Rd</p>
            <p>Sreekariyam, Thiruvananthapuram, Kerala 695016</p>
            </Typography>
            <Typography variant="body1" color="text.primary" paddingTop="20px" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
            <Typography variant="body1" color="text.primary" padding="20px">
              <p>For Queries</p>
              <p>email@email.com</p>
            </Typography>
            <Typography variant="body1" color="text.primary" padding="20px" gutterBottom>
              <p>Name Name</p>
              <p>email@email.com</p>
              <p>Phone no</p>
            </Typography>
            </center>
          </Grid>
    </Grid>
    <Container Width="100%" borderTop={10} sx={{
          p:3,
    }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()}
        <Link color="inherit" href="https://your-website.com/"></Link>
        {"‎ Kerala Startup Mission. All Rights Reserved."}
      </Typography>
    </Container>
  </Box>
  );
}