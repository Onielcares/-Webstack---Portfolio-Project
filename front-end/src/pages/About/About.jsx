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
        <div className="hidden md:block ">
          <img src={About_img} alt="" className="about_img" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 ">
        <h2 className="text-lg md:text-2xl">Developers</h2>
        <div className="flex gap-5 flex-wrap justify-center pb-8">
          <div className="bg-white rounded-lg p-2 flex flex-col justify-center items-center">
            <p className="font-medium md:text-lg">Grace Effiong</p>
            <p>Software developer</p>
            <div className="flex gap-5">
              <a href="https://github.com/Rubylena" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/grace-effiong"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/Grace_ffiong" target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2 flex flex-col justify-center items-center">
            <p className="font-medium md:text-lg">Opeyemi Odebode</p>
            <p>Backend developer</p>
            <div className="flex gap-5">
              <a href="https://github.com/surahj" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/surahj" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/odebodeopeyemi" target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2 flex flex-col justify-center items-center">
            <p className="font-medium md:text-lg">Peace Oluchi</p>
            <p>Frontend developer</p>
            <div className="flex gap-5">
              <a href="https://github.com/Peacebern" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/peace-oluchi-bernard-6b8811227"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/@sugarme45784473" target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2 flex flex-col justify-center items-center">
            <p className="font-medium md:text-lg">Nathaniel Dehinbo</p>
            <p>Backend developer</p>
            <div className="flex gap-5">
              <a href="https://github.com/Onielcares" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nathaniel-dehinbo"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/ONielCares" target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
