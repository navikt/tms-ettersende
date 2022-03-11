import React from "react";
import { BodyShort, GuidePanel, Link } from "@navikt/ds-react";
import Lenkepanel from "../lenkepanel/Lenkepanel";
import { dittNavVarslingerUrl } from "../../urls";
import "./MainComponent.css";
import { useIntl } from "react-intl";
import Tilbakeknapp from "../tilbakeknapp/Tilbakeknapp";

const MainComponent = () => {
  const translate = useIntl();

  return (
    <div className="page-wrapper">
      <GuidePanel poster className="guide-panel">
        <BodyShort className="tekst-1">
          {translate.formatMessage({ id: "panel.tekst-1-del-1", defaultMessage: "" })}
          <Link>{translate.formatMessage({ id: "panel.tekst-1-lenke", defaultMessage: "" })}</Link>
          {translate.formatMessage({ id: "panel.tekst-1-del-2", defaultMessage: "" })}
        </BodyShort>
        <BodyShort className="tekst-2">
          {translate.formatMessage({ id: "panel.tekst-2-del-1", defaultMessage: "" })}
          <Link>{translate.formatMessage({ id: "panel.tekst-2-lenke", defaultMessage: "" })}</Link>
          {translate.formatMessage({ id: "panel.tekst-2-del-2", defaultMessage: "" })}
        </BodyShort>
        <Tilbakeknapp />
      </GuidePanel>
      <Lenkepanel />
    </div>
  );
};

export default MainComponent;
