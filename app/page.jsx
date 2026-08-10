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
  )
}