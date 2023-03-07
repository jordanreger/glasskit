import { serve } from "https://deno.land/std@0.178.0/http/mod.ts";
import { contentType } from "https://deno.land/std@0.173.0/media_types/mod.ts";

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  let path = url.pathname;

  let page, content_type;

  // Make an issue to add more endings if you happen to need them!
  const static_text_endings  = [".css", ".xml", ".json", ".txt", ".svg", ".js"];
  const static_other_endings = [".jpg", ".png", ".webp", ".webm", ".mp4", ".gif", ".ico", ".pdf", ".woff", ".woff2", ".ttf", ".zip"];
  if(static_text_endings.some(ending => path.includes(ending))) {
    try {
      page = await Deno.readTextFile(`./book/${path}`);
      content_type = contentType(path.split(".")[path.split(".").length - 1]);
    } catch(_) {
      page = "Not found";
      content_type = "text/plain";
    }
  } else if(static_other_endings.some(ending => path.includes(ending))) {
    try {
      page = await Deno.readFile(`./book/${path}`);
      content_type = contentType(path.split(".")[path.split(".").length - 1]);
    } catch(_) {
      page = "Not found";
      content_type = "text/plain";
    }
  } else {
    const file_info = await Deno.stat(`./book${path}`);

    if(path === "/" || file_info.isDirectory === true) {
      path = `${path === "/" ? "/" : path + "/"}index.html`;
    }

    try {
      page = path.includes(".html") ? await Deno.readTextFile(`./book${path}`) : await Deno.readTextFile(`./book${path}.html`);
      content_type = "text/html; charset=utf-8";
    } catch(_) {
      page = await Deno.readTextFile(`./book/404.html`);
      content_type = "text/plain";
    }
    content_type = "text/html; charset=utf-8";
  }

  const response = new Response(page, { headers: { "content-type": content_type }});

  return response;
}

serve(handler);