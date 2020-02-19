import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const social = [
  {
    title: "Discord",
    link: "https://discord.gg/MAGpuHw",
    icon: ["fab", "discord"]
  },
  {
    title: "Twitter",
    link: "https://twitter.com/headstomper",
    icon: ["fab", "twitter"]
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/HeadstomperTournament/",
    icon: ["fab", "facebook"]
  },
  {
    title: "E-Mail",
    link: "mailto:contact@headstomper.com",
    icon: ["fas", "envelope"]
  }
];

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h1>
          Contact <span className="dot"></span>
        </h1>
        <div className="row">
          <div className="col-12 col-md-4">
            <p>
              If you have any questions please contact us on one of the
              following services. We're always happy to answer any questions you
              might have!
            </p>
          </div>
          <div className="col-12 col-md-8 text-center services">
            {social.map((s, i) => (
              <a className="d-block d-sm-inline mr-4" href={s.link}>
                <FontAwesomeIcon icon={s.icon} className="mr-1" />
                <b>{s.title}</b>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
