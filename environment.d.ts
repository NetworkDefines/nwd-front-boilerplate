declare module '*.json' {
  const content;
  export default content;
}

declare module '*.png' {
  const content;
  export default content;
}

declare module '*.jpg' {
  const content;
  export default content;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.mp4' {
  const content;
  export default content;
}

declare module '*.pdf' {
  const content;
  export default content;
}
