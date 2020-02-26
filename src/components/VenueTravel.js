import React from "react";

const VenueTravel = () => {
  return (
    <section className="venuetravel">
      <div className="container">
        <h1>
          Information <span className="dot"></span>
        </h1>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <h2>Venue</h2>

            <div className="content">
              <p>
                Again this year the event will be held at{" "}
                <a href="https://www.nordicchoicehotels.com/hotels/sweden/malmo/quality-hotel-view/special-offers/headstomper-2020/">
                  <b>Quality Hotel View</b>
                </a>
                . The hotel is fully <b>air conditioned</b>, features <b>multiple stages</b> and even a <b>bar!</b>
              </p>
              <p>
                Quality Hotel View will again this year provide us with <b>free ice cream</b>, <b>popcorn</b> and <b>coffee</b>!
              </p>
              <h3>Accommodation</h3>
              <p>
                We have an exclusive deal with Quality Hotel View (same as the venue) with flat rates for rooms that will stay the same forever. Regular rates may be higher or
                lower so make sure to check before booking.
              </p>
              <p>
                <a href="https://www.nordicchoicehotels.com/hotels/sweden/malmo/quality-hotel-view/special-offers/headstomper-2020/" className="btn btn-primary">
                  Book room
                </a>
              </p>
            </div>

            <div className="divider" />

            <div className="row">
              <div className="col-12 col-md-6">
                <h6>Address</h6>
                <p>
                  Hyllie stationsväg 29
                  <br />
                  215 32
                  <br />
                  Malmö, Sweden
                </p>
              </div>
              <div className="col-12 col-md-6">
                <h6>Phone</h6>
                <p>+46 40 37 41 00</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h2>Travel</h2>
            <div className="content">
              <p>
                Traveling to the venue couldnt be easier with <b>Copenhagen Airport</b> just one stop away! All flying guests are recommended to use this airport as it's the
                cloest.
              </p>

              <div className="divider" />

              <h3>From Copenhagen</h3>
              <p>
                Take the train from Copenhagen Airport towards Malmø Sweden and get off at the first stop, Hyllie station. The venue will be located right outside the trainstation.
              </p>

              <h3>From Malmø</h3>
              <p>Take the train from Malmø towards Copenhagen. Get off at Hyllie station.</p>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4">
            <h2>Register</h2>
            <div className="content">
              <p>
                <b>Regular Pass:</b> 35 €<br />
                <b>Tournament Entry:</b> 10 € per tournament
                <br />
                <b>Spectator Pass:</b> 10 €
              </p>
              <p>
                Regular passes are required to enter main lineup tournaments, whereas Spectator passes only give access to enter side-tournament. Both passes give full access to
                the venue itself all days.
              </p>
              <p>After closing registration, Spectator passes are only available for purchase on site at the venue.</p>
              <p>
                <b>Registration deadline:</b> 1 May 2020
              </p>
              <p>
                <a href="https://www.nordicchoicehotels.com/hotels/sweden/malmo/quality-hotel-view/special-offers/headstomper-2020/" className="btn btn-primary">
                  Register now!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueTravel;
