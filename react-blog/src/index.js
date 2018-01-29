import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import Comment from './Comment';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Post />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<Comment />, document.getElementById('root'));
registerServiceWorker();



ReactDOM.render(
  <Post author={"Roald Dahl"} title={"Charlie and the Chocolate Factory"} body={""} />,

  document.getElementById('root')
)
