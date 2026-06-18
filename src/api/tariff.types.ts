import response from "./typing-response.json";

export type Tariff = (typeof response)["doc"]["list"][0]["elem"][number];
