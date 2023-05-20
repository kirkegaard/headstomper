import Container from "@/components/Container";
import Section from "@/components/Section";
import Grid from "@/components/Grid";
import Button from "@/components/Button";
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
                <b>Regular pass:</b> 50€ <small>(until 2023/05/19)</small>
              </li>
              <li>
                <b>Late pass:</b> 55€ <small>(until 2023/06/02)</small>
              </li>
            </ul>
            <ul className="mb-1 list-unstyled">
              <li>
                <b>Tournament Entry:</b> 10€ <small>(per tournament)</small>
              </li>
              <li>
                <b>Spectator:</b> 25€ <small>(until 2023/06/11 10:00)</small>
              </li>
            </ul>

            <p>
              All passes give full access to the venue itself all days{" "}
              <b>including free ice cream, popcorn, coffee and tea.</b>
            </p>

            <p>
              After registration is closed, spectator passes will only be
              available for purchase at the venue.
            </p>
            <p>
              <b className="text-highlight">
                Due to a greater interest than expected registration for both
                player passes and spectators passes are on currently hold.
                <br />
                We are currently investigating the possibility of raising the
                cap.
              </b>
            </p>
            <p>
              <b>Registration deadline:</b> June 6th 2023
            </p>

            <Register />
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
            <p>
              Use the discount code: <b>2110GR026840</b> when registering by
              phone and e-mail to get an exclusive deal on your room!
            </p>
            <h5>Address</h5>
            <p>
              Hyllie stationsväg 29
              <br />
              215 32
              <br />
              Malmö, Sweden
              <br />
              +46 40 37 41 00
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
