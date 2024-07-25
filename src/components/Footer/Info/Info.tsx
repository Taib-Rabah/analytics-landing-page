import DesignerInfo from "./DesignerInfo";
import DeveloperInfo from "./DeveloperInfo";

export default function Info() {
  return (
    <div className="~xs/sm:~before:mr-0/8 ~xs/sm:~after:ml-0/8 isolate flex flex-wrap gap-4 pseudo:my-auto pseudo:h-0.25 pseudo:bg-secondary-100/30 xs:grid xs:grid-cols-[1fr_auto_auto_1fr] xs:pseudo:content-empty">
      <DesignerInfo />
      <DeveloperInfo />
    </div>
  );
}
