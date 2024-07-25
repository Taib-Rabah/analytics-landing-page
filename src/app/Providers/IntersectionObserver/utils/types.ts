export type Exit = "top" | "bottom" | "both" | "none";

export type NodeData = {
  id: string;
  once?: boolean;
  oneWay?: boolean;
  exit?: Exit;
};
export type NodeWithData = {
  node: HTMLElement;
  id: string;
  once?: boolean;
  oneWay?: boolean;
  exit?: Exit;
};

export type Observe = {
  (refs: Set<NodeWithData>): void;
  (node: HTMLElement, nodeData: NodeData): void;
};
export type Unobserve = {
  (refs: Set<NodeWithData>): void;
  (node: HTMLElement): void;
};

export type IO = {
  observe: Observe;
  unobserve: Unobserve;
};
