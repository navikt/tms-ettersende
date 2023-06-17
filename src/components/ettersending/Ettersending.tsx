import Muligheter from "../muligheter/Muligheter";
import { varslerUrl, skjemaUrl } from "../../urls";
import { BodyShort, Heading, Link, Panel } from "@navikt/ds-react";
import "./Ettersending.css";

const Ettersending = () => {
  return (
    <div className="page-wrapper">
      <Heading spacing size="xlarge" className="side-tittel">
        Vedlegg og dokumentasjon
      </Heading>
      <Panel className="panel-1">
        <Heading size="small" className="heading-1">
          Ettersende dokumentasjon
        </Heading>
        <BodyShort className="tekst-1">
          Når du sendte inn søknaden kan du ha blitt bedt om ulike vedlegg som dokumentasjon. Hvis noe manglet kan du ha
          fått en oppgave om å ettersende til søknaden. <Link href={varslerUrl}>Gå til oversikt over oppgavevarsler.</Link>
        </BodyShort>
      </Panel>
      <Panel className="panel-2">
        <div className="panel-2-tekst-wrapper">
          <Heading size="small" className="heading-2">
            Finner du ikke en oppgave for å laste opp vedlegg eller ettersende dokumentasjon?
          </Heading>
          <BodyShort>
            Da kan du gjøre følgende:
          </BodyShort>
          <ul className="steg-liste">
            <li>
              Gå til <Link href={skjemaUrl}>søknad og skjema</Link>
            </li>
            <li>
              Velg søknadskategori, deretter søknaden det gjelder
            </li>
            <li>
              Velg Ettersendelse (det kan være nødvendig å velge Ettersend på papir)
            </li>
          </ul>
        </div>
      </Panel>
      <Muligheter />
    </div>
  );
}

export default Ettersending;
