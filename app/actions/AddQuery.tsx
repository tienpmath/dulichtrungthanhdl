// /services/actions/AddQuery
"use server";

import { redirect } from "next/navigation";

export async function addQuery(formData: FormData) {
  const fullName = formData.get("fullName");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const ngaydi = formData.get("ngaydi");

  const nhaxe = formData.get("nhaxe");
  const diemdon = formData.get("diemdon");
  const diemtra = formData.get("diemtra");

  const nguoilon = formData.get("nguoilon");
  const treem = formData.get("treem");
  const datcoc = formData.get("datcoc");
  const nhaxenhan = formData.get("nhaxenhan");
  const chuyenkhoan = formData.get("chuyenkhoan");

  const status = formData.get("status");
  const confirm = formData.get("confirm");
  const nhanvien = formData.get("nhanvien");

  // console.log(fullName);

  // console.log(JSON.stringify({ fullName: fullName, email: email, messageBody: subject, phone: phone, subject: fullName }));

  const response = await fetch(`https://dalatmobile.com/api/v1/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: fullName,
      phone: phone,
      email: email,
      ngaydi: ngaydi,
      nhaxe: nhaxe,
      diemdon: diemdon,
      diemtra: diemtra,
      nguoilon: nguoilon,
      treem: treem,
      datcoc: 0,
      nhaxenhan: 0,
      chuyenkhoan: 0,
      status: 0,
      confirm: 0,
      nhanvien: "admin",
    }),
  });
  const result = await response.json();

  if (result) {
    console.log(result);
    //     //  message.success("Gửi data thành công succeed!")
    // const notify = () => toast("Wow so easy!");
    // toast("Bạn đã gửi thông tin thành công ");
    ////  notify();

    // <Noti />
    redirect(`/dat-ve-thanh-cong/${result.data._id}`);
  }
  return result;
}
