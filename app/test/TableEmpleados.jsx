// TablaEmpleados.jsx
"use client";

import { useEffect, useState } from "react";
import { Button, DeleteIcon, Table, UpdateIcon } from "@/components/simpleui";
import { Modal } from "@/components/simpleui";
import { deleteEmpleado, updateEmpleado } from "@/lib/actions";
import { FormEmpleado } from "./FormEmpleado";
import Link from "next/link";

export const TableEmpleados = ({ data, columns, sort, direction }) => {

    return (
        <Table
            data={data}
            columns={[
                {
                    name: "nombre",
                    label: "Nombre"
                },
                {
                    name: "empresa",
                    label: "Empresa"
                },
                {
                    name: "cargo",
                    label: "Cargo"
                }
            ]}
            sort={sort}
            direction={direction}
        />
    )
}