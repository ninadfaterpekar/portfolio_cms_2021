import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import markdownStyles from "./markdown-styles.module.css";
import { BLOCKS } from "@contentful/rich-text-types";
import CustomImage from "./customImage";

const sectionRendererOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <CustomImage
          src={node.data?.target?.fields?.file?.url}
          alt={node.data?.target?.fields?.title}
        />
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p
        style={{
          color: "rgb(59, 69, 78)",
          fontSize: "14px",
          lineHeight: "1.5em",
          margin: 0,
          paddingBottom: "8px",
        }}
      >
        {children}
      </p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1
        style={{
          lineHeight: "1.2em",
          padding: "16px 0 16px 0",
          margin: 0,
          color: "black",
        }}
      >
        {children}
      </h1>
    ),
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li style={{ margin: 0, padding: 0 }}>{children}</li>
    ),
  },
};

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        {documentToReactComponents(content, sectionRendererOptions)}
      </div>
    </div>
  );
}
