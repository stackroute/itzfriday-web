import React from 'react';
import ReactDOM from 'react-dom';
import Formsy from 'formsy-react';
import { Link } from 'react-router';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import IconButton from 'material-ui/IconButton';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';

const error="";
var myArray=[];
var counter=0;

var fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];
var counter=0;
export default class AddChannel extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.addData = this.addData.bind(this);
    this.enableCreate = this.enableCreate.bind(this);
    this.disableCreate = this.disableCreate.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.notifyFormError = this.notifyFormError.bind(this);
    this.state = {chipData:[],canSubmit:true};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        
      }
    }


  }
   enableCreate() {
    this.setState({
      canSubmit: true
    });
  }

  disableCreate() {
    this.setState({
      canSubmit: false
    });
  }

  submitForm(data) {
  	data.chipData=this.state.chipData;
    console.log(JSON.stringify(data));
    this.props.router.replace("/");
  }
  addData(){
  	const value = document.getElementById('memberName').value;
  	myArray.push({key:counter,label:value})
  	this.setState ({chipData:myArray})
  	counter++;
  	fruit = fruit.filter(item => item !== value);
  }
  notifyFormError(data) {
    console.error('Form error:', data);
  }
  handleRequestDelete = (key,label) => {
    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    fruit.push(label);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  }
  renderChip(data) {
    return (
      <Chip
        key={data.key}
        label={data.label}
        onRequestDelete={() => this.handleRequestDelete(data.key,data.label)}
        style={this.styles.chip}>
        {data.label}
      </Chip>
    );
  }
  render() {
    return (
      <Grid>
      <Paper style={{padding: '10px'}}>
        
        <Col xs={ 12 }>
          <Formsy.Form
                       onValid={ this.enableCreate }
                       onInvalid={ this.disableCreate }
                       onValidSubmit={ this.submitForm }
                       onInvalidSubmit={ this.notifyFormError }>
            
            	<Row>
            		<Col
                     xs={ 12 }
                     sm={ 12 }
                     md={ 12 }
                     lg={ 12 }>
            		Create Channel Page
            		</Col>
           	   </Row>
               <Row>
                <Col
                     xs={ 12 }
                     sm={ 12 }
                     md={ 12 }
                     lg={ 12 }>
                <FormsyText
                            type="text"
                            name="title"
                            validations="isWords"
                            validationError={ error.messages }
                            required
                            hintText="Enter title for Channel"
                            floatingLabelText="Title"
                            updateImmediately
                            fullWidth/>
                </Col>
              </Row>
              <Row center="xs">
              		<Col xs={12} sm={12} md={12} lg={12}>
              		<div id="chipContainer" style={this.styles.wrapper}>
                		{this.state.chipData.map(this.renderChip, this)}
                	</div>
              		</Col>
              </Row>
              <Row start="xs">
                <Col xs={10} sm={10} md={10} lg={10}>
				<AutoComplete
					  id="memberName"
					  name="member"
				      floatingLabelText="Add Members"
				      filter={AutoComplete.fuzzyFilter}
				      dataSource={fruit}
				      maxSearchResults={5}
				      hintText="Search Member Here"
				      fullWidth
				    />
				</Col>
			    <Col xs={ 2 }
                     sm={ 2 }
                     md={ 2 }
                     lg={ 2 }>
                     <IconButton type="button" onClick={this.addData}>
      						<AddCircleOutline/>
    				</IconButton>                  
    			</Col>
    			<Row center="xs">
                <Col xs={ 12 }
                     sm={ 12 }
                     md={ 12 }
                     lg={ 12 }>
                     <RaisedButton type="submit" label="Create Channel" primary={true}/>       
    			</Col>
    			</Row>
              </Row>
               <div>
        			
      		   </div>
            
          </Formsy.Form>
        </Col>
        </Paper>
      </Grid>
      );
  }
}