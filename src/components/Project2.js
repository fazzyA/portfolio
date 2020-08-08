import React from 'react';
import { Link,graphql, useStaticQuery} from 'gatsby'
import { motion } from 'framer-motion';
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
        maxWidth: 360,
        minWidth: 285,
        float: "left",
        margin: '10px 20px 10px 20px',
        padding: 10
    },
    media: {
        height: 140,
    },
});


const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', delay: 0.3 }
    },
    exit: {
        x: "-100vh",
        transition: { ease: 'easeInOut' }
    }
};

const nextVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: { type: 'spring', stiffness: 120 }
    }
}
const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
}

const Projects = () => {

   const data = useStaticQuery(graphql`
{
    allContentfulProjects {
      edges {
        node {
          title
          githubLink
          demoLink
          description {
            description
          }
          image{
              fluid{
                  src
              }
          }
        }
      }
    }
  }
`)
const projectList = data.allContentfulProjects.edges;
console.log(projectList)

    const projectClasses = useStyles();

    // const projectList = [{ title: 'project1' }, { title: 'project2' },
    // { title: 'project3' }, { title: 'project4' }]
console.log(data)
    return (
        <motion.div className="base container-project"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >

{/* <pre>{JSON.stringify(data, null, 4)}xzczd</pre> */}
            {/* <div className='marginCenter'> */}
            {projectList.map(
                (project) => (
                    <Card className={projectClasses.root}>
                        <CardActionArea>
                            <CardMedia
                                className={projectClasses.media}
                                image={project.node.image.fluid.src}
                                title={project.node.title}
                            />
                            <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {project.node.title} </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a href={project.node.githubLink}>
                                <img src={logoGithub} alt='github' className='logos' />
                                </a>
                            </Button>
                            <Button size="small" color="primary">
                            <a href={project.node.demoLink}>
                             <img src={logoDemo} alt='Demo' className='logos' />
                             </a>
                            </Button>
                        </CardActions>
                    </Card>
                )
            )
            }
            {/* </div> */}

        </motion.div>
    )
}


export default Projects;

