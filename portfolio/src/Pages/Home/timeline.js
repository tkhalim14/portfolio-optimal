import timelineElements from "./timelinelements.js";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "./style.min.css";
import {GoBriefcase } from 'react-icons/go';
import {MdWorkOutline} from 'react-icons/md';

function App() {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    
    return (
        <div>
            <div>
                <h1 className="timeline-head-style">Timeline</h1>
            </div>
            <div>
                <VerticalTimeline style={{backgroundColor:"orange"}}>
                {
                timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                    element.buttonText !== undefined &&
                    element.buttonText !== null &&
                    element.buttonText !== "";
        
                    return (
                    <VerticalTimelineElement
                        key={element.key}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        icon={isWorkIcon ? <MdWorkOutline /> : <GoBriefcase />}
                        >
                        <h3 className="vertical-timeline-element-title">
                        {element.title}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle" style={{backgroundColor:"orange"}}>
                        {element.location}
                        </h5>
                        <p id="description">{element.description}</p>
                        {showButton && (
                        <a
                            className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
                            href="https://github.com/tkhalim14"
                        >
                            {element.buttonText}
                        </a>
                        )}
                    </VerticalTimelineElement>
                    );
                })
                }
                </VerticalTimeline>
            </div>
            
        </div>
    );
  }
  
  export default App;