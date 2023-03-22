import "./about.css";
import About_img from "../../assets/about.svg"; /*this is because the image here is a comment*/

const About = () => {
  return (
    <section className="grid about_section full_height">
      <div className="grid about_section_cont">
        <div className="flex about_sub_section ">
          <h2 className="font-bold text-3xl">About SHOP EASY</h2>
          <p className="sent">
            Shop Easy is an innovative web application that is designed to make
            your shopping experience easier and more convenient than ever
            before. With a wide range of products and stores to choose from,
            Shop Easy ensures that you can find everything you need in one
            place, without the hassle of moving from store to store. Our
            application is perfect for individuals who are looking for an easy
            and convenient way to shop without physically leaving their homes.
            Whether you're a busy professional, a stay-at-home parent, or
            someone who just doesn't have the time to go out and search for what
            you need, Shop Easy is here to help.
          </p>

          <p className="sent_me">
            Our user-friendly platform offers a wide range of options and
            filters to help you find exactly what you're looking for, whether
            it's clothing, electronics, household items, or anything else. With
            Shop Easy, you can browse through a variety of products, compare
            prices and make informed buying decisions without any hassle.
          </p>
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
  );
};

export default About;
