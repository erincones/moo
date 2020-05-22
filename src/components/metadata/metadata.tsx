import React from "react";
import { Helmet } from "react-helmet";

const title = `moo!`;
const description = `Another web version of cowsay`;
const url = `https://erincones.github.io/moo`;
const image = `${url}/cover.png`;

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

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);
