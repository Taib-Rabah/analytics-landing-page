"use client";

import { useLayoutEffect, useRef } from "react";
import { IO, NodeData, Observe, Unobserve } from "../utils";
import { boolToStr, strToBool, strToExit } from "../utils";

export default function useIO(options?: IntersectionObserverInit): IO {
  const ioRef = useRef<IntersectionObserver>();

  const callback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const node = entry.target as HTMLElement;
      const { id } = node.dataset;
      const once = strToBool(node.dataset.once, false);
      const oneWay = strToBool(node.dataset.oneWay, false);
      const exit = strToExit(node.dataset.exit, "both");
      if (!id) return;

      if (entry.isIntersecting || (entry.boundingClientRect.y < 0 && oneWay)) {
        node.dataset.intersecting = "true";
        if (once) {
          observer.unobserve(node);
        }
      } else if (exit === "bottom" && entry.boundingClientRect.y >= 0) {
        node.dataset.intersecting = "false";
      } else if (exit === "top" && entry.boundingClientRect.y < 0) {
        node.dataset.intersecting = "false";
      } else if (exit === "both") {
        node.dataset.intersecting = "false";
      }
    });
  };

  const observe: Observe = (refs, nodeData?: NodeData) => {
    const io = ioRef.current;
    if (!io) throw new Error("IntersectionObserver is not initialized");

    const observeNode = (node: HTMLElement, { id, once, oneWay, exit }: NodeData) => {
      node.dataset.id = id;
      node.dataset.once = boolToStr(once, true);
      node.dataset.oneWay = boolToStr(oneWay, false);
      node.dataset.exit = exit ?? "both";
      io.observe(node);
    };
    if (refs instanceof HTMLElement) {
      observeNode(refs, nodeData!);
    } else {
      refs.forEach(({ node, ...nodeData }) => {
        observeNode(node, { ...nodeData });
      });
    }
  };

  const unobserve: Unobserve = (refs) => {
    const io = ioRef.current;
    if (!io) throw new Error("IntersectionObserver is not initialized");
    if (refs instanceof HTMLElement) {
      io.unobserve(refs);
    } else {
      refs.forEach(({ node }) => {
        io.unobserve(node);
      });
    }
  };

  useLayoutEffect(() => {
    ioRef.current = new IntersectionObserver(callback, options);
  }, [options]);

  return { observe, unobserve };
}
