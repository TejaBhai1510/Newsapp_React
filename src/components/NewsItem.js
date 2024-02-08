import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imgUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg": imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a target="_blank" href={newsUrl} className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem