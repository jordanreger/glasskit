import { serve } from "https://deno.land/std@0.173.0/http/mod.ts";
import { contentType } from "https://deno.land/std@0.173.0/media_types/mod.ts";
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname;

  let page, content_type;

  // Make an issue to add more endings if you happen to need them!
  const static_text_endings  = [".css", ".xml", ".json", ".txt"];
  const static_other_endings = [".jpg", ".JPG", ".png", ".PNG", ".webp", ".webm", ".mp4", ".gif", ".ico", ".pdf", ".woff", ".woff2", ".ttf"];
  if(static_text_endings.some(ending => path.includes(ending))) {
    try {
      page = await Deno.readTextFile(`./static${path}`);
      content_type = contentType(path.split(".")[path.split(".").length - 1]);
    } catch(_) {
      page = "Not found";
      content_type = "text/plain";
    }
  } else if(static_other_endings.some(ending => path.includes(ending))) {
    try {
      page = await Deno.readFile(`./static${path}`);
      content_type = contentType(path.split(".")[path.split(".").length - 1]);
    } catch(_) {
      page = "Not found";
      content_type = "text/plain";
    }
  } else {
    if(path === "/") {
      page = `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"><link rel="preload" href="/index.css" as="style"><link rel="stylesheet" media="all" href="/index.css" type="text/css"><link rel="icon" href="/glasskit.png" />` + `<h1>GlassKit</h1>` + Marked.parse(await Deno.readTextFile(`./index.md`)).content;
      content_type = "text/html; charset=utf-8";
    } else {
      try {
        page = `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"><link rel="preload" href="/index.css" as="style"><link rel="stylesheet" media="all" href="/index.css" type="text/css">` + `<h1 style="text-transform: capitalize"><a href="/" style="text-decoration: none"><--</a>${" "}${path.replace(".md", "").split("/")[path.split("/").length - 1]}</h1>` + Marked.parse(await Deno.readTextFile(`.${path}${path.includes(".md") ? "" : ".md"}`)).content;
        content_type = "text/html; charset=utf-8";
      } catch(_) {
        page = "404";
        content_type = "text/plain";
      }
    }
  }

  const response = new Response(page, { headers: { "content-type": content_type }});

  return response;
}

serve(handler);