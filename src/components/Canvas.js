import './Canvas.css';

const Canvas = (props) => {
  console.log('Canvas', props);

  return (
    <div className="container">
      <div className={`root image ${props.background}`}>
        <h1 className="image">{props.text}</h1>
        <img src={props.url} alt="Nothing Selected Yet" />
      </div>
    </div>
  );
};

export default Canvas;
