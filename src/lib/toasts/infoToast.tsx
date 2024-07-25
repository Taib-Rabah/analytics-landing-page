import { ExternalToast, toast } from "sonner";
import { isToastBanned, banToast } from "./utils";
import { CloseIcon, InfoIcon } from "./shared";

const showInfoToast = (text: string, data?: ExternalToast) => {
  if (data?.id && isToastBanned(data?.id)) {
    return;
  }

  const dismiss = (toastId: string | number) => toast.dismiss(toastId);

  const dismissAndBan = (toastId: string | number) => {
    dismiss(toastId);
    banToast(toastId);
  };

  toast.custom(
    (toastId) => (
      <div className="relative flex w-full flex-col gap-4 rounded-lg border-1 border-secondary-100 bg-primary px-4 py-4 text-white shadow-lg shadow-black/40">
        <p className="gap-1">
          <InfoIcon /> {text}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => dismiss(toastId)}
            className="group absolute left-0 top-0 z-10 grid place-items-center rounded-full border-1 border-secondary-100 bg-primary text-white duration-200 translate-[-50%_-50%]"
          >
            <CloseIcon />
          </button>
          <button
            onClick={() => dismissAndBan(toastId)}
            className="flex-1 rounded-full border-1 border-secondary-100 py-1 text-secondary-100 duration-200 hocus:bg-secondary-100/20 hocus:text-white"
          >
            Don&apos;t show again
          </button>
        </div>
      </div>
    ),
    {
      classNames: {
        toast: "w-full",
      },
      ...data,
    },
  );
};





export default showInfoToast;
