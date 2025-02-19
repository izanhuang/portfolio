import nextra from "nextra";

const withNextra = nextra({});

export default withNextra({
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
});
