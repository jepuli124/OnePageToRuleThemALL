import React from 'react'
import { ZigZagGrid } from './ZigZagGrid'

interface incomingParams{}

const Archive: React.FC<incomingParams> = () => {
    return (
    <section id='archive'>
        <h3>Here is archive of my less appealing websites, these aren't worthy of presentation but I like to archive their links here</h3>
          <ZigZagGrid items={[

            <p className='zigzagItem'>A site for my cousin asked by his brother, made with love and original with ten minutes and updated multiple times, now a fine site</p>, 
            <p className='zigzagItem'><a href="https://jepuli124.github.io/CityboiDENUHateSite/" target="_blank">Denu site</a></p>,

            <p className='zigzagItem'>A site for my cousin's ex gf asked by herself, made with platonic love</p>,
            <p className='zigzagItem'><a href='https://jepuli124.github.io/s11r1sof1ahatesite/'>s11r1sof1ahatesite</a></p>,

            <p className='zigzagItem'>A/B testing site for a UX course (5 min mini site)</p>, 
            <p className='zigzagItem'><a href="https://jepuli124.github.io/abtesting/" target="_blank">A/B</a></p>,

            <p className='zigzagItem'>A site for frontend course, looks awful and is more of a responsibility test but includes a simple text based rp game</p>, 
            <p className='zigzagItem'><a href="https://jepuli124.github.io/SDSfrontend2025course/" target="_blank">Prepare your eyes</a></p>,

            <p className='zigzagItem'>A page for a game admin in goblin games</p>,
            <p className='zigzagItem'><a href='https://jepuli124.github.io/goblinHostingTM/' target="_blank">Goblin Hostin TM</a></p>
          ]}></ZigZagGrid>
          <br />
    </section>
    )
}

export default Archive