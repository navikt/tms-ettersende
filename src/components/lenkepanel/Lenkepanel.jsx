import React from "react";
import { BodyShort, Heading, Link, Panel } from "@navikt/ds-react";
import { lenkeliste } from "../../urls";
import "./Lenkepanel.css";
import { useIntl } from "react-intl";

const Lenkepanel = () => {
  const translate = useIntl();

  return (
    <div className="lenkepanel-wrapper">
      <Panel className="lenkepanel-1">
        <Heading spacing size="small" className="header">
          Flere muligheter
        </Heading>
        {lenkeliste.map((lenke) => (
          <div className="lenke-wrapper" key={lenke.tittel}>
            <Link className="lenke" href={lenke.url}>
              {lenke.tittel}
            </Link>
            <BodyShort size="small" className="ingress">
              {translate.formatMessage({ id: lenke.tekst, defaultMessage: "" })}
            </BodyShort>
          </div>
        ))}
      </Panel>
    </div>
  );
};

export default Lenkepanel;
