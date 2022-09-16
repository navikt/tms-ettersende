import { getEnvironment } from "./environment";

const BASE_URL = {
  local: "https://localhost:3000",
  development: "https://www.dev.nav.no",
  production: "https://www.nav.no",
};

const MIN_SIDE = {
  local: "https://localhost:3000/person/dittnav",
  development: "https://www.dev.nav.no/minside",
  production: "https://www.nav.no/minside",
};

const SOKNAD_OG_SKJEMA = {
  local: "https://localhost:3000/ettersendelse",
  development: "https://www.dev.nav.no/ettersendelse",
  production: "https://www.nav.no/ettersendelse",
};

export const baseUrl = BASE_URL[getEnvironment()];
export const minSideUrl = MIN_SIDE[getEnvironment()];
export const soknadOgSkjemaUrl = SOKNAD_OG_SKJEMA[getEnvironment()];

export const dittNavVarslingerUrl = `${minSideUrl}/varslinger`;
export const kontaktOssUrl = `${baseUrl}/person/kontakt-oss`;
export const skrivTilOssUrl = `${baseUrl}/person/kontakt-oss/skriv-til-oss`;
export const sosialHjelpUrl = `${baseUrl}/sosialhjelp/innsyn/`;
export const soknaderEttersendelse = `${baseUrl}/soknader/ettersendelse/person`;

export const lenkeliste = [
  {
    tittel: "Kontakt oss",
    url: kontaktOssUrl,
    tekst: "kontakt.oss-tekst",
  },
  {
    tittel: "Skriv til oss",
    url: skrivTilOssUrl,
    tekst: "skriv.til.oss-tekst",
  },
];
