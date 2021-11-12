import {ArticleCard} from "./index";
import {Box,Typography,Divider,Grid } from '@mui/material';
import Slider from "react-slick";
import './slick/slick.css';
import './slick/slick-theme.css';

const Home = ({articles}) => {

    const articleListFeatured = articles.filter(article => ( article["featured"] ));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: articleListFeatured.length >= 3 ?  3 : articleListFeatured.length,
        slidesToScroll: 1
    }

    const styles = {
        paperContainer: {
            margin:'100px'
        }
    };

    return (
        <div style={{marginTop:"-4rem", marginLeft:120,marginRight:120}}>
            <div style={styles.paperContainer}>
                <Slider {...settings}>
                    {
                        articleListFeatured.map(article => (
                        <div key={article.id} >
                            <ArticleCard key={article.id} article = {article} />
                        </div>
                    ))}
                </Slider>
            </div>

            <Box sx={{ mt:4}}>
                <Typography variant="h5">
                    LISTE DES ARTICLES
                </Typography>
                <Divider />
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}  sx={{p:4}}>
                    {
                        articles.map(article => (
                        <Grid item xs={4} key={article.id} sx={{alignItems: "center"}}>
                            <ArticleCard article = {article} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default Home;