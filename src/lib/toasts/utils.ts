export const getBannedToasts = () => JSON.parse(sessionStorage.getItem("banned-toasts") || "[]");

export const isToastBanned = (id: string | number) => {
  const bannedToasts = getBannedToasts();
  return bannedToasts.includes(id);
};

export const banToast = (id: string | number) => {
  const bannedToasts = getBannedToasts();
  if (!isToastBanned(id)) {
    bannedToasts.push(id);
    sessionStorage.setItem("banned-toasts", JSON.stringify(bannedToasts));
  }
};