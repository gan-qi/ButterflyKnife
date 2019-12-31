import request from "@/utils/request";

export function saveFeedBack(data) {
  return request({
    url: "/feedback",
    method: "post",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: data
  });
}
