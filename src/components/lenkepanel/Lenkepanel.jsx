import React from "react";
import { BodyShort, Heading, Link, Panel } from "@navikt/ds-react";
import { lenkeliste } from "../../urls";
import "./Lenkepanel.css";
import { useIntl } from "react-intl";

const Lenkepanel = () => {
  const translate = useIntl();

  return (
    <Panel className="lenkepanel">
      <Heading spacing size="small" className="header">
        Flere muligheter
      </Heading>
      {lenkeliste.map((lenke) => (
        <div className="lenke-wrapper">
          <Link className="lenke" href={lenke.url}>
            {lenke.tittel}
          </Link>
          <BodyShort size="small" className="ingress">
            {translate.formatMessage({ id: lenke.tekst, defaultMessage: "" })}
          </BodyShort>
        </div>
      ))}
    </Panel>
  );
};

export default Lenkepanel;
