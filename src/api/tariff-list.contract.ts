import response_json from "./typing-response.json";

const DEFAULT_BODY = {
  func: "v2.instances.order.pricelist",
  out: "json",
  lang: "en",
  page: "1",
  page_size: "999",
  datacenter: "12,17,19",
};

export const TariffListContract = async ({
  datacenter,
}: {
  datacenter: string;
}) => {
  const url = `${import.meta.env.VITE_API_PROXY_URL}/v1/api/proxy/`;
  const body = new URLSearchParams({
    ...DEFAULT_BODY,
    datacenter,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  return response.json() as unknown as typeof response_json;
};
