import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "600",
    fontSize: "2em",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Schedule() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>League Schedule</h4>
            <p className={classes.cardCategoryWhite}>When and Where</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Diamond", "Home Team", "Away Team", "Time", "Date"]}
              tableData={[
                [
                  "1",
                  "blue ballers",
                  "bag taggers",
                  "6:30pm",
                  "Monday, August 9th",
                ],
                [
                  "2",
                  "highballers",
                  "easton indians",
                  "6:30pm",
                  "Monday, August 9th",
                ],
                [
                  "4",
                  "lord tunderin",
                  "revamped",
                  "6:30pm",
                  "Monday, August 9th",
                ],
                [
                  "3",
                  "Knock offs",
                  "sons of pitches",
                  "6:30pm",
                  "Monday, August 9th",
                ],
                [
                  "1",
                  "bag taggers",
                  "blue ballers",
                  "8:00pm",
                  "Monday, August 9th",
                ],
                [
                  "2",
                  "easton indians",
                  "highballers",
                  "8:00pm",
                  "Monday, August 9th",
                ],
                [
                  "4",
                  "revamped",
                  "lord tunderin",
                  "8:00pm",
                  "Monday, August 9th",
                ],
                [
                  "3",
                  "sons of pitches",
                  "knock offs",
                  "8:00pm",
                  "Monday, August 9th",
                ],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
