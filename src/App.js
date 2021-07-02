import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import MyTabs from './components/MyTabs';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   const config = {
    //     method: 'get',
    //     url: 'https://bigvu-interviews-assets.s3.amazonaws.com/presenters.json',
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   };
    //   await axios(config)
    //     .then(function (response) {
    //       console.log(response.data);
    //       setData(response.data);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // };
    // fetchData();
    setTimeout(function () {
      const dummy_api_res = [
        {
          name: 'Daisi',
          value:
            'https://bigvu-interviews-assets.s3.amazonaws.com/images/Daisi.png',
        },
        {
          name: 'Shiri',
          value:
            'https://bigvu-interviews-assets.s3.amazonaws.com/images/Shiri.png',
        },
        {
          name: 'Sarha',
          value:
            'https://bigvu-interviews-assets.s3.amazonaws.com/images/Sarha.png',
        },
        {
          name: 'Rivka',
          value:
            'https://bigvu-interviews-assets.s3.amazonaws.com/images/Rivka.png',
        },
        {
          name: 'Noa',
          value:
            'https://bigvu-interviews-assets.s3.amazonaws.com/images/Noa.png',
        },
        {
          name: 'Erika',
          value:
            'https://bigvu-interviews-assets.s3.amazonaws.com/images/Erika.png',
        },
        {
          name: 'Eli',
          value:
            'https://bigvu-interviews-assets.s3.amazonaws.com/images/Eli.png',
        },
      ];

      setData(dummy_api_res);
    }, 3000);
  }, []);

  var content = (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );

  // fetched some data from the api
  if (data !== null) {
    content = <MyTabs data={data} />;
  }

  return <>{content}</>;
};

export default App;
