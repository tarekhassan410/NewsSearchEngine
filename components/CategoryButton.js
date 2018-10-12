import React from 'react'
import { Button, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core'

import CategoriesSelect from './CategoriesSelect'

class CategoryButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      category: this.props.category,
      categoriesList: ['General', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science', 'Health'],
      open: false,

    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onChangeCategory(event)
  };

  


  render() {
    const {onChangeCategory} = this.props
    return (
      <div>
        <form autoComplete="off">

          <FormControl>
          <InputLabel htmlFor="categorySelection">Category</InputLabel>
            <Select
              open={this.state.open}
              variant='standard'
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.category}
              onChange={this.handleChange}
              inputProps={{
                name: 'category',
                id: 'categorySelection',
              }}
            >

              <MenuItem value='General'>
                <em>General</em>
              </MenuItem>
              <MenuItem value='Technology'>Technology</MenuItem>
              <MenuItem value='Business'>Business</MenuItem>
              <MenuItem value='Entertainment'>Entertainment</MenuItem>
              <MenuItem value='Health'>Health</MenuItem>
              <MenuItem value='Science'>Science</MenuItem>
              <MenuItem value='Sports'>Sports</MenuItem>
            </Select>
          </FormControl>
        </form>

       

      </div>
    )
  }
}

export default CategoryButton;