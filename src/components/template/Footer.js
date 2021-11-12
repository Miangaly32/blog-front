import React from 'react';
import { Typography, Box} from '@material-ui/core';
import Menu from './Menu';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton} from "react-share";
import axios from "../../axios";

const Footer = () => {

    return (
        <Box
            sx={{
                display: 'grid',
                gridAutoColumns: '1fr',
                gap: 1,
                backgroundColor: "#0061AE",
                color: "#FFFFFF", height: "15vh",
                pt:2
            }}
        >
            <Box sx={{ gridRow: '1', gridColumn: '2 / 12' }}>
                <Typography
                    variant="body1"
                >
                    ©copyright2021 blog Dinitrol
                </Typography>
            </Box>

            <Box
                sx={{ gridRow: '1', gridColumn: '6 / 12' }}
            >
               <Menu classname={"link link-footer"}/>
            </Box>
            <Box
                sx={{ gridRow: '1', gridColumn: '10 / 12' }}
            >
                <FacebookShareButton
                    disabledStyle
                    size="small"
                    url={`${axios.defaults.baseURL}`}
                >
                    <FacebookRoundedIcon sx={{mr:1}} />
                </FacebookShareButton>
                <TwitterShareButton
                    disabledStyle
                    size="small"
                    url={`${axios.defaults.baseURL}`}
                >
                    <TwitterIcon sx={{mr:1}}/>
                </TwitterShareButton>
                <InstagramIcon sx={{mr:1}}/>
                <LinkedinShareButton>
                    <LinkedInIcon sx={{mr:1}}/>
                </LinkedinShareButton>
                <GoogleIcon/>
            </Box>
        </Box>
    )
}

export default Footer;