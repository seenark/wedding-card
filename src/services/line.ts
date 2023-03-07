import { Axios } from "axios";

const url = "https://line-noti.onrender.com";
// const url = "http://localhost:3000";
const lineServer = new Axios({
  baseURL: `${url}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function sendMsgToLine(msg: string, from: string): Promise<void> {
  try {
    const resp = await lineServer.post(
      "/line",
      JSON.stringify({
        name: from,
        msg: msg,
      })
    );
    console.log("line response", resp.data);
  } catch (error: any) {
    console.log("error", error);
  }
}
