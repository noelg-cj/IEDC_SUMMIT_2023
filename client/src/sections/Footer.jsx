import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import { Grid, Divider} from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import footerIcon from "../assets/img/footer/footer heading.png";

export default function Footer() {
  return (
    <Box
    backgroundColor="#1f1f1f"
    paddingTop="50px"
    component="footer"
    width="100%"
  >
    <Grid container justifyContent="space-evenly" columns={16} 
    >
      <Grid item xs={12} sm={4} zeroMinWidth paddingBottom={7}>
          
            <img src={footerIcon} className="w-48 sm:w-72 lg:w-96 round-full" />
            <Typography variant="body1" color="#ffffff" paddingTop="30px" gutterBottom>
              Kerala Startup Mission | Govenment of Kerala
            </Typography>
            <Typography variant="body2" color="#ababab" paddingBottom="20px">
              <p>G3B, Thejaswini, Technopark Campus</p>
              <p>Kariavattom, Trivandrum, Kerala, 695581</p>
            </Typography>

            <Typography variant="body1" color="#ababab">
              <p>For Queries:</p>
            </Typography>
            <Typography variant="body1" color="#ffffff">
              <p>iedckerala@startupmission.in</p>
            </Typography>
            <Typography variant="body1" color="#ffffff" paddingTop="20px" paddingBottom="30px" gutterBottom>
              <p>Bergin Russel</p>
              <p>iedckerala@startupmission.in</p>
              <p>6238998379</p>
            </Typography>
            <Link href="https://www.facebook.com/" color="#ababab">
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

      <Divider orientation="vertical" color="#ababab" flexItem 	sx={{ display: { xs: 'none', sm: 'block' } }} />
      
      <Grid item xs={12} sm={4} zeroMinWidth paddingBotoom={7}>
            <img src={footerIcon} className="w-48 sm:w-72 lg:w-96 round-full" />
            <Typography variant="body1" color="#ffffff" paddingTop="30px" gutterBottom>
              Kerala Startup Mission | Govenment of Kerala
            </Typography>
            <Typography variant="body2" color="#ababab" paddingBottom="20px">
              <p>G3B, Thejaswini, Technopark Campus</p>
              <p>Kariavattom, Trivandrum, Kerala, 695581</p>
            </Typography>

            <Typography variant="body1" color="#ababab">
              <p>For Queries:</p>
            </Typography>
            <Typography variant="body1" color="#ffffff">
              <p>iedckerala@startupmission.in</p>
            </Typography>
            <Typography variant="body1" color="#ffffff" paddingTop="20px" paddingBottom="30px" gutterBottom>
              <p>Bergin Russel</p>
              <p>iedckerala@startupmission.in</p>
              <p>6238998379</p>
            </Typography>
            <Link href="https://www.facebook.com/" color="#ababab">
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
    <Container Width="100%" borderTop={10} sx={{
          p:3,
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