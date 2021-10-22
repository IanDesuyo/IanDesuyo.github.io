import NextHead from "next/head";

const Head = ({ title, description, image }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      {image && <meta property="og:image" content={image} />}
    </NextHead>
  );
};

export default Head;
