import React from 'react'

import { Typography, List, ListSubheader, ListItem, ListItemText } from '@material-ui/core'

import Slide from '@material-ui/core/Slide';

const News = ({ news, category }) => {
  return (
    <div>
      <List  square={true}>
        <ListItem divider>
          <Typography variant="subtitle2" color='primary'>
            {category} news
          </Typography>
        </ListItem>

        {news.map((newsItem) =>
          <Slide in={true} timeout={500} direction='up' mountOnEnter unmountOnExit>
            <ListItem button href={newsItem.url} divider>
              <Typography variant="subtitle2" color='primary'>
                <a href={newsItem.url} target='_blank'>
                  {newsItem.title}
                </a>
              </Typography>
              <Typography style={styles.sourceStyle} color='secondary' variant="body2">
                {newsItem.source.name}
              </Typography>

            </ListItem>
          </Slide>
        )}
      </List>
    </div>
  )
}

const styles = {
  sourceStyle: {

  }
}

export default News;