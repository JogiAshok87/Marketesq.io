import './index.css'

const classesData = [
    {
      id :1,
      title: 'Sample Video Title',
      videoUrl:"https://www.youtube.com/embed/AjgD3CvWzS0",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      id :2,
      title: 'Sample Video Title',
      videoUrl:"https://www.youtube.com/embed/UCFg9bcW7Bk",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.',
    },
    {
        id :3,
        title: 'Sample Video Title',
        videoUrl:"https://www.youtube.com/embed/zKo69os94cU",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.',
    },
    {
        id:4,
        title: 'Sample Video Title',
        videoUrl:"https://www.youtube.com/embed/5MgBikgcWnY",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.',
    },
  ];

const Classes = () =>{
    return(
        <div className="video-list">
            {classesData.map(each => (
                <div className='video-item' key={each.id}>
                <div className="video-placeholder">
                    <iframe
                    width="100%"
                    height="100%"
                    src={each.videoUrl}
                    title={each.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; "
                    allowFullScreen
                    ></iframe>
                </div>
                <div className="video-details">
                    <h2>{each.title}</h2>
                    <p>{each.description}</p>
                    <button className="practice-button">PRACTICE</button>
                </div>
                <hr className="horizontal_Line"/>
                </div>
            ))}
        </div>

    )
}

export default Classes