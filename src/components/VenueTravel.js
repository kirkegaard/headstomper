import React from 'react';

// import data from '../data/venuetravel';

import './VenueTravel.scss';

const VenueTravel = () => {
  // let { venue, travel } = data;

  return (
    <section className="section venuetravel is-medium">
      <div className="container">

        <h2 className="has-text-weight-bold is-uppercase is-size-1 has-margin-bottom-1">
          Information <span className="dot"></span>
        </h2>

        <div className="columns is-variable is-8 is-multiline">


          <div className="column is-4-desktop is-6-tablet">
            <h3 className="has-text-weight-bold is-size-3 has-margin-bottom-7">
              Venue
            </h3>

            <div className="content">
              <p>
                Again this year the event will be held at <a href="https://www.nordicchoicehotels.com/hotels/sweden/malmo/quality-hotel-view/special-offers/headstomper-2020/"><b>Quality Hotel View</b></a>. The hotel is fully <b>air conditioned</b>, features <b>multiple stages</b> and even a <b>bar!</b>
              </p>
              <p>
                Quality Hotel View will again this year provide us with <b>free ice cream</b>, <b>popcorn</b> and <b>coffee</b>!
              </p>
              <h5>Accommodation</h5>
              <p>We have an exclusive deal with Quality Hotel View (same as the venue) with flat rates for rooms that will stay the same forever. Regular rates may be higher or lower so make sure to check before booking.</p>
              <p>
                <a href="https://www.nordicchoicehotels.com/hotels/sweden/malmo/quality-hotel-view/special-offers/headstomper-2020/" className="button is-primary">Book room</a>
              </p>
            </div>

            <div className="divider has-margin-bottom-6" />

            <div className="columns is-gapless is-multiline">
              <div className="column is-6-desktop">
                <h4 className="has-text-weight-bold is-size-6">
                  Address
                </h4>
                <p>
                  Hyllie stationsväg 29<br />
                  215 32<br />
                  Malmö, Sweden
                </p>
              </div>
              <div className="column is-6-desktop">
                <h4 className="has-text-weight-bold is-size-6">
                  Phone
                </h4>
                <p>+46 40 37 41 00</p>
              </div>
            </div>

          </div>


          <div className="column is-4-desktop is-6-tablet">
            <h3 className="has-text-weight-bold is-size-3 has-margin-bottom-7">
              Travel
            </h3>
            <div className="content">
              <p>
                Traveling to the venue couldnt be easier with <b>Copenhagen Airport</b> just one stop away! All flying guests are recommended to use this airport as it's the cloest.
              </p>

              <div className="divider has-margin-bottom-6" />

              <h5>
                From Copenhagen
              </h5>
              <p>Take the train from Copenhagen Airport towards Malmø Sweden and get off at the first stop, Hyllie station. The venue will be located right outside the trainstation.</p>

              <h5>
                From Malmø
              </h5>
              <p>Take the train from Malmø towards Copenhagen. Get off at Hyllie station.</p>

            </div>
          </div>


          <div className="column is-4-desktop is-12-tablet">
            <h3 className="has-text-weight-bold is-size-3 has-margin-bottom-7">
              Register
            </h3>
            <div className="content">
              <p>
                <b>Regular Pass:</b> 35 €<br />
                <b>Tournament Entry:</b> 10 € per tournament<br />
                <b>Spectator Pass:</b> 10 €
              </p>
              <p>Regular passes are required to enter main lineup tournaments, whereas Spectator passes only give access to enter side-tournament. Both passes give full access to the venue itself all days.</p>
              <p>After closing registration, Spectator passes are only available for purchase on site at the venue.</p>
              <p><b>Registration deadline:</b> 1 May 2020</p>
              <p>
                <a href="https://www.nordicchoicehotels.com/hotels/sweden/malmo/quality-hotel-view/special-offers/headstomper-2020/" className="button is-primary">Register now!</a>
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default VenueTravel;