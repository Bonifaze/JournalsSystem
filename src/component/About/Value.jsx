import React, { useState } from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordingItemButton,
//   AccordionitemPanel,
//   AccordionItemState
// } from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import data from "../../utils/accordion";

function Value() {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left value side  */}

        <div className="v-left">
          <div className="flexColStart v-head ">
            <span className="orangeText">ACA Journal Journey</span>
            <span className="primaryText">About Us</span>
          </div>

          <div className="image-container">

            <h3 className="sText">ACA Journal in A Paragraph</h3>
            <p className="flexColStart secondaryText">ACA Journal  is an open-access academic publishing platform, providing peer-reviewed scholarly journals that facilitate effective access to high "quality and original" research findings within the domains of natural and applied sciences, agricultural and environmental sciences, medical and biological sciences, engineering and technology, literature, linguistics, education, social science and humanities. All research and review articles published by OJN are made freely and permanently accessible online immediately upon acceptance. OJN articles are well-indexed and archived in several international databases. OJN is sustained by supporting authors' contributions, volunteer services and donations. OJN relies heavily on the academic and research experience of senior Nigerian academics as Chief Editors supported by an international team of editors who man the editorial boards of its faculty journals.</p>
            {/* <img src="./value.png" alt="" /> */}
          </div>
        </div>

        {/* value right side  */}

        <div className="flexColStart v-right">
          <div className=" flexColStart v-head">
          <span className="orangeText">Key Ways </span>
          <span className="primaryText">We are Built to Promote</span>
          </div>
          <span className="sText">
            ACA Journals Nigeria is an open-access academic publishing platform
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
                const [className, setClassName] = useState(null)
              return (
                <AccordionItem className={'accordionItem ${className}'} key={1} uuid={i}>
                {/* <AccordionItem className="accordionItem" key={1} uuid={i}> */}
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton ">
                      <AccordionItemState>                       
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText"> {item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="sText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
