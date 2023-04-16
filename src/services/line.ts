import { Axios } from "axios";

const url = "https://axum-line-noti-mizlrlh7oq-as.a.run.app";
// const url = "http://localhost:3000";

const lineServer = new Axios({
  baseURL: `${url}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function sendMsgToLine(
  msg: string,
  from: string,
  group: "PanPot" | "MewAum" = "MewAum"
): Promise<void> {
  try {
    const resp = await lineServer.post(
      "/line",
      JSON.stringify({
        name: from,
        msg: msg,
        group,
      })
    );
    console.log("line response", resp.data);
    return resp.data;
  } catch (error: any) {
    console.log("error", error);
  }
}
