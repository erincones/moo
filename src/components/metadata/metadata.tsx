import React from "react";
import { Helmet } from "react-helmet";

interface Resolution {
  w: string;
  h: string;
}

const title = `moo!`;
const description = `Another web version of cowsay`;
const url = `https://erincones.github.io/moo`;
const image = `${url}/cover.png`;
const resolution: Resolution = { w: `1920`, h: `1080` };

export const Metadata = (): JSX.Element => (
  <Helmet defer={false}>
    <html lang="en" />

    <title>{title}</title>

    <meta name="description" content={description} />
    <meta name="keywords" content="cowsay, cowthink, moo" />
    <meta name="author" content="Erick Rincones" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content={resolution.w} />
    <meta property="og:image:height" content={resolution.h} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:creator" content="@ErickRincones" />
    <meta name="twitter:image" content={image} />

    <meta name="google-site-verification" content="RScugNg5R9w-kAFDk8kWA0WqSmY9_UXU4fe1Y9KfjJs" />
  </Helmet>
);
