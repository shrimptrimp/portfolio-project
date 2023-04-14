import React from 'react'
import styles from './CV.module.scss'
import me from './me.jpg'
type CVProps = {

}

const CV: React.FC<CVProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Kasper Juhani Kukkonen</h1>
      <img src={me} alt="me"></img>
      <p>A student at Varia Myyrmäki</p>
      <p>An active programming student and hobbyist, and cooperative third-year senior camp counselor.</p>


      <h2>SKILLS</h2>
      <ul>-	Studying Unity, C#, Python, CSS, Lua, SQL, React Typescript, and Javascript.</ul>
      <ul>- Some experience leading groups in agile programming.</ul>
      <ul>-	Third-year camp counselor, able to cooperate with and take others into account.</ul>
      <ul>-	Programming hobbyist and software development student at Myyrmäki Varia.</ul>
      <ul>-	Immensely good english skills.</ul>
      <ul>-	Worked with computers from a very young age.</ul>
      <ul>- Experience with both Windows and Linux.</ul>
      <h2>WORK EXPERIENCE</h2>
      <h3>TET-Period at Mirum Agency</h3>
      <h4>21/10 - 1/11/2019</h4>
      <p>Office intern, I made Powerpoint presentations, assisted with IT-related issues like cable management,  <br />
        took part in meetings, was part of a study group for Kane's Soda Pop advertising, and helped photographers with recording an advertisement for Nokia phones.</p>

      <h3>Cooking group counselor at Hakunila Church</h3>
      <h4>10/2017 - 11/2017 </h4>
      <p>Directed a children's cooking group with some other volunteers.</p>
      <h3>Summer job as a snack salesman</h3>
      <h4>8/4 - 20/4/2018</h4>
      <div>I worked as a snack stall employee handing out snacks with my local church as a summer job.</div>
      <div>The job included attracting customers, taking customer orders, serving them and generally being entertaining.</div>
      <h3>Camp counselor at Hakunila Church</h3>
      <h4>2019 - </h4>
      <p>
      <div>I began taking counselor training almost immediately after my confirmation ceremony. I went to training for three years.</div>
      <div>As a counselor at several camps my responsibilities included but were not limited to ensuring the safety and wellbeing of the youths at the camp, doing games and sketches, </div>
      <div>teaching of the passages that the youths need to know to pass camp, leading bible study groups, acting as a general trust person and creating a positive atmosphere. </div>
      <div>After 3 years I was allowed to take senior camp counselor studies, which I took and now my responsibilities also include (in addition to the previous responsibilities) <br />
        training of newer counselors, and guiding of other counselors at camp.</div>
        </p>
      <h2>QUALIFICATIONS AND STUDIES</h2>
      <h3>Elementary School</h3>
      <h4>2011 - 2016</h4>

      <h3>Middle School at Sotunki Middle School</h3>
      <h4>2016 - 2020</h4>
      <h3>High School syllabus (left incomplete) </h3>
      <h4>2020 - 2021 </h4>
      <p>Left high school incomplete at Lumo. </p>

      <h3>Information and Communication Technologies basic degree </h3>
      <h4>5/1/2021 — 31/5/2024 (estimated) </h4>
      <p>Studying for the title of Software Developer at Myyrmäki Varia. I am also studying to be a Software Engineer at Metropolia College through a cross study program. </p>
      <h2>OTHER STUFF</h2>
      <p>I was granted a stipend through the Finnish Industrial Union for exemplary grades, cooperation and initiative.</p>
      <h2>CONTACT INFORMATION</h2>
      <ul>	Phone Number: +358449765887</ul>
      <ul>	E-Mail: kasperkukkonen08@gmail.com </ul>
    </div>
  )
}

export default CV