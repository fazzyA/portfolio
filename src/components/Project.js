import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import myImg1 from './images/personal_settings.svg';
import logoGithub from './images/github.svg';
import logoDemo from './images/preview.svg';

const useStyles = makeStyles({
    root: {
        maxWidth: 545,
        minWidth: 320,
        float: "left",
        margin: '10px 20px 10px 20px',
        padding: 10
    },
    media: {
        height: 140,
    },
});

export default function Projects() {
    const classes = useStyles();
    const projectList = [{ title: 'project1' }, { title: 'project2' }, 
    { title: 'project3' },{ title: 'project4' }]

    return (

        projectList.map(
            (project) => (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={myImg1}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {project.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        <img src={logoGithub} alt='github' className='logos' />
                        </Button>
                        <Button size="small" color="primary">
                        <img src={logoDemo} alt='Demo' className='logos' />
                        </Button>
                    </CardActions> 
            </Card>
            )
        )

    );
}