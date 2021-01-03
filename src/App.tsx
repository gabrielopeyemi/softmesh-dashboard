import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const [loadData, setLoadData] = useState<any>([]);
  console.log({Data: loadData});
  useEffect(()=> {
    axios.get(`https://softmesh-backend.herokuapp.com/usermsg`)
      .then(function (response) {
        // handle success
        setLoadData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },[]);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Container>
      {loadData.map((load :any, index: number) => (
         <Card className={classes.root} style={{marginBottom: 15}} key={index}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {load.email}
            </Typography>
            <Typography variant="h5" component="h2">
              {load.fullName}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {load.phoneNumber}
            </Typography>
            <Typography variant="body2" component="p">
              {load.msg}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}
