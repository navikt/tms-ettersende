const isProduction = process.env.NAIS_CLUSTER_NAME === "prod-gcp";

export const getEnvironment = () => {
  console.info(process.env.NAIS_CLUSTER_NAME);

  if (isProduction) {
    return "production";
  }

  return "development";
};

const VARSLER_URL = {
  development: "https://www.intern.dev.nav.no/minside/varsler",
  production: "https://www.nav.no/minside/varsler",
};

const SOKNAD_OG_SKJEMA_URL = {
  development: "https://www.intern.dev.no/soknader/nb/ettersendelse/person",
  production: "https://www.nav.no/soknader/nb/ettersendelse/person"
};

const KONTAKT_OSS_URL = {
  development: "https://www.intern.dev.no/person/kontakt-oss",
  production: "https://www.nav.no/person/kontakt-oss"
};

const SKRIV_TIL_OSS_URL = {
  development: "https://www.intern.dev.no/person/kontakt-oss/skriv-til-oss",
  production: "https://www.nav.no/person/kontakt-oss/skriv-til-oss"
};

export const soknadOgSkjemaUrl = SOKNAD_OG_SKJEMA_URL[getEnvironment()];
export const varslerUrl = VARSLER_URL[getEnvironment()];
export const kontaktOssUrl = KONTAKT_OSS_URL[getEnvironment()];
export const skrivTilOssUrl = SKRIV_TIL_OSS_URL[getEnvironment()];

// export const sosialHjelpUrl = "https://www.nav.no/sosialhjelp/innsyn/";
// export const soknaderEttersendelse = "https://www.nav.no/soknader/ettersendelse/person";
