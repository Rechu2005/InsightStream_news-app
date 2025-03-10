import image from '../assets/images.jpeg'
 const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-warning-subtle border border-dark border border-4 text-dark mb-3 d-inline-grid my-3 mx-3 px-4 py-3" style={{maxWidth:"300px"}}>
    <img src={src?src:image} style={{height:"200px",width:"250px"}}className="card-img-top border border-warning border border-3 rounded-4" alt="..." />
    <div className="card-body border border-dark border border-2 rounded-4">
      <h4 className="card-title fst-italic fw-bold text-danger,">{title.slice(0,30)}</h4>
      <g className="card-text fst-italic">{description?description.slice(0,90):""}</g>
      <a href={url}className="btn btn-primary border border-info border border-3">Read More</a>
    </div>
  </div>
  )
}

export default NewsItem