import zeri from '../assets/images/zeri.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Home</h1>
            <main>
                <section>
                    <img src={zeri} alt="Zeri's Picture" width={200} height={300}/>
                </section>
                <section>
                    <article>
                        <h1>Zeri Aaron E. Malacas</h1>
                        <h2>
                            Licensed Electronics Engineer and
                            Licensed Electronics Technician
                        </h2>
                        <p>
                            A future <strong>Software Engineer</strong> eager to make a change
                            and create a better future by providing solutions to contemporary
                            problems through designing and developing software applications that
                            prioritize interactivity and responsiveness of design.
                        </p>
                        <ul>
                            <Link to='https://www.linkedin.com/in/zeri-aaron-malacas' target='_blank'>LinkedIn</Link>
                            <Link to='https://github.com/zeriaaron' target='_blank'>GitHub</Link>
                            <Link to='https://www.facebook.com/zeriaaronmalacas/' target='_blank'>Facebook</Link>
                        </ul>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Home