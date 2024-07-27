type Modifier = "bold" | "italic" | "underline" | "strikethrough" | "code";

export interface TextNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
}

type Children = (TextNode | LinkNode)[];

interface ParagraphNode {
  type: "paragraph";
  children: Children;
}

interface HeadingNode {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: Children;
}

interface ListItemNode {
  type: "list-item";
  children: Children;
}

interface ListNode {
  type: "list";
  format: "ordered" | "unordered";
  children: ListItemNode[];
}

interface QuoteNode {
  type: "quote";
  children: Children;
}

interface CodeNode {
  type: "code";
  children: Children;
}

interface LinkNode {
  type: "link";
  url: string;
  children: Children;
}

interface ImageNode {
  type: "image";
  image: {
    name: string;
    alternativeText: string;
    url: string;
    width: number;
    height: number;
    hash: string;
    ext: ".jpg" | ".png"; // TODO
    mime: "image/jpeg" | "todo"; // TODO
  };
}

export type StrapiRichTextBody = (
  | ParagraphNode
  | HeadingNode
  | ListNode
  | QuoteNode
  | CodeNode
  | LinkNode
  | ImageNode
)[];
