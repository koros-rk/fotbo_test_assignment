import response from "./respons.json";

// const DEFAULT_BODY = {
//   func: "v2.instances.order.pricelist",
//   out: "json",
//   lang: "en",
//   page: 1,
//   page_size: 999,
//   datacenter: "12,17,19",
// };

export const TariffListContract = async () => {
  // const response = await fetch("https://api.zomrodev.online/v1/api/proxy/", {
  //   headers: { contentType: "x-www-form-urlencoded" },
  //   body: JSON.stringify({ ...DEFAULT_BODY }),
  //   method: "POST",
  // });
  return response;
};
