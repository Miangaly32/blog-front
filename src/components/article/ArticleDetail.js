import { useLocation } from 'react-router-dom';
import { Chip ,Box, Typography,Breadcrumbs, Button } from '@mui/material';
import StyledBreadcrumb from "../StyledBreadcrumb";
import axios from "../../axios";
import {FacebookShareButton} from "react-share";

const ArticleDetail = () => {
    const location = useLocation()
    const {article} = location.state
    const tags = article['tags'].map(tag => (
        <Chip label={'#'+tag.label} key={tag.label} />
    ))

    return (
        <Box
            sx={{ml:15,mt:5,mr:18,mb:10}}
        >
            <Breadcrumbs aria-label="breadcrumb">
                <StyledBreadcrumb
                    component="a"
                    href="/articles"
                    label="Catégories"
                />
                <StyledBreadcrumb label={article.category} />
            </Breadcrumbs>

            <Box
                sx={{
                    display: 'grid',
                    gridAutoColumns: '1fr',
                    gap: 1,
                    alignItems: 'center',
                    mt:4
                }}
            >
                <Box sx={{ gridRow: '1' }}>
                    <Typography variant="h4"> {article.title} </Typography>
                    <Typography variant="subtitle1"> {article.articleDate} </Typography>
                </Box>
                <Box sx={{ gridRow: '2' }}>
                    <Typography variant="subtitle1">
                        {article.author}
                    </Typography>
                </Box>

                <Box
                    sx={{ gridRow: '1', gridColumn: '5 / 6',display:'flex', justifyContent:'flex-end' }}
                >
                    <FacebookShareButton
                        disabledStyle
                        size="small"
                        url={`${axios.defaults.baseURL}/${location.pathname}`}
                        // quote={props.joke.setup + props.joke.punchline}
                        // hashtag="#programing joke"
                    >
                        <Button variant="contained" sx={{backgroundColor:"#0061AE"}}> Partager </Button>
                    </FacebookShareButton>
                </Box>
            </Box>

            <Box
                sx={{mt:4}}
            >
                <img src={`${axios.defaults.apiURL}/uploads/full/${article.thumbnail}`} alt={article.title} />
            </Box>
            <Box sx={{mt:4}}>
                <Typography variant="body2" dangerouslySetInnerHTML={{ __html: article.content }} />
            </Box>
            <Box sx={{mt:4}}>
                {tags}
            </Box>
        </Box>
    );
}

export default ArticleDetail;