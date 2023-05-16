const file = await ((): Promise<string> => (
  Deno.readTextFile("./dist/server/entry.mjs")
))();

const text = ((file: string): string => (
  file.replace(/\"base\":\"\/person\/ettersende\/\"/i, "\"base\":\"\/person\/ettersende\"")
))(file);

((text): Promise<void> => (
  Deno.writeTextFile("./dist/server/entry.mjs", text)
))(text);

export {}
