import Link from "next/link";
import { Form, AlertInfo, AlertSuccess, AlertWarning, AlertError, BadgeInfo, BadgeSuccess, BadgeWarning, BadgeError, Dropdown, Dropdown2, Modal, Popover, Separator, Skeleton, Space, Spinner, Tooltip, InputText, InputCheck, HeartIcon, CrossIcon, InputGroup, Button, InputNumber } from "@/components/simpleui";





export default function Page() {

  return (
    <div className="p-4 md:p-8">

      <h1 className="text-4xl text-indigo-800 dark:text-indigo-300">Componentes SSR</h1>
      <Link href={'/interactive'} className="font-bold text-red-700 dark:text-red-300">Componentes interactivos</Link>

      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Alert</h2>

      <AlertInfo>
        <strong>¡Información!</strong> Este es un mensaje informativo.
      </AlertInfo>

      <AlertSuccess>
        <strong>¡Éxito!</strong> Este es un mensaje de éxito.
      </AlertSuccess>

      <AlertWarning>
        <strong>¡Aviso!</strong> Este es un mensaje de aviso.
      </AlertWarning>

      <AlertError>
        <strong>¡Error!</strong> Este es un mensaje de error.
      </AlertError>

      <AlertInfo small>
        <strong>¡Información!</strong> Este es un mensaje informativo.
      </AlertInfo>

      <AlertSuccess small>
        <strong>¡Éxito!</strong> Este es un mensaje de éxito.
      </AlertSuccess>

      <AlertWarning small>
        <strong>¡Aviso!</strong> Este es un mensaje de aviso.
      </AlertWarning>

      <AlertError small>
        <strong>¡Error!</strong> Este es un mensaje de error.
      </AlertError>

      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Badge</h2>

      <BadgeInfo>Información</BadgeInfo>
      <BadgeSuccess>Éxito</BadgeSuccess>
      <BadgeWarning>Aviso</BadgeWarning>
      <BadgeError>Error</BadgeError>

      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Space, Separator</h2>

      <Space height={20} />
      <Separator />
      <Space height={20} />
      <Separator />
      <Space height={20} />


      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Separator, Tooltip, Popover, Dropdown, Dropdown2</h2>

      <div className="flex items-center gap-4 flex-wrap">
        <Popover title="Popover">
          <div className="flex flex-col gap-1">
            <Link href="#" className="hover:opacity-60 active:opacity-40">Dashboard</Link>
            <Link href="#" className="hover:opacity-60 active:opacity-40">Autores</Link>
            <Link href="#" className="hover:opacity-60 active:opacity-40">Libros</Link>
            <Link href="#" className="hover:opacity-60 active:opacity-40">Prestamos</Link>
          </div>
        </Popover>

        <Separator type="vertical" />

        <Dropdown title="Dropdown" className="bg-blue-100 dark:bg-blue-500 px-4 py-2 border border-slate-300 dark:border-slate-600">
          <div className="flex flex-col gap-2">
            <Link href="#" className="hover:opacity-60 active:opacity-40">Dashboard</Link>
            <Link href="#" className="hover:opacity-60 active:opacity-40">Autores</Link>
            <Link href="#" className="hover:opacity-60 active:opacity-40">Libros</Link>
            <Link href="#" className="hover:opacity-60 active:opacity-40">Prestamos</Link>
          </div>
        </Dropdown>

        <Separator type="vertical" />

        <Dropdown2 title="Dropdown2" className="bg-blue-100 dark:bg-blue-500 px-4 py-2 border border-slate-300 dark:border-slate-600">
          <div className="flex flex-col gap-2">
            <Link href="#" className="hover:opacity-60 active:opacity-40">Dashboard</Link>
            <Link href="#" className="hover:opacity-60 active:opacity-40">Autores</Link>
            <Link href="#" className="hover:opacity-60 active:opacity-40">Libros</Link>
            <Link href="#" className="hover:opacity-60 active:opacity-40">Prestamos</Link>
          </div>
        </Dropdown2>
      </div>

      <div className="group relative">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus corporis, nisi molestiae animi minima, ad architecto harum est eligendi similique ex tempora cum soluta, laborum error? Amet, recusandae explicabo.
          Odio voluptates, ullam neque quo, in eveniet, nihil accusamus nobis aliquid ipsa tenetur magnam. Velit eius adipisci sunt, numquam, asperiores obcaecati natus itaque quae vel aliquam, debitis veritatis aut exercitationem.
          Dicta, perspiciatis soluta inventore possimus at porro enim expedita minima! Architecto, itaque ipsum rem animi a obcaecati corrupti natus officia deserunt voluptatibus, quia optio cupiditate. Minima aperiam dolor culpa ea!
          Quod animi possimus corrupti at esse sunt qui ratione fuga, vero odio quibusdam maiores eius molestias labore veniam, expedita, minima aperiam blanditiis maxime? Ad vero quam exercitationem enim consequatur placeat?
        </div>
        <Tooltip>
          Esto es un tooltip
        </Tooltip>
      </div>


      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">ToolTip, Modal</h2>

      <Modal id="my-dialog" trigger={
        <div className="group relative flex gap-2 items-center border border-slate-300 px-4 py-2 rounded-md cursor-pointer">
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.4 13.8C8.4 13.8 9.75 15.6 12 15.6C14.25 15.6 15.6 13.8 15.6 13.8M14.7 9.3H14.709M9.3 9.3H9.309M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15.15 9.3C15.15 9.54853 14.9485 9.75 14.7 9.75C14.4515 9.75 14.25 9.54853 14.25 9.3C14.25 9.05147 14.4515 8.85 14.7 8.85C14.9485 8.85 15.15 9.05147 15.15 9.3ZM9.75 9.3C9.75 9.54853 9.54853 9.75 9.3 9.75C9.05147 9.75 8.85 9.54853 8.85 9.3C8.85 9.05147 9.05147 8.85 9.3 8.85C9.54853 8.85 9.75 9.05147 9.75 9.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Abrir Modal
          <Tooltip>
            Abrir Modal
          </Tooltip>
        </div>
      }>
        <div className="p-8">
          <p className="text-blue-500 font-bold">Esto es un diálogo modal.</p>
          <div className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, nostrum dignissimos illum, ratione molestiae aut, esse a porro debitis quia eius modi nulla consequuntur! Iusto nulla eaque quis libero ducimus!
            Sint corrupti soluta, doloremque beatae vero facilis praesentium, perferendis officiis nam enim ratione exercitationem dolore aliquid adipisci veniam quos error obcaecati! Quis voluptatum aut alias ad placeat aliquid nihil obcaecati.
            Iste repellat culpa eligendi dolorem deleniti officiis ex magni, placeat magnam numquam nobis eveniet beatae. Debitis labore voluptate at, sint consequuntur minus ipsum optio vero quibusdam quam fugit ullam. Nostrum?
            Nam obcaecati error id, facilis ipsum, cupiditate omnis deserunt saepe aliquam maiores in perspiciatis consequatur consequuntur iure excepturi rerum provident. Cupiditate quis impedit atque, aspernatur alias itaque. Sint, cupiditate ipsa!
            Adipisci vel ad quos temporibus dicta quidem doloremque sed deleniti eos! Quis aspernatur veniam dolor, nulla blanditiis totam molestias perspiciatis nostrum laudantium corrupti, aliquam dolore? Ab amet officiis eligendi autem.
          </div>
        </div>
      </Modal>

      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Spinner</h2>

      {/* <div className="flex items-center gap-2 flex-wrap"> */}

      {/* Spinners. Por defecto type={0} */}
      <div className="font-bold">Por defecto (tipo 0)</div>
      <Spinner />

      <Separator />

      <div className="font-bold">Tipos 0, 1, 2, 3, 4, 5, 6, 7</div>
      <div className="flex items-center gap-2">
        <Spinner type={0} size={12} color="text-orange-500 dark:text-orange-600" />
        <Spinner type={1} size={8} color="text-blue-600 dark:text-blue-300" />
        <Spinner type={2} size={9} />
        <Spinner type={3} size={11} />
        <Spinner type={4} size={11} color="text-blue-500 dark:text-blue-400" />
        <Spinner type={5} size={7} color="text-slate-500 dark:text-slate-400" />
        <Spinner type={6} size={9} color="text-zinc-500 dark:text-zinc-400" />
        <Spinner type={7} size={9} />
      </div>

      <Separator />


      {/* Construcción artesanal ;) */}
      <div className="font-bold">No disponible en esta biblioteca. Consulta archivo <a className="text-blue-600" href="https://github.com/jamj2000/simpleui-app/blob/main/README.md">README.md</a></div>
      <div className="flex items-center gap-2">
        <div className="size-10 inline-block border-x-4 border-blue-600 dark:border-blue-500 rounded-full animate-spin" />
        <span className="text-5xl text-slate-200 animate-spin">#</span>
        <span className="text-4xl animate-pulse">🔥</span>
        <div className="inline-block text-5xl animate-bounce">🦘</div>
        <span className="inline-block text-lg text-red-500 animate-ping">❤️</span>
      </div>

      {/* </div > */}

      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Skeleton</h2>

      <Skeleton />


      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">InputText </h2>

      <InputText
        label="Introduce tu nombre"
        name="nombre"
        disabled
      />

      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">InputNumber </h2>

      <InputNumber
        label="Introduce tu edad"
        name="edad"
      />

      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">InputGroup (radio) </h2>

      <InputGroup
        radio
        label="Nivel"
        name="nivel"
        values={[
          ["amateur", false],
          ["junior", false],
          ["senior", true],
          ["veterano", false]
        ]}
        icon={<CrossIcon />}
      />


      <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">InputGroup (checkbox)</h2>

      <InputGroup
        label="Habilidades"
        name="habilidades"
        values={[
          ["leer", true],
          ["deporte", false],
          ["cine", true],
          ["playa", true]
        ]}
        icon={<HeartIcon />}
      />

    </div>
  )
}

