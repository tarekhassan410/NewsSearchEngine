import React, {Component} from "react";
import {render} from "react-dom";
import axios from "axios";

import {
  CssBaseline,
  AppBar,
  TextField,
  Grid,
  Paper,
  Toolbar,
  Typography
} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

import News from ".././components/News";
import CategoryButton from ".././components/CategoryButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      value: "",
      category: "General"
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=` +
          this.state.value +
          `&category=` +
          this.state.category +
          `&apiKey=d9d14bec60fb45d39b5f0c8ff1930242&country=us`
      )
      .then(response =>
        this.setState({
          news: response.data.articles
        })
      );
  }

  handleChange = e => {
    this.setState(
      {
        value: e.target.value
      },
      this.handleSearch
    );
  };

  handleSearch = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=` +
          this.state.value +
          `&category=` +
          this.state.category +
          `&apiKey=d9d14bec60fb45d39b5f0c8ff1930242&country=us`
      )
      .then(response =>
        this.setState({
          news: response.data.articles
        })
      );
  };

  onChangeCategory = e => {
    this.setState(
      {
        category: e.target.value
      },
      () => this.handleSearch()
    );
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div style={styles.root}>
          <div style={styles.inputContainer}>
            <TextField
              id="outlined-full-width"
              value={this.state.value}
              placeholder="Enter a keyword"
              margin="normal"
              onChange={this.handleChange}
              fullWidth
            />
          </div>

          <div style={styles.buttonsContainer}>
            <CategoryButton
              category={this.state.category}
              onChangeCategory={this.onChangeCategory}
            />
          </div>
          <div style={styles.listStyle}>
            <Paper square={true} elevation={1}>
              {" "}
              <News
                category={this.state.category}
                news={this.state.news}
              />{" "}
            </Paper>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: 40,
    marginBottom: 20
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  listStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
};

render(<App />, document.getElementById("root"));
