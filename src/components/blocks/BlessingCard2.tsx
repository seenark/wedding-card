import Image2 from "../images/Image2";
import Picture2 from "../images/Picture2";
import P9_1SingleOnHalf from "~/imgs/pot/photo-09-1.jpg?preset=single-on-half";
import { $, component$, useSignal } from "@builder.io/qwik";
import { sendMsgToLine } from "~/services/line";

type Props = {};
export default component$<Props>(() => {
  const msg = useSignal("");
  const from = useSignal("");
  const isShowToast = useSignal(false);

  const showToast = $(async () => {
    isShowToast.value = true;
    const timeout = setTimeout(() => {
      isShowToast.value = false;
      clearTimeout(timeout);
    }, 5000);
  });

  const onClickSendMsg = $(async () => {
    console.log("msg", msg.value);
    console.log("from", from.value);
    await sendMsgToLine(msg.value, from.value, "PanPot");
    showToast();
  });

  return (
    <section>
      <div class="bg-pink-100/50 shadow-md overflow-hidden flex flex-col items-center justify-center">
        {isShowToast.value && (
          <div class="toast toast-top toast-end">
            <div class="alert alert-success bg-pink-200">
              <div>
                <span>คำอวยพรของคุณได้ถูกส่งไปหาบ่าวสาวแล้ว</span>
              </div>
            </div>
          </div>
        )}
        <Picture2 imagePreset={P9_1SingleOnHalf} class="w-full">
          <Image2
            imagePreset={P9_1SingleOnHalf}
            class="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover object-top"
          />
        </Picture2>
        <div class="px-4 py-4">
          <h3 class="text-lg font-semibold text-pink-800">
            อวยพรให้กับบ่าวสาว
          </h3>
          <p class="text-pink-600 mt-2">
            คำอวยพรของคุณจะถูกส่งต่อไปที่ line ของบ่าวสาวโดยตรง 💌 😍
          </p>
          <form class="mt-4 max-w-[500px]">
            <textarea
              class="w-full bg-white px-4 py-2 border-pink-300 text-gray-700 rounded-lg outline-none focus:outline-pink-500 focus:border-pink-500 focus:ring-pink-500"
              rows={4}
              placeholder="Write your blessing here"
              value={msg.value}
              onChange$={(e) => (msg.value = e.target.value)}
            ></textarea>
            <input
              placeholder="ลงชื่อ"
              class="rounded-lg bg-white px-4 py-2 text-gray-700 border-pink-300 outline-none focus:outline-pink-500 w-full focus:ring-pink-500"
              value={from.value}
              onChange$={(e) => (from.value = e.target.value)}
            />
            <button
              type="button"
              onClick$={onClickSendMsg}
              class="w-full mt-4 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-300"
            >
              ส่งคำอวยพร
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});
