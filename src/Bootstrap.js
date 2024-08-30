import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs} from 'react-bootstrap';
import { Tab } from 'react-bootstrap';

function Bootstrap(){
return(
    <div>
       <h3> Bootstrap componentleri </h3> 
       <Button variant="success">buton</Button>
       <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
       Contact
      </Tab>
    </Tabs>
    </div>
)
}
export default Bootstrap;