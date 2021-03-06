import React from "react";
import { BodyShort, GuidePanel, Link, Heading, Panel } from "@navikt/ds-react";
import Lenkepanel from "../lenkepanel/Lenkepanel";
import { dittNavVarslingerUrl, soknaderEttersendelse, soknadOgSkjemaUrl } from "../../urls";
import { useIntl } from "react-intl";
import "./MainComponent.css";
const MainComponent = () => {
  const translate = useIntl();

  return (
    <div className="page-wrapper">
      <Heading spacing size="xlarge" className="side-tittel">
        {translate.formatMessage({ id: "main.header", defaultMessage: "" })}
      </Heading>
      <Panel className="panel-1">
        <Heading size="small" className="heading-1">
          {translate.formatMessage({ id: "panel.heading-1", defaultMessage: "" })}
        </Heading>
        <BodyShort className="tekst-1">
          {translate.formatMessage({ id: "panel.tekst-1-del-1", defaultMessage: "" })}
          <Link href={dittNavVarslingerUrl}>
            {translate.formatMessage({ id: "panel.tekst-1-lenke", defaultMessage: "" })}
          </Link>
        </BodyShort>
      </Panel>
      <Panel className="panel-2">
        <div className="panel-2-tekst-wrapper">
          <Heading size="small" className="heading-2">
            {translate.formatMessage({ id: "panel.heading-2", defaultMessage: "" })}
          </Heading>
          <BodyShort>{translate.formatMessage({ id: "panel.tekst-2-del-1", defaultMessage: "" })}</BodyShort>
          <ul className="steg-liste">
            <li>
              {translate.formatMessage({ id: "panel.steg-1-tekst", defaultMessage: "Gå til " })}
              <Link href={soknadOgSkjemaUrl}>
                {translate.formatMessage({ id: "panel.steg-1-lenke", defaultMessage: "søknad og skjema " })}
              </Link>
            </li>
            <li>
              {translate.formatMessage({
                id: "panel.steg-2-tekst",
                defaultMessage: "Velg søknadskategori, deretter søknaden det gjelder",
              })}
            </li>
            <li>
              {translate.formatMessage({
                id: "panel.steg-3-tekst",
                defaultMessage: "Velg Ettersendelse (det kan være nødvendig å velge Ettersend på papir)",
              })}
            </li>
          </ul>
        </div>
      </Panel>
      <Lenkepanel />
    </div>
  );
};

export default MainComponent;
