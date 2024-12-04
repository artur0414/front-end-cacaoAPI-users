// updated password component

"use client";

import { UpdatePasswordModalProps } from "@/types/updatePasswordType";
import UpdatePasswordForm from "../forms/UpdatePasswordForm";

export default function UpdatePassword({
  showModal,
}: UpdatePasswordModalProps) {
  return <UpdatePasswordForm closeModal={showModal} />;
}
