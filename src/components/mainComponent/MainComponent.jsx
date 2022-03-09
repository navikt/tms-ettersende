import React from "react";
import { GuidePanel, Link } from "@navikt/ds-react";
import Lenkepanel from "../lenkepanel/Lenkepanel";
import { dittNavVarslingerUrl } from "../../urls";
import "./MainComponent.css";

const MainComponent = () => {
  return (
    <div className="page-wrapper">
      <GuidePanel poster className="guide-panel">
        Saksbehandlingstiden varierer fra kommune til kommune. Hvis det går mer enn X måneder siden du søkte, skal du få
        brev om at saksbehandlingstiden er forlenget.
        <ul className="lenkeliste">
          <li>
            <Link href={dittNavVarslingerUrl}>Ditt NAV varslinger</Link>
          </li>
        </ul>
      </GuidePanel>
      <Lenkepanel />
    </div>
  );
};

export default MainComponent;
