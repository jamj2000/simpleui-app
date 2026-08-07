import Link from "next/link";
import { Alert, Badge, Dropdown, Dropdown2, Modal, Popover, Separator, Skeleton, Space, Spinner, Tooltip, InputText, HeartIcon, CrossIcon, InputGroup, InputNumber, InputSelect, DragAndDrop, Button, Form, Pagination, Table, List, CircleIcon, SquareIcon, StarIcon, HexagonIcon } from "@/components/simpleui";
import { Code } from "bright";
import { Suspense } from "react";
import { CreateEmpleado, DeleteEmpleado, UpdateEmpleado, ViewEmpleado } from "./Actions";
import { getEmpleados } from "@/lib/data";
import { highlight } from "sugar-high";



const Codigo = ({ children, ...props }) => (
  <div className='my-2 overflow-auto bg-slate-50 dark:bg-slate-950 p-4 rounded-md border border-slate-200 dark:border-slate-800'>
    <pre dangerouslySetInnerHTML={{ __html: highlight(children) }}   {...props} />
  </div>
)

export default async function Page({ searchParams }) {

  // Code.theme = "github-light"

  return (
    <div className="min-h-full">
      <h1 className="text-5xl">Simple UI</h1>


      <h2 className="text-2xl my-4"> Descarga los componentes</h2>

      Todos los componentes se descargaran a la carpeta <span className="font-mono text-blue-400">src/components/simpleui</span> o <span className="font-mono text-blue-400">components/simpleui</span> según tengas configurado tu proyecto.

      <Codigo>
        {`npx  simpleui.dev  init`}
      </Codigo>



      <h2 className="text-2xl my-4">Importa los componentes</h2>

      <Codigo>
        {`import {Alert, Button, Form} from "@/componentes/simpleui"`}
      </Codigo>




      <h2 className="text-2xl my-4"> Usa los componentes</h2>

      <Codigo>
        {`<Alert>      
  ¡Información!  
</Alert> `}
      </Codigo>

    </div>
    // <div>

    //   <h1 className="text-4xl text-indigo-800 dark:text-indigo-300">Componentes SSR</h1>

    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5" name="alert">Alert</h2>


    //   <Alert>
    //     <strong>¡Información!</strong> Este es un mensaje informativo.
    //   </Alert>

    //   <Alert type="success">
    //     <strong>¡Éxito!</strong> Este es un mensaje de éxito.
    //   </Alert>

    //   <Alert type="warning">
    //     <strong>¡Aviso!</strong> Este es un mensaje de aviso.
    //   </Alert>

    //   <Alert type="error">
    //     <strong>¡Error!</strong> Este es un mensaje de error.
    //   </Alert>


    //   <Alert small>
    //     <strong>¡Información!</strong> Este es un mensaje informativo.
    //   </Alert>

    //   <Alert type="success" small>
    //     <strong>¡Éxito!</strong> Este es un mensaje de éxito.
    //   </Alert>

    //   <Alert type="warning" small>
    //     <strong>¡Aviso!</strong> Este es un mensaje de aviso.
    //   </Alert>

    //   <Alert type="error" small>
    //     <strong>¡Error!</strong> Este es un mensaje de error.
    //   </Alert>


    //   <h3 className="text-xl font-bold my-4">Propiedades</h3>
    //   <Prop name="type" value="info" values={["info", "success", "warning", "error"]} />
    //   <Prop name="small" />




    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5"><a name="badge">Badge</a></h2>


    //   <Badge>Información</Badge>
    //   <Badge type="success">Éxito</Badge>
    //   <Badge type="warning">Aviso</Badge>
    //   <Badge type="error">Error</Badge>

    //   <h3 className="text-xl font-bold my-4">Propiedades</h3>
    //   <Prop name="type" value="info" values={["info", "success", "warning", "error"]} />



    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Space, Separator</h2>


    //   <Space height={20} />
    //   <Separator />
    //   <Space height={20} />
    //   <Separator />
    //   <Space height={20} />


    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Separator, Tooltip, Popover, Dropdown, Dropdown2</h2>

    //   <div className="flex items-center gap-4 flex-wrap">

    //     <Popover title="Popover" className="bg-blue-100 dark:bg-blue-500 px-4 py-2 border border-slate-300 dark:border-slate-600">
    //       <div className="flex flex-col gap-1">
    //         <Link href="#" className="hover:opacity-60 active:opacity-40">Dashboard</Link>
    //         <Link href="#" className="hover:opacity-60 active:opacity-40">Autores</Link>
    //         <Link href="#" className="hover:opacity-60 active:opacity-40">Libros</Link>
    //         <Link href="#" className="hover:opacity-60 active:opacity-40">Prestamos</Link>
    //       </div>
    //     </Popover>

    //     <Separator type="vertical" />

    //     <Dropdown title="Dropdown" className="bg-blue-100 dark:bg-blue-500 px-4 py-2 border border-slate-300 dark:border-slate-600">
    //       <div className="flex flex-col gap-2">
    //         <Link href="#" className="hover:opacity-60 active:opacity-40">Dashboard</Link>
    //         <Link href="#" className="hover:opacity-60 active:opacity-40">Autores</Link>
    //         <Link href="#" className="hover:opacity-60 active:opacity-40">Libros</Link>
    //         <Link href="#" className="hover:opacity-60 active:opacity-40">Prestamos</Link>
    //       </div>
    //     </Dropdown>

    //     <Separator type="vertical" />

    //     <Dropdown2 title="Dropdown2" className="bg-blue-100 dark:bg-blue-500 px-4 py-2 border border-slate-300 dark:border-slate-600">
    //       <div className="flex flex-col gap-2">
    //         <Link href="#" className="hover:opacity-60 active:opacity-40">Dashboard</Link>
    //         <Link href="#" className="hover:opacity-60 active:opacity-40">Autores</Link>
    //         <Link href="#" className="hover:opacity-60 active:opacity-40">Libros</Link>
    //         <Link href="#" className="hover:opacity-60 active:opacity-40">Prestamos</Link>
    //       </div>
    //     </Dropdown2>
    //   </div>

    //   <Tooltip title="Esto es un tooltip">
    //     <div className="bg-blue-100 dark:bg-blue-500 px-4 py-2 border border-slate-300 dark:border-slate-600">
    //       Al pasar el ratón por encima de este párrafo se mostrará un pequeño mensaje de ayuda o tooltip.
    //     </div>
    //   </Tooltip>

    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">ToolTip, Modal</h2>

    //   <Modal id="my-dialog" trigger={
    //     <div className="group relative flex gap-2 items-center border border-slate-300 px-4 py-2 rounded-md cursor-pointer">
    //       <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M8.4 13.8C8.4 13.8 9.75 15.6 12 15.6C14.25 15.6 15.6 13.8 15.6 13.8M14.7 9.3H14.709M9.3 9.3H9.309M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15.15 9.3C15.15 9.54853 14.9485 9.75 14.7 9.75C14.4515 9.75 14.25 9.54853 14.25 9.3C14.25 9.05147 14.4515 8.85 14.7 8.85C14.9485 8.85 15.15 9.05147 15.15 9.3ZM9.75 9.3C9.75 9.54853 9.54853 9.75 9.3 9.75C9.05147 9.75 8.85 9.54853 8.85 9.3C8.85 9.05147 9.05147 8.85 9.3 8.85C9.54853 8.85 9.75 9.05147 9.75 9.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    //       </svg>
    //       Abrir Modal
    //       <Tooltip>
    //         Abrir Modal
    //       </Tooltip>
    //     </div>
    //   }>
    //     <div className="p-8">
    //       <p className="text-blue-500 font-bold">Esto es un diálogo modal.</p>
    //       <div className="">
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, nostrum dignissimos illum, ratione molestiae aut, esse a porro debitis quia eius modi nulla consequuntur! Iusto nulla eaque quis libero ducimus!
    //         Sint corrupti soluta, doloremque beatae vero facilis praesentium, perferendis officiis nam enim ratione exercitationem dolore aliquid adipisci veniam quos error obcaecati! Quis voluptatum aut alias ad placeat aliquid nihil obcaecati.
    //         Iste repellat culpa eligendi dolorem deleniti officiis ex magni, placeat magnam numquam nobis eveniet beatae. Debitis labore voluptate at, sint consequuntur minus ipsum optio vero quibusdam quam fugit ullam. Nostrum?
    //         Nam obcaecati error id, facilis ipsum, cupiditate omnis deserunt saepe aliquam maiores in perspiciatis consequatur consequuntur iure excepturi rerum provident. Cupiditate quis impedit atque, aspernatur alias itaque. Sint, cupiditate ipsa!
    //         Adipisci vel ad quos temporibus dicta quidem doloremque sed deleniti eos! Quis aspernatur veniam dolor, nulla blanditiis totam molestias perspiciatis nostrum laudantium corrupti, aliquam dolore? Ab amet officiis eligendi autem.
    //       </div>
    //     </div>
    //   </Modal>

    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Spinner</h2>

    //   <div className="font-bold">Por defecto (tipo 0)</div>
    //   <Spinner />

    //   <Separator />

    //   <div className="font-bold">Tipos 0, 1, 2, 3, 4, 5, 6, 7</div>
    //   <div className="flex items-center gap-2">
    //     <Spinner type={0} size={12} color="text-orange-500 dark:text-orange-600" />
    //     <Spinner type={1} size={8} color="text-blue-600 dark:text-blue-300" />
    //     <Spinner type={2} size={9} />
    //     <Spinner type={3} size={11} />
    //     <Spinner type={4} size={11} color="text-blue-500 dark:text-blue-400" />
    //     <Spinner type={5} size={7} color="text-slate-500 dark:text-slate-400" />
    //     <Spinner type={6} size={9} color="text-zinc-500 dark:text-zinc-400" />
    //     <Spinner type={7} size={9} />
    //   </div>

    //   <Separator />


    //   {/* Construcción artesanal ;) */}
    //   <div className="font-bold">No disponible en esta biblioteca. Consulta archivo <a className="text-blue-600" href="https://github.com/jamj2000/simpleui-app/blob/main/README.md">README.md</a></div>
    //   <div className="flex items-center gap-2">
    //     <div className="size-10 inline-block border-x-4 border-blue-600 dark:border-blue-500 rounded-full animate-spin" />
    //     <span className="text-5xl text-slate-200 animate-spin">#</span>
    //     <span className="text-4xl animate-pulse">🔥</span>
    //     <div className="inline-block text-5xl animate-bounce">🦘</div>
    //     <span className="inline-block text-lg text-red-500 animate-ping">❤️</span>
    //   </div>

    //   {/* </div > */}

    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Skeleton</h2>

    //   <Skeleton />




    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">InputText </h2>

    //   <InputText
    //     label="Introduce tu nombre"
    //     name="nombre"
    //     value={"José"}
    //     disabled
    //   />

    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">InputNumber </h2>

    //   <InputNumber
    //     label="Introduce tu edad"
    //     name="edad"
    //     value={18}
    //   />

    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">InputGroup </h2>

    //   <InputGroup
    //     label="Nivel"
    //     name="nivel2"
    //     options={[
    //       // [label, name, checked]
    //       ["Amateur", "amateur", false],
    //       ["Junior", "junior", false],
    //       ["Senior", "senior", true],
    //       ["Veterano", "veterano", false]
    //     ]}
    //     icon={<CrossIcon />}
    //   />


    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">InputGroup (multiple)</h2>

    //   <InputGroup
    //     multiple
    //     label="Habilidades"
    //     name="habilidades2"
    //     options={[
    //       // [label, name, checked]
    //       ["Lectura", "leer", true],
    //       ["Actividad física", "deporte", false],
    //       ["Cine", "cine", true],
    //       ["Playa", "playa", true]
    //     ]}
    //     icon={<HeartIcon />}
    //   />


    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">InputSelect </h2>

    //   <InputSelect
    //     label="Nivel"
    //     name="nivel"
    //     options={[
    //       // [label, name, checked]
    //       ["Amateur", "amateur", false],
    //       ["Junior", "junior", false],
    //       ["Senior", "senior", true],
    //       ["Veterano", "veterano", false]
    //     ]}
    //     className="w-100"
    //   />


    //   <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">InputSelect (multiple) </h2>

    //   <InputSelect
    //     multiple
    //     label="Habilidades"
    //     name="habilidades"
    //     options={[
    //       // [label, name, checked]
    //       ["Lectura", "leer", true],
    //       ["Actividad física", "deporte", false],
    //       ["Cine", "cine", true],
    //       ["Playa", "playa", true]
    //     ]}
    //     className="w-100"
    //   />


    //   <CircleIcon />
    //   <SquareIcon />
    //   <HeartIcon />
    //   <StarIcon />
    //   <HexagonIcon />
    //   <CrossIcon />

    //   <DragAndDrop />


    //   <Space height={50} />


    //   <Suspense fallback="Cargando datos...">
    //     <LoadData searchParams={searchParams} />
    //   </Suspense>
    // </div >
  )
}



