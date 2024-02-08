import '../css/section.css'

function Section({ image, text, title, cta, direction }) {
  return (
    <div className="section container" style={{flexDirection:(direction === 'row'?'row':'row-reverse')}}>
      <div className="section_left">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <p className="title">{title}</p>
        <p className="subtitle">{text}</p>
        <div className="cta_section">{cta}</div>
      </div>
    </div>
  )
}

export default Section