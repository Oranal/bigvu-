import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Canvas from './Canvas';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Page = (props) => {
  const classes = useStyles();
  const [image, setImage] = useState(props.data[0].value);
  const [text, setText] = useState('');

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };

  return (
    <>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Text"
            variant="outlined"
            value={text}
            onChange={handleChangeText}
          />
        </form>

        <div>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-select-native">
              Image
            </InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              value={image}
              onChange={handleChangeImage}
              input={<BootstrapInput />}
            >
              {props.data.map((item) => (
                <option key={item.name} value={item.value}>
                  {item.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </div>

        <div>
          <Canvas text={text} url={image} background={props.background} />
        </div>
      </div>
    </>
  );
};

export default Page;
