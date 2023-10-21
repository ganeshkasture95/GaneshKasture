import React from 'react'
import IMG1 from '../../assets/project01.png'
import IMG2 from '../../assets/project02.png'
import IMG3 from '../../assets/project03.png'
import IMG4 from '../../assets/project04.png'
import IMG5 from '../../assets/project05.jpg'
import IMG6 from '../../assets/project06.png'
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
    <section id='portfolio'>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="gk" />
          </div>
          <h3>#_Football-Score_#</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
            <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="gk" />
          </div>
          <h3>X_AI Pro Trade_X</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
            <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="gk" />
          </div>
          <h3>#_Love Track_#</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
            <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="gk" />
          </div>
          <h3>@_ChouseYourCard_@</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
            <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="gk" />
          </div>
          <h3>@_MyNewCarDrive_@</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
            <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="gk" />
          </div>
          <h3>@_Money_@</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ganeshkasture95" className='btn'>Github</a>
            <a href="https://github.com/ganeshkasture95" className='btn  btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolio