import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton'

const styles = {
  chatBox: {
    position: "relative",
    height: "100%",
    background: "white",
    padding: 0
  },
  messageList: {
    height: 380,
    overflow: "auto",
    listStyle: "none",
    marginLeft: "-20px"
  },
  message: {
    zoom: 1,
    overflow: "hidden",
    marginTop: 15,
    padding: "2px"
  },
  profilePic: {
    display: "table-cell",
    verticalAlign: "top",
    paddingRight: 10
  },
  imageStyle: {
    maxWidth: "inherit",
    height: 44,
    width: 44,
    borderRadius: "50%",
    display: "block",
    verticalAlign: "middle"
  },
  messageTextDisplay: {
    paddingTop: 0,
    fontWeight: 200,
    fontSize: 14,
    width: 10000,
    display: "table-cell",
    verticalAlign: "top"
  },
  messageData: {
    marginBottom: 5
  },
  author: {
    fontWeight: 400,
    color: "#89969c"
  },
  timestamp: {
    fontSize: 12,
    margin: "0 10px"
  },
  messageBody: {
    fontSize: 14,
    fontWeight: "normal",
    fontFamily: "sans-serif"
  },
  actionBar: {
    position: "relative",
    width: "100%",
    borderTop: "1px solid #dae2e3"
  },
  inputArea: {
    height: 40,
    margin: 0,
    resize: "none",
    paddingTop: "10px !important",
    outline: "none",
    border: "none",
    textIndent: 5,
    backgroundColor: "#fff",
    width: "100%"
  },
  iconStyle: {
    marginLeft: "-18px"
  },
  smileyStyle: {
    marginLeft: "-12px"
  }

}
class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state= {
      canSubmit: false
    };
  }
    enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  submitForm(data) {
    console.log(JSON.stringify(data, null, 4));
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }
  render() {
    return (
        <Paper zDepth={1} style={styles.chatBox}>
          <ul style= {styles.messageList}>
            <li style = {styles.message}>
              <div style = {styles.profilePic}>
                <img src="https://twitter.com/@gobinda_thakur/profile_image?size=original" style = {styles.imageStyle}/>
              </div>
              <div style={styles.messageTextDisplay}>
                <div style={styles.messageData}>
                <span style={styles.author}>Gobinda</span>
                <span style={styles.timestamp}>19:00:06 pm</span>
                </div>
                <p style={styles.messageBody}>Hi buddy!</p>
              </div>
            </li>
            <li style = {styles.message}>
              <div style = {styles.profilePic}>
                <img src="https://twitter.com/pusher/profile_image?size=original" style = {styles.imageStyle}/>
              </div>
              <div style={styles.messageTextDisplay}>
                <div style={styles.messageData}>
                <span style={styles.author}>BOB</span>
                <span style={styles.timestamp}>19:00:06 pm</span>
                </div>
                <p style={styles.messageBody}>Hey! Good morning. How can I help you?</p>
              </div>
            </li>
            <li style = {styles.message}>
              <div style = {styles.profilePic}>
                <img src="https://twitter.com/@gobinda_thakur/profile_image?size=original" style = {styles.imageStyle}/>
              </div>
              <div style={styles.messageTextDisplay}>
                <div style={styles.messageData}>
                <span style={styles.author}>Gobinda</span>
                <span style={styles.timestamp}>19:00:06 pm</span>
                </div>
                <p style={styles.messageBody}>Please create a git repository with name react-app</p>
              </div>
            </li>
            <li style = {styles.message}>
              <div style = {styles.profilePic}>
                <img src="https://twitter.com/pusher/profile_image?size=original" style = {styles.imageStyle}/>
              </div>
              <div style={styles.messageTextDisplay}>
                <div style={styles.messageData}>
                <span style={styles.author}>BOB</span>
                <span style={styles.timestamp}>19:00:06 pm</span>
                </div>
                <p style={styles.messageBody}>Okay! Please wait. I will confirm once it created</p>
              </div>
            </li>
            <li style = {styles.message}>
              <div style = {styles.profilePic}>
                <img src="https://twitter.com/@gobinda_thakur/profile_image?size=original" style = {styles.imageStyle}/>
              </div>
              <div style={styles.messageTextDisplay}>
                <div style={styles.messageData}>
                <span style={styles.author}>Gobinda</span>
                <span style={styles.timestamp}>19:00:06 pm</span>
                </div>
                <p style={styles.messageBody}>Okay! Fine.</p>
              </div>
            </li>
            <li style = {styles.message}>
              <div style = {styles.profilePic}>
                <img src="https://twitter.com/pusher/profile_image?size=original" style = {styles.imageStyle}/>
              </div>
              <div style={styles.messageTextDisplay}>
                <div style={styles.messageData}>
                <span style={styles.author}>BOB</span>
                <span style={styles.timestamp}>19:00:06 pm</span>
                </div>
                <p style={styles.messageBody}>Hey! Thank you for your patience. Your repository is created. Here is the link: <a href="#">https://github.com/GO345724/react-app</a></p>
              </div>
            </li>
            <li style = {styles.message}>
              <div style = {styles.profilePic}>
                <img src="https://twitter.com/@gobinda_thakur/profile_image?size=original" style = {styles.imageStyle}/>
              </div>
              <div style={styles.messageTextDisplay}>
                <div style={styles.messageData}>
                <span style={styles.author}>Gobinda</span>
                <span style={styles.timestamp}>19:00:06 pm</span>
                </div>
                <p style={styles.messageBody}>It is awesome. Thank you for your kind help.</p>
              </div>
            </li>
            <li style = {styles.message}>
              <div style = {styles.profilePic}>
                <img src="https://twitter.com/pusher/profile_image?size=original" style = {styles.imageStyle}/>
              </div>
              <div style={styles.messageTextDisplay}>
                <div style={styles.messageData}>
                <span style={styles.author}>BOB</span>
                <span style={styles.timestamp}>19:00:06 pm</span>
                </div>
                <p style={styles.messageBody}>It is my duty. Any other help you need!</p>
              </div>
            </li>
            <li style = {styles.message}>
              <div style = {styles.profilePic}>
                <img src="https://twitter.com/@gobinda_thakur/profile_image?size=original" style = {styles.imageStyle}/>
              </div>
              <div style={styles.messageTextDisplay}>
                <div style={styles.messageData}>
                <span style={styles.author}>Gobinda</span>
                <span style={styles.timestamp}>19:00:06 pm</span>
                </div>
                <p style={styles.messageBody}>No, Thank you and bye!</p>
              </div>
            </li>
            <li style = {styles.message}>
              <div style = {styles.profilePic}>
                <img src="https://twitter.com/pusher/profile_image?size=original" style = {styles.imageStyle}/>
              </div>
              <div style={styles.messageTextDisplay}>
                <div style={styles.messageData}>
                <span style={styles.author}>BOB</span>
                <span style={styles.timestamp}>19:00:06 pm</span>
                </div>
                <p style={styles.messageBody}>Bye!</p>
              </div>
            </li>
          </ul>
          <div style={styles.actionBar}>
          <Formsy.Form
                    onValid={this.enableButton.bind(this)}
                    onInvalid={this.disableButton.bind(this)}
                    onValidSubmit={this.submitForm.bind(this)}
                    onInvalidSubmit={this.notifyFormError.bind(this)}
                  >
            <Grid>
              <Row center="xs" style={{padding: '2px 2px 2px 2px'}}>
                <Col xs={1} sm={1} md={1} lg={1}>
                  <IconButton style={styles.smileyStyle}><i className="material-icons">tag_faces</i></IconButton>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8}>
                <FormsyText
                  name="messages"
                  validations="minLength:1"
                  validationError="Type your message"
                  required
                  hintText="Type your message"
                  style={styles.inputArea}
                  updateImmediately
                />
                </Col>
                <Col xs={1} sm={1} md={1} lg={1}>
                  <IconButton><i className="material-icons">attach_file</i></IconButton>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1}>
                  <IconButton
                    type="submit"
                    disabled={!this.state.canSubmit}
                    style={styles.iconStyle}
                  ><i className="material-icons">send</i></IconButton>
                </Col>
              </Row>
            </Grid>
            </Formsy.Form>
          </div>
        </Paper>
      )
  }
}

export default ChatWindow;