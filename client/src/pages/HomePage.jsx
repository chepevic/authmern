import React from 'react'


const HomePage = () => {
  return (
  <>
     {/* <FontAwesomeIcon icon="far fa-running" /> */}
  <div className="container">
  <h2 className='title1'>Welcome <span className='title2'>YSport</span>  </h2>
  <h4 className="title3">The Site where you will find everything about sports</h4>
  <p className='t-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consectetur sit itaque velit maiores libero obcaecati quia repellat ea, nam ullam id natus fugiat a totam molestiae et. Explicabo quod quisquam omnis praesentium laborum sint magni nam molestiae? Consequuntur ad, libero repellendus nisi pariatur praesentium natus porro error ipsam doloremque magnam. Quia eaque voluptatum culpa, facilis quisquam fuga aliquam fugiat. Amet earum quis, voluptatibus officiis veritatis molestias voluptatem repudiandae laborum. Et aspernatur adipisci, hic dolore quibusdam facere a saepe nesciunt quos mollitia earum iste consequatur voluptas fuga, odit, quod enim suscipit. Ipsum nulla magnam incidunt, nesciunt accusantium iste ad tempore.</p>
   <div className="images">
    
    <div className="images__box">
      <img src="images/image1.jpg" alt="Image1" className="images__photo" />
    </div>
    <div className="images__box">
    <img src="images/image2.jpg" alt="Image2" className="images__photo" />
      </div>

      <div className="images__box">
      <img src="images/image3.jpg" alt="Image3" className="images__photo" />
      </div>

   </div>
  </div>
  </>
  )
}

export default HomePage