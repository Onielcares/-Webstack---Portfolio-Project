import "./about.css"
import About_img from "../../assets/about.svg"

const About = () => {
  return (
    <section className="grid">
        <div className="grid about_section_cont">
            <div className="flex about_sub_section " >
                <h2 className="about_header-text">About Easy</h2>
                <p className="sent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, itaque et. Eligendi, sint! Ab, facilis!</p>
                <p className="sent_me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsam.</p>
                <div className="flex protractor">
                    <span className="circle"></span>
                    <p>Lorem, ipsum.</p>
                </div>
            </div>
            <div className="about_sub_section2 ">
                <img src={About_img} alt="" className="about_img" />
            </div>
        </div>
    </section>

  )
}

export default About