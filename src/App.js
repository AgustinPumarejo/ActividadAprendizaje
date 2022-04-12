import './App.css';
import { ReactMediaRecorder } from "react-media-recorder";

const App = () => (
  <div>
    <ReactMediaRecorder
      screen
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div class = "box">
          <p class = "status">{status}</p>
          <div class = "buttons">
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
          </div>
          <video class = "reproducer" src={mediaBlobUrl} controls autoPlay loop />
        </div>
      )}
    />
  </div>
);
 
export default App