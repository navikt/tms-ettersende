import { Panel } from "@navikt/ds-react/cjs/panel/Panel.js";
import { Heading } from "@navikt/ds-react/cjs/typography/Heading.js";
import { BodyShort } from "@navikt/ds-react/cjs/typography/BodyShort.js";
import { Link } from "@navikt/ds-react/cjs/link/Link.js";
import { kontaktOssUrl, skrivTilOssUrl } from "../../urls";
import "./Muligheter.css";

const Muligheter = () => {
  return (
    <div className="lenkepanel-wrapper">
      <Panel className="lenkepanel-1">
        <Heading spacing size="small" className="header">
          Flere muligheter
        </Heading>
        <div className="lenke-wrapper" key={"lenke.tittel"}>
          <Link className="lenke" href={kontaktOssUrl}>
            Kontakt oss
          </Link>
          <BodyShort size="small" className="ingress">
            For alle andre henvendelser til NAV, gå til Kontakt oss-siden på nav.no.
          </BodyShort>
        </div>
        <div className="lenke-wrapper" key={"lenke.tittel"}>
          <Link className="lenke" href={skrivTilOssUrl}>
            Skriv til oss
          </Link>
          <BodyShort size="small" className="ingress">
            Du kan sende beskjed om endringer i saken din. For eksempel endring i inntekt, familiesituasjon, jobbsituasjon eller opphold i utlandet.
          </BodyShort>
        </div>
      </Panel>
    </div>
  );
};

export default Muligheter;
