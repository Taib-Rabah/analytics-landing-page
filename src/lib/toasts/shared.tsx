export function InfoIcon() {
  return (
    <svg
      className="inline -translate-y-0.5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      height="20"
      width="20"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="duration-inherit"
    >
      <rect width="28" height="28" rx="14" className="group-hocus:fill-secondary-100/20 duration-inherit" />
      <rect
        x="8.9183"
        y="17.6605"
        width="12.3633"
        height="2.24788"
        rx="1.12394"
        transform="rotate(-45 8.9183 17.6605)"
        className="group-hocus:fill-white fill-secondary-100 duration-inherit"
      />
      <rect
        x="10.5078"
        y="8.91846"
        width="12.3633"
        height="2.24788"
        rx="1.12394"
        transform="rotate(45 10.5078 8.91846)"
        className="group-hocus:fill-white fill-secondary-100 duration-inherit"
      />
    </svg>
  );
}
