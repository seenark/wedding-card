import { component$ } from "@builder.io/qwik";

type Props = {};

export default component$<Props>(() => {
  return (
    <div class="w-full h-full flex flex-col justify-center items-center gap-2 p-4">
      <div>
        <h1 class="text-[24px] whitespace-nowrap">
          คุณอยากจะบอกอะไรกับบ่าวสาว
        </h1>
      </div>
      <div class="w-full flex flex-col justify-center items-start gap-1">
        <div class="w-full">
          <label class="label">
            <span class="label-text">ส่งข้อความถึงบ่าวสาว</span>
          </label>
          <textarea
            placeholder="เขียนคำอวยพรตรงนี้ 🥰"
            class="w-full textarea textarea-md textarea-bordered"
          ></textarea>
        </div>
        <p class="text-gray-500 text-[0.8rem] self-end">
          **ข้อความจะถูกส่งไปที่ Line ของบ่าวสาวโดยตรง
        </p>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">ลงชื่อ</span>
          </label>
          <input
            type="text"
            placeholder="ชื่อของคุณ"
            class="input input-bordered w-full"
          />
        </div>
      </div>
      <button class="btn btn-sm bg-amber-900 hover:bg-amber-800">
        ส่งข้อความ
      </button>
    </div>
  );
});
