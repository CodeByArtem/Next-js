
import React from "react";
import CompanyForm from "./company-form";
import Modal, { ModalProps } from '@/app/components/modal';





export  default function ComponentFormModal({
  onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={()=> onClose()} />
    </Modal>
  )
}