import { getEnvironment } from "./environment.ts";

const KONTAKT_OSS_URL = {
  dev: "https://www.ekstern.dev.nav.no/kontaktoss",
  prod: "https://www.nav.no/person/kontakt-oss"
};

const SKJEMA_URL = {
  dev: "https://www.ekstern.dev.nav.no/ettersende",
  prod: "https://www.nav.no/soknader/nb/ettersendelse/person"
};

const SKRIV_TIL_OSS_URL = {
  dev: "https://www.intern.dev.no/person/kontakt-oss/skriv-til-oss",
  prod: "https://www.nav.no/person/kontakt-oss/skriv-til-oss"
};

const VARSLER_URL = {
  dev: "https://www.intern.dev.nav.no/minside/varsler",
  prod: "https://www.nav.no/minside/varsler",
};

export const kontaktOssUrl = KONTAKT_OSS_URL[getEnvironment()];
export const skjemaUrl = SKJEMA_URL[getEnvironment()];
export const skrivTilOssUrl = SKRIV_TIL_OSS_URL[getEnvironment()];
export const varslerUrl = VARSLER_URL[getEnvironment()];

// export const sosialHjelpUrl = "https://www.nav.no/sosialhjelp/innsyn/";
// export const soknaderEttersendelse = "https://www.nav.no/soknader/ettersendelse/person";
