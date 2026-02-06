export const getUrlParams = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    senderName: params.get('senderName') || 'Your lover',
    receiverName: params.get('receiverName') || 'My Love',
  };
};

export const buildShareUrl = (senderName: string, receiverName: string) => {
  const baseUrl = window.location.origin + window.location.pathname;
  const params = new URLSearchParams({
    senderName,
    receiverName,
  });
  return `${baseUrl}?${params.toString()}`;
};
