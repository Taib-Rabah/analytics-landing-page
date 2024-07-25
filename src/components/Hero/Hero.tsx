import Decoration from "./Decoration";
import Content from "./Content";

export default function Hero() {
  return (
    <div className="relative ~md2/2xl:~pb-28/64 ~md2/xl:~pt-28/52 overflow-hidden">
      <Decoration />
      <Content />
    </div>
  );
}
