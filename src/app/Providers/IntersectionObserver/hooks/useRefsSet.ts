"use client";

import {  useEffect, useRef } from "react";
import { NodeData, NodeWithData } from "../utils";
import { useIOContext } from "../context";

export type AddNode = (nodeData: NodeData) => (node: HTMLElement | null) => void;

export default function useIOGlobal(): AddNode {
  const nodesSetRef = useRef<Set<NodeWithData>>(new Set());
  const { observe, unobserve } = useIOContext();

  const addNode = (nodeData: NodeData) => (node: HTMLElement | null) => {
    const nodesSet = nodesSetRef.current;
    const nodes = Array.from(nodesSet.values());
    if (node) {
      nodesSet.add({ node, ...nodeData });
    } else {
      const nodeToDelete = nodes.find(({ id }) => id === nodeData.id)!;
      nodesSet.delete(nodeToDelete);
    }
  };

  useEffect(() => {
    const nodes = nodesSetRef.current;
    observe(nodes);

    return () => {
      unobserve(nodes);
    };
  }, [observe, unobserve]);

  return addNode;
}
