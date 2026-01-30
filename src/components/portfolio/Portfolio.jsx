import React from 'react'
import CommitListIMG from '../../assets/Screenshot 2026-01-13 000330.png'
import IMG2 from '../../assets/project02.png'
import IMG3 from '../../assets/project03.png'
import IMG4 from '../../assets/project04.png'
import './Portfolio.css'


// this thing creates an array of the element 
// and using the function we can teaverse through it


// const data = [
//   {
//     id:1,
//     image:IMG1,
//     title:'#_Football-Score_#',
//     github:'https://github.com/ganeshkasture95',
//     demo:'https://github.com/ganeshkasture95'
//   },
//   {
//     id:1,
//     image:IMG1,
//     title:'#_Football-Score_#',
//     github:'https://github.com/ganeshkasture95',
//     demo:'https://github.com/ganeshkasture95'
//   },
//   {
//     id:1,
//     image:IMG1,
//     title:'#_Football-Score_#',
//     github:'https://github.com/ganeshkasture95',
//     demo:'https://github.com/ganeshkasture95'
//   },
//   {
//     id:1,
//     image:IMG1,
//     title:'#_Football-Score_#',
//     github:'https://github.com/ganeshkasture95',
//     demo:'https://github.com/ganeshkasture95'
//   },
//   {
//     id:1,
//     image:IMG1,
//     title:'#_Football-Score_#',
//     github:'https://github.com/ganeshkasture95',
//     demo:'https://github.com/ganeshkasture95'
//   },
//   {
//     id:1,
//     image:IMG1,
//     title:'#_Football-Score_#',
//     github:'https://github.com/ganeshkasture95',
//     demo:'https://github.com/ganeshkasture95'
//   },
// ]

// and inside div portfolio__container
// {
//   data.map(({id,image,title,github,demo})) =>{
//     return(
          //   <article className='portfolio__item'>
          //   <div className="portfolio__item-image">
          //     <img src={IMG1} alt="gk" />
          //   </div>
          //   <h3>#_Football-Score_#</h3>
          //   <div className="portfolio__item-cta">
          //     <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
          //     <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
          //   </div>
          // </article>
//     )
//   }
// }


const Portfolio = () => {
  return (
    // <section id='portfolio'>

    //   <h5>My Recent Work</h5>
    //   <h2>Portfolio</h2>

    //   <div className="container portfolio__container">
    //     <article className='portfolio__item'>
    //       <div className="portfolio__item-image">
    //         <img src={IMG1} alt="gk" />
    //       </div>
    //       <h3>#_Football-Score_#</h3>
    //       <div className="portfolio__item-cta">
    //         <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
    //         <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
    //       </div>
    //     </article>
    //     <article className='portfolio__item'>
    //       <div className="portfolio__item-image">
    //         <img src={IMG2} alt="gk" />
    //       </div>
    //       <h3>X_AI Pro Trade_X</h3>
    //       <div className="portfolio__item-cta">
    //         <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
    //         <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
    //       </div>
    //     </article>
    //     <article className='portfolio__item'>
    //       <div className="portfolio__item-image">
    //         <img src={IMG3} alt="gk" />
    //       </div>
    //       <h3>#_Love Track_#</h3>
    //       <div className="portfolio__item-cta">
    //         <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
    //         <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
    //       </div>
    //     </article>
    //     <article className='portfolio__item'>
    //       <div className="portfolio__item-image">
    //         <img src={IMG4} alt="gk" />
    //       </div>
    //       <h3>@_ChouseYourCard_@</h3>
    //       <div className="portfolio__item-cta">
    //         <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
    //         <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
    //       </div>
    //     </article>
    //     <article className='portfolio__item'>
    //       <div className="portfolio__item-image">
    //         <img src={IMG5} alt="gk" />
    //       </div>
    //       <h3>@_MyNewCarDrive_@</h3>
    //       <div className="portfolio__item-cta">
    //         <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
    //         <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
    //       </div>
    //     </article>
    //     <article className='portfolio__item'>
    //       <div className="portfolio__item-image">
    //         <img src={IMG6} alt="gk" />
    //       </div>
    //       <h3>@_Money_@</h3>
    //       <div className="portfolio__item-cta">
    //         <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
    //         <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
    //       </div>
    //     </article>
    //   </div>

    // </section>



    <section id='portfolio'>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={CommitListIMG} alt="CommitList" />
          </div>
          <h3>CommitList 01/2026</h3>
          <p>Architected a GitHub-inspired task management system using React Native with project-based workflows and commit-style task modeling. Designed a local-first data architecture using AsyncStorage, enabling persistent storage, fast performance, and offline-first functionality.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
            <a href="https://play.google.com/store/apps/details?id=com.techmatrix.commitlist&pcampaignid=web_share" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Play Store</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Harmony AI" />
          </div>
          <h3>Harmony AI 08/2025</h3>
          <p>Architected a subscription-based ecosystem featuring Stripe integration, secure user authentication, and a credit-based usage system. Utilized Edge Functions and Optimized API Routes to ensure low-latency responses and real-time AI processing.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ganeshkasture95/Harmony_AI_Music_Gen" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="MoneyX" />
          </div>
          <h3>MoneyX 01/2025</h3>
          <p>Built a trading platform using React Native (TypeScript) and Node.js for real-time market analysis and strategy sharing. Implemented secure JWT authentication, push notifications, and dynamic dark/light themes with React Context API. Created admin dashboard using AdminJS for content management.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Monogram" />
          </div>
          <h3>Monogram 12/2024</h3>
          <p>A social media app built with Flutter and Firebase, designed exclusively for tech enthusiasts to share ideas and collaborate on Projects. Implemented Firebase Authentication for secure user login and Firebase Database for real-time data storage and retrieval.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
          </div>
        </article>
      </div>

      <h2>Experience</h2>

      
      {/* <article className='experience__item'>
        <h3>Developer & Team Lead | AgriTech Dr. DY Patil Vidyapeeth 09/2024 – 12/2024</h3>
        <p>Designed and developed an intelligent farming application using React Native (Expo framework) that integrates real-time sensor data to predict plant diseases, prescribe treatments, and alert farmers.</p>
        <p>Implemented a predictive analytics model using Keras to analyze sensor and image data for accurate disease detection.</p>
        <p>Explore this innovative AgriTech system on GitHub and see how it’s transforming precision farming!</p>
      </article> */}

    </section>

  )
}

export default Portfolio