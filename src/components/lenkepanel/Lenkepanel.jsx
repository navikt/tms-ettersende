import React from "react";
import { BodyShort, Heading, Link, Panel } from "@navikt/ds-react";
import { lenkeliste } from "../../urls";
import "./Lenkepanel.css";

const Lenkepanel = () => {
  return (
    <Panel className="lenkepanel">
      <Heading spacing size="medium" className="header">
        Flere muligheter
      </Heading>
      {lenkeliste.map((lenke) => (
        <div className="lenke-wrapper">
          <Link className="lenke" href={lenke.url}>
            {lenke.tittel}
          </Link>
          <BodyShort size="small" className="ingress">
            Her skal det være tekst tilknyttet lenken
          </BodyShort>
        </div>
      ))}
    </Panel>
  );
};

export default Lenkepanel;