async function LoadData({ searchParams }) {
  'use cache'
  const { sort, direction, page, limit } = await searchParams;
  const empleados = await getEmpleados({ sort, direction, page, limit })


  return (
    <div className="flex flex-col">

      <Pagination pages={+empleados.pages} page={+empleados.page} limit={+empleados.limit} />

      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Table</h2>
      <Table
        data={empleados.data}
        columns={[
          { name: "nombre", label: "Nombre" },
          { name: "empresa", label: "Empresa" },
          { name: "cargo", label: "Cargo" },
        ]}
        sort={sort}
        direction={direction}
        width={300}
        actions={[
          ViewEmpleado,
          UpdateEmpleado,
          DeleteEmpleado,
        ]}
      >
        <div className="flex justify-between">
          <h2 className="text-2xl text-center inline">Empleados</h2>
          <CreateEmpleado />
        </div>
      </Table >


      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">List</h2>
      <List
        data={empleados.data}
        columns={[
          { name: "nombre", label: "Nombre" },
          { name: "empresa", label: "Empresa" },
          { name: "cargo", label: "Cargo" },
        ]}
        sort={sort}
        direction={direction}
        // width={300}
        actions={[
          ViewEmpleado,
          UpdateEmpleado,
          DeleteEmpleado,
        ]}
      >
        <div className="flex justify-end">
          <CreateEmpleado />
        </div>
      </List >


    </div >
  )
}
