import Container from "@/components/Container";
import Section from "@/components/Section";
import Grid from "@/components/Grid";
import Button from "@/components/Button";

import styles from "./index.module.css";

const Information = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <h1 className="title">Information</h1>
        <Grid>
          <div>
            <h3 className="title">Venue</h3>
            <p>
              Again this year the event will be held at{" "}
              <a href="https://www.nordicchoicehotels.com/hotels/sweden/malmo/quality-hotel-view/special-offers/headstomper-2020/">
                Quality Hotel View
              </a>
              . The hotel is fully air conditioned, features multiple stages and
              even a bar!
            </p>
            <p>
              Quality Hotel View will again this year provide us with free ice
              cream, popcorn and coffee!
            </p>
            <p>
              We have an exclusive deal with Quality Hotel View (same as the
              venue) with flat rates for rooms that will stay the same forever.
              Regular rates may be higher or lower so make sure to check before
              booking.
            </p>
            <h5>Address</h5>
            <p>
              Hyllie stationsväg 29
              <br />
              215 32
              <br />
              Malmö, Sweden
            </p>

            <h5>Phone</h5>
            <p>+46 40 37 41 00</p>
            <Button>Book room</Button>
          </div>
          <div>
            <h3 className="title">Travel</h3>
            <p>
              Traveling to the venue couldnt be easier with Copenhagen Airport
              just one stop away! All flying guests are recommended to use this
              airport as it´s the cloest.
            </p>
            <h5>From Copenhagen</h5>
            <p>
              Take the train from Copenhagen Airport towards Malmø Sweden and
              get off at the first stop, Hyllie station. The venue will be
              located right outside the trainstation.
            </p>
            <h5>From Malmø</h5>
            <p>
              Take the train from Malmø towards Copenhagen. Get off at Hyllie
              station.
            </p>
          </div>
          <div>
            <h3 className="title">Register</h3>
            <ul className="mb-1 list-unstyled">
              <li>
                <b>Regular Pass:</b> 35 €
              </li>
              <li>
                <b>Tournament Entry:</b> 10 € per tournament
              </li>
              <li>
                <b>Spectator Pass:</b> 10 €
              </li>
            </ul>

            <p>
              Regular passes are required to enter main lineup tournaments,
              whereas Spectator passes only give access to enter
              side-tournament. Both passes give full access to the venue itself
              all days.
            </p>

            <p>
              After closing registration, Spectator passes are only available
              for purchase on site at the venue.
            </p>

            <p>
              <b>Registration deadline:</b> 1 May 2020
            </p>

            <Button>Register now</Button>
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export default Information;
