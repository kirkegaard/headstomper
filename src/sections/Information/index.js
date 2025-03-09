import Container from "@/components/Container";
import Section from "@/components/Section";
import Grid from "@/components/Grid";
import Register from "@/components/Register";

import styles from "./index.module.css";

const Information = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <h1 className="title">Information</h1>
        <Grid>
          <div>
            <h3 className="title">Register</h3>
            <ul className="mb-1 list-unstyled">
              <li>
                <s>
                  <b>Early bird:</b> €50
                </s>
                <br />
                <small>(Only 100 available)</small>
              </li>
              <li>
                <b>Standard pass:</b> €60 <br />
                <small>(For main and side events)</small>
              </li>
              <li>
                <b>Community pass:</b> €40 <br />
                <small>(For spectator and side events)</small>
              </li>
            </ul>

            <p>
              All passes give full access to the venue itself all days{" "}
              <b>including free ice cream, popcorn, coffee and tea.</b> Register
              now and customize your own player badge with special artwork and
              your gamertag!
            </p>

            <p>
              After registration is closed, community passes will only be
              available for purchase at the venue.
            </p>

            <Register />
            <p>
              <small>Last day to register is May 23rd</small>
            </p>
          </div>
          <div>
            <h3 className="title">Venue</h3>
            <p>
              Again this year the event will be held at{" "}
              <a href="https://www.nordicchoicehotels.com/hotels/sweden/malmo/quality-hotel-view/">
                Quality Hotel View
              </a>
              . The hotel is fully air conditioned, features multiple stages and
              even a bar!
            </p>
            <p className="lead">
              Use the discount code: <b>Headstomper2025</b>
            </p>
            <p>
              Rooms are limited and it is a busy weekend so book now! Remember
              to let them know that you're there for Headstomper!
            </p>
            <h5>Address</h5>
            <p>
              Hyllie stationsväg 29
              <br />
              215 32
              <br />
              Malmö, Sweden
              <br />
              (+460) 40 37 41 00
              <br />
              <a href="mailto:q.view@choice.se?body=Discount code: 2110GR026840">
                q.view@choice.se
              </a>
            </p>
          </div>
          <div>
            <h3 className="title">Travel</h3>
            <p>
              Traveling to the venue couldnt be easier with Copenhagen Airport
              just one stop away! All flying guests are recommended to use this
              airport as it´s the cloest.
            </p>
            <h5>From Copenhagen Airport</h5>
            <p>
              Take the train from Copenhagen Airport towards Malmö Sweden and
              get off at the first stop, Hyllie station. The venue will be
              located right outside the trainstation.
            </p>
            <h5>From Malmö Airport</h5>
            <p>
              Take the train from Malmö towards Copenhagen. Get off at Hyllie
              station. However Copenhagen is much closer!
            </p>
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export default Information;
